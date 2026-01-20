interface Event {
	idEvent: string;
	strEvent: string;
	strLeague: string;
	strHomeTeam: string;
	strAwayTeam: string;
	intHomeScore: string;
	intAwayScore: string;
	strStatus: string;
	strTime: string;
	dateEvent: string;
	strThumb: string | null;
	strHomeTeamBadge: string | null;
	strAwayTeamBadge: string | null;
}

interface EventDetail {
	idEvent: string;
	idAPIfootball: string;
	strEvent: string;
	strEventAlternate: string;
	strFilename: string;
	strSport: string;
	idLeague: string;
	strLeague: string;
	strLeagueBadge: string;
	strSeason: string;
	strDescriptionEN: string;
	strHomeTeam: string;
	strAwayTeam: string;
	intHomeScore: string;
	intRound: string;
	intAwayScore: string;
	intSpectators: string | null;
	strOfficial: string | null;
	strTimestamp: string;
	dateEvent: string;
	dateEventLocal: string;
	strTime: string;
	strTimeLocal: string;
	strGroup: string;
	idHomeTeam: string;
	strHomeTeamBadge: string;
	idAwayTeam: string;
	strAwayTeamBadge: string;
	intScore: string | null;
	intScoreVotes: string | null;
	strResult: string;
	idVenue: string;
	strVenue: string;
	strCountry: string;
	strCity: string;
	strPoster: string;
	strSquare: string;
	strFanart: string | null;
	strThumb: string;
	strBanner: string;
	strMap: string | null;
	strTweet1: string;
	strVideo: string;
	strStatus: string;
	strPostponed: string;
	strLocked: string;
	strHomeYellowCards: string | null;
	strAwayYellowCards: string | null;
	strHomeRedCards: string | null;
	strAwayRedCards: string | null;
}

interface LeagueSectionProps {
	leagueName: string;
	events: Event[];
}

interface EventStat {
	idTimeline: string;
	idEvent: string;
	strTimeline: string;
	strTimelineDetail: string;
	strHome: string;
	strEvent: string;
	idAPIfootball: string;
	idPlayer: string;
	strPlayer: string;
	idAssist: string;
	strAssist: string;
	intTime: string;
	strPeriod: string | null;
	idTeam: string;
	strTeam: string;
	strComment: string;
	dateEvent: string;
	strSeason: string;
}

interface EventStatsResponse {
	timeline: EventStat[];
}

export type {
	Event,
	EventDetail,
	LeagueSectionProps,
	EventStat,
	EventStatsResponse,
};
