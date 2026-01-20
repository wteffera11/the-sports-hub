import { useQuery } from "@tanstack/react-query";
import type { EventStatsResponse } from "../types/event";

export const useEventTimeline = (eventId: string) => {
	return useQuery<EventStatsResponse>({
		queryKey: ["eventStats", eventId],
		queryFn: async () => {
			const response = await fetch(
				`https://www.thesportsdb.com/api/v1/json/123/lookuptimeline.php?id=${eventId}`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		},
		enabled: !!eventId,
	});
};
