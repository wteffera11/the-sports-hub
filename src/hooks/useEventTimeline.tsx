import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL, API_ENDPOINTS } from "../constants/api";
import type { EventStatsResponse } from "../types/event";

export const useEventTimeline = (eventId: string, matchStatus?: string) => {
	return useQuery<EventStatsResponse>({
		queryKey: ["eventStats", eventId],
		queryFn: async () => {
			const response = await fetch(
				`${API_BASE_URL}${API_ENDPOINTS.TIMELINE}?id=${eventId}`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
		refetchInterval:
			matchStatus && (matchStatus === "FT" || matchStatus === "Match Finished")
				? false
				: 15 * 1000,
		enabled: !!eventId,
	});
};
