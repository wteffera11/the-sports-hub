import React from "react";
import { LeadingIcon, TrailingIcon } from "../icons/index";

export const LeagueSelector: React.FC = () => {
	return (
		<div className="relative">
			{/* Mobile button - circular */}
			<button
				type="button"
				className="lg:hidden flex items-center justify-center w-6 h-6 cursor-pointer text-sm bg-black/15 rounded-full hover:bg-white/10 transition-colors"
			>
				<LeadingIcon className="w-4 h-4" />
			</button>

			{/* Desktop button - with text */}
			<button
				type="button"
				className="hidden lg:flex items-center space-x-2 px-4 h-8 md:h-10 cursor-pointer py-2 text-sm min-w-fit bg-black/15 rounded-full hover:bg-white/10 transition-colors"
			>
				<LeadingIcon className="w-5 h-5" />
				<span className="text-surface">{"Premier League"}</span>
				<TrailingIcon className="w-3 h-3" />
			</button>
		</div>
	);
};
