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
		<div className="flex items-center justify-center gap-4 pt-4 overflow-x-auto px-8 md:overflow-visible">
			{tabs.map((tabItem) => (
				<button
					key={tabItem}
					onClick={() => onTabClick(tabItem)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							onTabClick(tabItem);
						}
					}}
					type="button"
					tabIndex={0}
					className={`transition-colors cursor-pointer p-2 border-b-2 border-background-surface ${
						currentTab === tabItem ||
						(currentTab === "Events" && tabItem === "Events")
							? "text-white border-secondary"
							: "text-foreground-muted hover:text-white"
					}`}
				>
					<p className="text-center py-2 text-sm font-medium leading-5">
						{tabItem}
					</p>
				</button>
			))}
		</div>
	);
};
