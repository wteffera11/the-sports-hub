import type React from "react";
import { useNavigate, useSearchParams } from "react-router";
import type { EventDetail } from "../../types/event";
import { HeadToHeadTeam } from "./HeadToHeadTeam";
import { MatchCenterScore } from "./MatchCenterScore";
import { MatchHeader } from "./MatchHeader";
import { TabNavigation } from "./TabNavigation";

interface HeadToHeadProps {
	event: EventDetail;
	selectedDate?: string;
}

export const HeadToHead: React.FC<HeadToHeadProps> = ({
	event,
	selectedDate,
}) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const currentTab = searchParams.get("tab") || "Events";

	const handleTabClick = (selectedTab: string) => {
		navigate(`/match/${event.idEvent}?tab=${selectedTab}`);
	};

	const handleBack = () => {
		navigate("/", { state: { selectedDate } });
	};

	return (
		<div className="bg-background-surface border-b border-border-base px-2 md:px-4 md:pb-0">
			<MatchHeader league={event.strLeague} onBack={handleBack} />

			<div className="flex items-center justify-between mb-6">
				<HeadToHeadTeam
					teamBadge={event.strHomeTeamBadge}
					teamName={event.strHomeTeam}
					yellowCards={event.strHomeYellowCards}
					redCards={event.strHomeRedCards}
				/>

				<MatchCenterScore event={event} />

				<HeadToHeadTeam
					teamBadge={event.strAwayTeamBadge}
					teamName={event.strAwayTeam}
					yellowCards={event.strAwayYellowCards}
					redCards={event.strAwayRedCards}
				/>
			</div>

			<TabNavigation currentTab={currentTab} onTabClick={handleTabClick} />
		</div>
	);
};
