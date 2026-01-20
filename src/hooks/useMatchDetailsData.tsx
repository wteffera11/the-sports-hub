import { useQuery } from "@tanstack/react-query";
import { eventsApi } from "../api/events.api";
import type { EventDetail } from "../types/event";

interface EventResponse {
	events: EventDetail[];
}

export const useMatchDetailData = (eventId: string) => {
	const { data, isLoading, error } = useQuery<EventResponse>({
		queryKey: ["event", eventId],
		queryFn: () => eventsApi.fetchEventById(eventId),
		enabled: !!eventId,

		refetchInterval: (query) => {
			const event = query?.state?.data?.events?.[0];
			const isFinished =
				event?.strStatus === "FT" || event?.strStatus === "Match Finished";

			return isFinished ? false : 15_000;
		},
	});

	const event = data?.events?.[0];

	return {
		event,
		isLoading,
		error,
	};
};
