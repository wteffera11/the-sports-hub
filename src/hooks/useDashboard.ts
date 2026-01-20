import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL, API_ENDPOINTS, LEAGUES } from "../constants/api";
import type { Event } from "../types/event";

interface EventsResponse {
	events: Event[];
}

export const useDashboardData = (selectedDate?: string) => {
	const { data, isLoading, error } = useQuery<EventsResponse>({
		queryKey: ["events", selectedDate],
		queryFn: async () => {
			const dateToUse = selectedDate || new Date().toISOString().split("T")[0];
			const response = await fetch(
				`${API_BASE_URL}${API_ENDPOINTS.EVENTS_DAY}?d=${dateToUse}&l=${LEAGUES.ENGLISH_PREMIER_LEAGUE}`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
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
