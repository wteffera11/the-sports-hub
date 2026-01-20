import React, { useState } from "react";
import { HeartIcon, LiveIcon } from "../icons/index";

export type FilterType = "all" | "live" | "favorite";

interface MatchFiltersProps {
	allCount: number;
	liveCount: number;
	favoriteCount: number;
	onFilterChange?: (filter: FilterType) => void;
	defaultActive?: FilterType;
}

export const MatchFilters: React.FC<MatchFiltersProps> = ({
	allCount,
	liveCount,
	favoriteCount,
	onFilterChange,
	defaultActive = "all",
}) => {
	const [activeFilter, setActiveFilter] = useState<FilterType>(defaultActive);

	const handleFilterClick = (filter: FilterType) => {
		setActiveFilter(filter);
		onFilterChange?.(filter);
	};

	const getButtonClasses = (filter: FilterType) => {
		const isActive = activeFilter === filter;
		const baseClasses = "flex items-center gap-2 py-2 px-4 rounded-lg!";

		if (filter === "all") {
			return `${baseClasses} ${isActive ? "bg-secondary text-black!" : "bg-background-surface text-white!"}`;
		}

		return `${baseClasses} ${isActive ? "bg-secondary text-black!" : "bg-background-surface text-white!"}`;
	};

	const getCountClasses = (filter: FilterType) => {
		const isActive = activeFilter === filter;
		return `size-4 text-xs rounded-full ${isActive ? "bg-black! text-secondary" : "bg-black! text-white!"}`;
	};

	return (
		<div className="flex items-center gap-4 mb-4">
			<button
				type="button"
				className={getButtonClasses("all")}
				onClick={() => handleFilterClick("all")}
			>
				<span
					className={`text-sm leading-5 ${activeFilter === "all" ? "text-background-surface" : "text-white!"}`}
				>
					All
				</span>
				<span className={getCountClasses("all")}>{allCount}</span>
			</button>
			<button
				type="button"
				className={getButtonClasses("live")}
				onClick={() => handleFilterClick("live")}
			>
				<LiveIcon />
				<span
					className={`text-sm leading-5 ${activeFilter === "live" ? "text-background-surface" : "text-white!"}`}
				>
					Live
				</span>
				<span className={getCountClasses("live")}>{liveCount}</span>
			</button>
			<button
				type="button"
				className={getButtonClasses("favorite")}
				onClick={() => handleFilterClick("favorite")}
			>
				<HeartIcon />
				<span
					className={`text-sm leading-5 ${activeFilter === "favorite" ? "text-background-surface" : "text-white!"}`}
				>
					Favorite
				</span>
				<span className={getCountClasses("favorite")}>{favoriteCount}</span>
			</button>
		</div>
	);
};
