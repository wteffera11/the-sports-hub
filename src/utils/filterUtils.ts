export type FilterType = "all" | "live" | "favorite";

export const getFilterButtonClasses = (
	_filter: FilterType,
	isActive: boolean,
): string => {
	const baseClasses = "flex items-center gap-2 py-2 px-4 rounded-lg!";
	return `${baseClasses} ${isActive ? "bg-secondary text-black!" : "bg-background-surface text-white!"}`;
};

export const getFilterCountClasses = (isActive: boolean): string => {
	return `size-4 text-xs rounded-full ${isActive ? "bg-black! text-secondary" : "bg-black! text-white!"}`;
};

export const getFilterTextClasses = (isActive: boolean): string => {
	return `text-sm leading-5 ${isActive ? "text-background-surface" : "text-white!"}`;
};
