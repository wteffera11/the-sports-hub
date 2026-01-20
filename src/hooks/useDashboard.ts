import { useQuery } from "@tanstack/react-query";
import { eventsApi } from "../api/events.api";
import type { Event } from "../types/event";

interface EventsResponse {
	events: Event[];
}

export const useDashboardData = (selectedDate?: string) => {
	const { data, isLoading, error } = useQuery<EventsResponse>({
		queryKey: ["events", selectedDate],
		queryFn: () => eventsApi.fetchEventsByDay(selectedDate),
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
	const liveCount = events.filter(
		(e) => e.strStatus === "1H" || e.strStatus === "2H",
	).length;
	const favoriteCount = 0;

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
