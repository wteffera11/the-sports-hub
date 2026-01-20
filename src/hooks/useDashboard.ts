import { useQuery } from "@tanstack/react-query";
import type { Event } from "../types/event";

interface EventsResponse {
	events: Event[];
}

const API_URL = import.meta.env?.VITE_API_URL;

export const useDashboardData = (selectedDate?: string) => {
	const { data, isLoading, error } = useQuery<EventsResponse>({
		queryKey: ["events", selectedDate],
		queryFn: async () => {
			const dateToUse = selectedDate || new Date().toISOString().split("T")[0];
			const response = await fetch(
				`${API_URL}/eventsday.php?d=${dateToUse}&l=English Premier League`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
		// refetch only if there is a response if there are no games on the selected day, there is no point in refetching
		refetchInterval: (query) => {
			return query?.state?.data?.events?.length ? false : 15_000;
		},
	});

	const events = data?.events || [];

	const groupedEvents = events.reduce(
		(acc, event) => {
			if (!acc[event.strLeague]) {
				acc[event.strLeague] = [];
			}
			acc[event.strLeague].push(event);
			return acc;
		},
		{} as Record<string, Event[]>,
	);

	const allCount = events.length;
	const liveCount = events.filter((e) => e.strStatus === "Match Live").length;
	const favoriteCount = 2;

	return {
		events,
		groupedEvents,
		allCount,
		liveCount,
		favoriteCount,
		isLoading,
		error,
	};
};
