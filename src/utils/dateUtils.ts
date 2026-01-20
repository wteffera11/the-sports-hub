export const formatDate = (date: Date) => {
	return date.toLocaleDateString("en-US", {
		weekday: "short",
		month: "short",
		day: "numeric",
	});
};

export const isToday = (date: Date) => {
	const today = new Date();
	return date.toDateString() === today.toDateString();
};

export const generateMobileDates = () => {
	const dates = [];
	const today = new Date();

	for (let i = -3; i <= 3; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() + i);
		dates.push(date);
	}

	return dates;
};
