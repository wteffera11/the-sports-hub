import React from "react";
import { useLocation } from "react-router";
import logoSrc from "../assets/logo.png";
import { menus } from "../constants/menu";
import { GlobeIcon, SoccerBallIcon, TrailingIcon } from "../icons";
import { CountryFlagSelector } from "./CountryFlagSelector";
import { LeagueSelector } from "./LeagueSelector";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
	const location = useLocation();
	const isActive = (path: string) => location.pathname === path;

	return (
		<header className={`bg-primary h-[56px] md:h-[60px] px-4`}>
			<div className="max-w-360 mx-auto">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center space-x-8">
						<img
							src={logoSrc}
							alt={"Statscore"}
							className="h-[26px] md:h-[60px] w-[82px] md:w-[200px] object-contain"
						/>
						<nav className="hidden lg:flex items-center space-x-6  my-auto">
							{menus.map((menu) => {
								return (
									<a
										key={menu.path}
										href={menu.path}
										className={`text-sm font-medium py-2 border-b-2 ${
											isActive(menu.path)
												? "text-secondary border-secondary"
												: "text-white border-primary hover:text-secondary"
										}`}
									>
										{menu.name}
									</a>
								);
							})}
						</nav>
					</div>

					<div className="flex items-center space-x-2 md:space-x-4">
						<div className="flex w-6 md:w-10 h-6 md:h-10 rounded-full items-center justify-center bg-black/15 cursor-pointer">
							<GlobeIcon className="w-4 h-4 md:w-6 md:h-6" />
						</div>

						<div className="flex w-6 md:w-10 h-6 md:h-10 rounded-full items-center justify-center bg-black/15 cursor-pointer">
							<SoccerBallIcon className="w-4 h-4 md:w-6 md:h-6" />
						</div>

						<LeagueSelector />

						<div className="flex items-center space-x-2 px-3 py-2 h-8 md:h-10 text-sm text-white bg-black/15 hover:bg-white/10 transition-colors cursor-pointer rounded-full">
							<span>2024/25</span>
							<TrailingIcon />
						</div>

						<div className="hidden lg:flex">
							<CountryFlagSelector />
						</div>
						<MobileMenu />
					</div>
				</div>
			</div>
		</header>
	);
};
