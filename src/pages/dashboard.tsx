import React from "react";
import { useLocation } from "react-router";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { LeagueSection } from "../components/dashboard/LeagueSection";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { MatchFilters } from "../components/MatchFilters";
import { NoDataState } from "../components/NoDataState";
import { useDashboardData } from "../hooks/useDashboard";

interface DashboardPageProps {
	className?: string;
}

export const DashboardPage: React.FC<DashboardPageProps> = () => {
	const location = useLocation();
	const routerState = location.state as { selectedDate?: string } | null;

	// Use the selected date from router state if available, otherwise initialize as undefined
	const [selectedDate, setSelectedDate] = React.useState<string | undefined>(
		routerState?.selectedDate,
	);

	const {
		events,
		groupedEvents,
		allCount,
		liveCount,
		favoriteCount,
		isLoading,
		error,
	} = useDashboardData(selectedDate);

	const handleDateChange = (date: string) => {
		setSelectedDate(date);
	};

	if (isLoading) return <LoadingState />;
	if (error)
		return <ErrorState message={`Error loading events: ${error.message}`} />;

	return (
		<>
			<DashboardHeader
				onDateChange={handleDateChange}
				selectedDate={selectedDate}
			/>
			<div className="min-h-screen text-white px-4 md:p-4">
				<div className="w-full md:max-w-4xl mx-auto">
					<MatchFilters
						allCount={allCount}
						liveCount={liveCount}
						favoriteCount={favoriteCount}
					/>

					<div className="space-y-4 bg-inherit">
						{!isLoading && events.length === 0 && <NoDataState />}
						{!isLoading &&
							events.length > 0 &&
							Object.entries(groupedEvents).map(
								([leagueName, leagueEvents]) => (
									<LeagueSection
										key={leagueName}
										leagueName={leagueName}
										events={leagueEvents}
										selectedDate={selectedDate}
									/>
								),
							)}
					</div>
				</div>
			</div>
		</>
	);
};
