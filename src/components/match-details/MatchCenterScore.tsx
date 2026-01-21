import type React from "react";

interface EventDetail {
	strStatus: string;
	strTime: string;
	dateEvent: string;
	intHomeScore: string;
	intAwayScore: string;
}

interface MatchCenterScoreProps {
	event: EventDetail;
}

export const MatchCenterScore: React.FC<MatchCenterScoreProps> = ({
	event,
}) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date
			.toLocaleDateString("en-US", { month: "short", day: "numeric" })
			.replace(/(\w+)\s(\d+)/, "$1 $2");
	};

	const getStatusText = () => {
		if (event.strStatus === "FT" || event.strStatus === "Match Finished") {
			return "Finished";
		}
		if (
			event.strStatus === "1H" ||
			event.strStatus === "2H" ||
			event.strStatus === "HT"
		) {
			return event.strTime || "Live";
		}
		return event.strTime || "Not Started";
	};

	const getStatusBgColor = () => {
		switch (event.strStatus) {
			case "FT":
			case "Match Finished":
				return "bg-[#EE5E52]";
			case "NS":
			case "Not Started":
				return "bg-[#374151]";
			default:
				return "bg-[#00FFA5]";
		}
	};

	return (
		<div className="text-center">
			<div className="font-semibold text-xs leading-4 text-[#E5E7EB] uppercase">
				{formatDate(event.dateEvent)}
			</div>
			<div className="text-4xl font-bold mb-2">
				{event.strStatus === "FT" ||
				event.strStatus === "Match Finished" ||
				event.strStatus === "1H" ||
				event.strStatus === "2H" ? (
					<div className="flex items-center space-x-3">
						<span className="font-semibold text-2xl leading-7">
							{event.intHomeScore}
						</span>
						<span className="font-bold text-2xl leading-7">-</span>
						<span className="font-semibold text-2xl leading-7">
							{event.intAwayScore}
						</span>
					</div>
				) : (
					<div className="text-sm text-gray-400">vs</div>
				)}
			</div>
			<div
				className={`font-semibold text-xxs leading-4 px-1 rounded-sm  ${getStatusBgColor()} rounded px-2 py-1 inline-block`}
			>
				{getStatusText()}
			</div>
		</div>
	);
};
