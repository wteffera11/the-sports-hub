import React from "react";
import {
	CornerFlagIcon,
	GoalIcon,
	RedCardIcon,
	SubstitutionIcon,
	VARIcon,
	YellowCardIcon,
} from "../icons";

export const getEventIcon = (
	type: string,
	detail?: string,
): React.ReactElement => {
	switch (type) {
		case "Goal":
			return <GoalIcon className="w-4 h-4" />;
		case "Card":
			if (detail === "Red Card") {
				return <RedCardIcon className="w-4 h-4" />;
			}
			return <YellowCardIcon className="w-4 h-4" />;
		case "Var":
			return <VARIcon />;
		case "subst":
			return <SubstitutionIcon className="w-4 h-4" />;
		case "Corner":
			return <CornerFlagIcon className="w-4 h-4" />;
		default:
			return <div className="w-4 h-4 bg-gray-500 rounded-full"></div>;
	}
};
