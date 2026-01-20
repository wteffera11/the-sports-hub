import { useQuery } from "@tanstack/react-query";
import type { EventStatsResponse } from "../types/event";

const API_URL = import.meta.env?.VITE_API_URL;

export const useEventTimeline = (eventId: string) => {
	return useQuery<EventStatsResponse>({
		queryKey: ["eventStats", eventId],
		queryFn: async () => {
			const response = await fetch(
				`${API_URL}/lookuptimeline.php?id=${eventId}`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
		enabled: !!eventId,
	});
};
