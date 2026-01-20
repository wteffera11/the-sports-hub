import { API_BASE_URL, API_ENDPOINTS, LEAGUES } from "../constants/api";
import type { Event, EventDetail, EventStatsResponse } from "../types/event";

interface EventsResponse {
	events: Event[];
}

interface EventResponse {
	events: EventDetail[];
}

export const eventsApi = {
	fetchEventsByDay: async (selectedDate?: string): Promise<EventsResponse> => {
		const dateToUse = selectedDate || new Date().toISOString().split("T")[0];
		const response = await fetch(
			`${API_BASE_URL}${API_ENDPOINTS.EVENTS_DAY}?d=${dateToUse}&l=${LEAGUES.ENGLISH_PREMIER_LEAGUE}`,
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	},

	fetchEventById: async (eventId: string): Promise<EventResponse> => {
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

	fetchEventTimeline: async (eventId: string): Promise<EventStatsResponse> => {
		const response = await fetch(
			`${API_BASE_URL}${API_ENDPOINTS.TIMELINE}?id=${eventId}`,
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	},
};
