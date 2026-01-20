export const getBorderColor = (status: string) => {
	switch (status) {
		case "FT":
		case "Match Finished":
			return "border-l-[#EE5E52]";
		case "NS":
		case "Not Started":
			return "border-l-[#374151]";
		default:
			return "border-l-[#00FFA5]";
	}
};

export const getTimeDisplay = (event: {
	strStatus: string;
	strTime: string;
}) => {
	if (event.strStatus === "FT" || event.strStatus === "Match Finished") {
		return "FT";
	}
	if (event.strStatus === "1H") {
		return "1H";
	}
	if (event.strStatus === "2H") {
		return "2H";
	}
	if (event.strTime && event.strTime.trim() !== "") {
		const timeParts = event.strTime.split(":");
		return timeParts.length >= 2
			? `${timeParts[0]}:${timeParts[1]}`
			: event.strTime;
	}
	return "TBD";
};
