import type React from "react";
import type { Event } from "../../types/event";
import { getBorderColor, getTimeDisplay } from "../../utils/matchTimeUtils";

interface MatchTimeDisplayProps {
	event: Pick<Event, "strStatus" | "strTime">;
}

export const MatchTimeDisplay: React.FC<MatchTimeDisplayProps> = ({
	event,
}) => {
	return (
		<div className="text-center min-w-[60px]">
			<div
				className={`text-xs py-[22px]! border-l-3! w-14! px-4 -pl-4 ${getBorderColor(event.strStatus)} text-gray-400`}
			>
				{getTimeDisplay(event)}
			</div>
		</div>
	);
};
