import React, { useState } from "react";
import { HeartIcon, LiveIcon } from "../icons/index";
import {
	getFilterButtonClasses,
	getFilterCountClasses,
	getFilterTextClasses,
} from "../utils/filterUtils";

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

	const renderFilterButton = (
		filter: FilterType,
		label: string,
		count: number,
		Icon?: React.ComponentType<{ className?: string }>,
	) => {
		const isActive = activeFilter === filter;
		return (
			<button
				type="button"
				className={getFilterButtonClasses(filter, isActive)}
				onClick={() => handleFilterClick(filter)}
			>
				{Icon && <Icon />}
				<span className={getFilterTextClasses(isActive)}>{label}</span>
				<span className={getFilterCountClasses(isActive)}>{count}</span>
			</button>
		);
	};

	return (
		<div className="flex items-center gap-4 mb-4">
			{renderFilterButton("all", "All", allCount)}
			{renderFilterButton("live", "Live", liveCount, LiveIcon)}
			{renderFilterButton("favorite", "Favorite", favoriteCount, HeartIcon)}
		</div>
	);
};
