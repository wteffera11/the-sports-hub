import React from "react";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "../../icons";
import { formatDate, isToday } from "../../utils/dateUtils";

interface DesktopDateFilterProps {
	onDateChange?: (date: string) => void;
	selectedDate?: string;
}

export const DesktopDateFilter: React.FC<DesktopDateFilterProps> = ({
	onDateChange,
	selectedDate,
}) => {
	const currentDate = selectedDate ? new Date(selectedDate) : new Date();

	const goToPreviousDay = () => {
		const previousDay = new Date(currentDate);
		previousDay.setDate(previousDay.getDate() - 1);
		const dateStr = previousDay.toISOString().split("T")[0];
		onDateChange?.(dateStr);
	};

	const goToNextDay = () => {
		const nextDay = new Date(currentDate);
		nextDay.setDate(nextDay.getDate() + 1);
		const dateStr = nextDay.toISOString().split("T")[0];
		onDateChange?.(dateStr);
	};

	return (
		<div className="hidden md:flex flex-col w-full max-w-4xl mx-auto text-white pt-4">
			<div>
				<h4 className="font-semibold text-xl">Matches</h4>
			</div>
			<div className="flex items-center justify-between mt-4 h-14 py-2 px-4 bg-background-surface rounded-lg w-full">
				<button
					type="button"
					className="rounded-full w-8 h-8  p-2 gap-1 transition-colors mx-0 cursor-pointer"
					aria-label="Go back"
					onClick={goToPreviousDay}
				>
					<ChevronLeftIcon />
				</button>
				<div className="flex items-center gap-1">
					<CalendarIcon />
					<p className="font-semibold text-sm leading-5">
						{isToday(currentDate) ? "Today" : formatDate(currentDate)}
					</p>
				</div>
				<div className="flex items-center space-x-2">
					<button
						type="button"
						className="rounded-full w-8 h-8  p-2 gap-1  flex cursor-pointer"
						onClick={goToNextDay}
					>
						<ChevronRightIcon />
					</button>
				</div>
			</div>
		</div>
	);
};
