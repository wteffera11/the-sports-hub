import React from "react";
import { CalendarGreenIcon } from "../../icons/index";
import {
	formatDate,
	generateMobileDates,
	isToday,
} from "../../utils/dateUtils";

interface MobileDashboardHeaderProps {
	onDateChange?: (date: string) => void;
	selectedDate?: string;
}

export const MobileDashboardHeader: React.FC<MobileDashboardHeaderProps> = ({
	onDateChange,
	selectedDate,
}) => {
	const currentDate = selectedDate ? new Date(selectedDate) : new Date();

	const selectDate = (date: Date) => {
		onDateChange?.(date.toISOString().split("T")[0]);
	};

	const mobileDates = generateMobileDates();

	return (
		<div className="md:hidden relative py-4">
			<div className="flex items-center justify-between mb-4">
				<div className="relative flex  overflow-x-auto scrollbar-hide">
					<div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background pointer-events-none z-10"></div>
					<div className="flex space-x-2 overflow-x-auto scrollbar-hide">
						{mobileDates.map((date) => {
							const active = date.toDateString() === currentDate.toDateString();
							const isTodayDate = isToday(date);
							const dateKey = date.toISOString();

							return (
								<button
									key={dateKey}
									type="button"
									onClick={() => selectDate(date)}
									className={`shrink-0 px-3 py-2 rounded-full text-xs font-medium transition-colors text-foreground-muted ${
										active ? " text-secondary" : ""
									}`}
								>
									<div className="text-center">
										<div className="font-semibold">
											{isTodayDate ? "TODAY" : formatDate(date).split(",")[0]}
										</div>
										<div className="text-xs">
											{formatDate(date).split(",")[1]}
										</div>
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>

			<div className="flex justify-center">
				<button
					type="button"
					className="w-10 h-10 rounded-full bg-background-muted flex items-center justify-center transition-colors absolute top-0 right-1.5 z-50"
					aria-label="Open calendar"
				>
					<CalendarGreenIcon />
				</button>
			</div>
		</div>
	);
};
