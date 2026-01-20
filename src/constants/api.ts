// src/constants/api.ts
export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const LEAGUES = {
	ENGLISH_PREMIER_LEAGUE: "English Premier League",
} as const;

export const API_ENDPOINTS = {
	EVENTS_DAY: "/eventsday.php",
	EVENT_LOOKUP: "/lookupevent.php",
	TIMELINE: "/lookuptimeline.php",
} as const;
