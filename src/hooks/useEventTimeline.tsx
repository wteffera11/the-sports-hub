import { useQuery } from "@tanstack/react-query";
import { eventsApi } from "../api/events.api";
import type { EventStatsResponse } from "../types/event";

export const useEventTimeline = (eventId: string, matchStatus?: string) => {
	return useQuery<EventStatsResponse>({
		queryKey: ["eventStats", eventId],
		queryFn: () => eventsApi.fetchEventTimeline(eventId),
		refetchInterval:
			matchStatus && (matchStatus === "FT" || matchStatus === "Match Finished")
				? false
				: 15 * 1000,
		enabled: !!eventId,
	});
};
