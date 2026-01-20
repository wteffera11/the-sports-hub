import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL, API_ENDPOINTS } from "../constants/api";
import type { EventDetail } from "../types/event";

interface EventResponse {
	events: EventDetail[];
}

export const useMatchDetailData = (eventId: string) => {
	const { data, isLoading, error } = useQuery<EventResponse>({
		queryKey: ["event", eventId],
		queryFn: async () => {
			if (!eventId) {
				throw new Error("Event ID is required");
			}
			const response = await fetch(
				`${API_BASE_URL}${API_ENDPOINTS.EVENT_LOOKUP}?id=${eventId}`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
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
