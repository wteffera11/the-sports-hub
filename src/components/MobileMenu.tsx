import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { menus } from "../constants/menu";
import { HamburgerIcon } from "../icons/index";
import type { MenuItem } from "../types/menu";

interface MobileMenuProps {
	textColor?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = useCallback(() => {
		setIsOpen(false);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Element;
			if (isOpen && !target.closest(".mobile-menu-container")) {
				closeMenu();
			}
		};

		if (isOpen) {
			document.addEventListener("click", handleClickOutside);
		}

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen, closeMenu]);

	useEffect(() => {
		closeMenu();
	}, [closeMenu]);

	return (
		<div className="mobile-menu-container relative lg:hidden">
			<button
				type="button"
				onClick={toggleMenu}
				className={`w-6 md:w-10 h-6 md:h-10 rounded-full flex items-center justify-center bg-black/15 transition-colors  text-foreground-base`}
				aria-label="Toggle menu"
				aria-expanded={isOpen}
			>
				<HamburgerIcon isOpen={isOpen} className="w-4 h-4 md:w-6 md:h-6" />
			</button>

			{isOpen && (
				<>
					<button
						type="button"
						className="fixed inset-0 bg-black/50 z-40"
						onClick={closeMenu}
						onKeyDown={(e) => {
							if (e.key === "Escape" || e.key === "Enter") {
								closeMenu();
							}
						}}
						aria-label="Close menu"
					/>

					<div className="fixed top-0 right-0 h-full w-80 bg-primary shadow-xl z-[9999] transform transition-transform duration-300 ease-in-out">
						<div className="flex items-center justify-between p-4 border-b border-white/10">
							<h2 className="text-white font-semibold text-lg">Menu</h2>
							<button
								type="button"
								onClick={closeMenu}
								className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
								aria-label="Close menu"
							>
								<HamburgerIcon isOpen={true} className="w-5 h-5 text-white" />
							</button>
						</div>

						<nav className="flex-1 overflow-y-auto py-4">
							{menus.map((menu: MenuItem) => (
								<a
									key={menu.path}
									href={menu.path}
									onClick={(e) => {
										e.preventDefault();
										closeMenu();
										window.location.href = menu.path;
									}}
									className={`flex items-center px-6 py-4 text-sm font-medium transition-colors cursor-pointer border-b border-white/5 ${
										isActive(menu.path)
											? "text-white bg-white/10 border-l-4 border-white"
											: "text-white/80 hover:text-white hover:bg-white/10"
									}`}
								>
									{menu.name}
								</a>
							))}
						</nav>
					</div>
				</>
			)}
		</div>
	);
};
