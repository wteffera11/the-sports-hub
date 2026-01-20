import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import EventStats from "../components/match-details/EventState";
import { HeadToHead } from "../components/match-details/MatchOverview";
import { NoDataState } from "../components/NoDataState";
import { useMatchDetailData } from "../hooks/useMatchDetailsData";

const MatchDetailPage: React.FC = () => {
	const { eventId } = useParams<{ eventId: string }>();
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const routerState = location.state as { selectedDate?: string } | null;
	const currentTab = searchParams.get("tab") || "Events";

	const { event, isLoading, error } = useMatchDetailData(eventId!);

	if (isLoading) {
		return <LoadingState />;
	}

	if (error) {
		return (
			<ErrorState message={`Error loading match details: ${error.message}`} />
		);
	}

	if (!event) {
		return <NoDataState />;
	}

	const renderTabContent = () => {
		switch (currentTab) {
			case "Events":
				return <EventStats event={event!} />;
			default:
				return (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"></div>
				);
		}
	};

	return (
		<div className="min-h-[calc(100vh-60px)] text-foreground-base p-0 md:p-4">
			<div className="w-full md:max-w-[707px] mx-auto flex flex-col gap-y-4">
				<HeadToHead event={event} selectedDate={routerState?.selectedDate} />
				<div className="px-4 md:p-0">{renderTabContent()}</div>
			</div>
		</div>
	);
};

export default MatchDetailPage;
