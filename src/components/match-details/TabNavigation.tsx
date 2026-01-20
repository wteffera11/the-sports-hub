import type React from "react";

interface TabNavigationProps {
	currentTab: string;
	onTabClick: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
	currentTab,
	onTabClick,
}) => {
	const tabs = ["Details", "Odds", "Lineups", "Events", "Stats", "Standings"];

	return (
		<div
			className="
				sticky top-0 z-30
				overflow-x-auto
				no-scrollbar
				md:static
			"
		>
			<div
				className="
					flex items-center
					gap-3 px-4
					snap-x snap-mandatory
					md:justify-center md:gap-6 md:px-0
				"
			>
				{tabs.map((tabItem) => {
					const isActive = currentTab === tabItem;

					return (
						<button
							key={tabItem}
							type="button"
							onClick={() => onTabClick(tabItem)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									onTabClick(tabItem);
								}
							}}
							className={`
								snap-start
								whitespace-nowrap
								px-3 py-2
								border-b-2
								transition-colors
								text-sm md:text-base
								${
									isActive
										? "text-white border-secondary"
										: "text-foreground-muted border-transparent hover:text-white"
								}
							`}
						>
							{tabItem}
						</button>
					);
				})}
			</div>
		</div>
	);
};
