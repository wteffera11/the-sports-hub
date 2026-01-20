import React from "react";
import { BritainFlag } from "../icons";

export const CountryFlagSelector: React.FC = () => {
	return (
		<div className="relative">
			<button
				type="button"
				className={`p-2 hover:bg-white/10 transition-colors bg-black/15 w-10 h-10 rounded-full flex items-center justify-center`}
			>
				<BritainFlag className="w-4 h-4 md:w-6 md:h-6" />
			</button>
		</div>
	);
};
