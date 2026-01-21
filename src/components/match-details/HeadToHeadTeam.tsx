import type React from "react";

interface HeadToHeadTeamProps {
	teamBadge: string | null;
	teamName: string;
	yellowCards?: string | null;
	redCards?: string | null;
}

export const HeadToHeadTeam: React.FC<HeadToHeadTeamProps> = ({
	teamBadge,
	teamName,
	yellowCards,
	redCards,
}) => {
	return (
		<div className="flex-1 flex flex-col items-center justify-center space-x-3 relative">
			{teamBadge && (
				<div className="relative">
					<img
						src={teamBadge}
						alt={teamName}
						className="w-42px h-42px object-contain"
						onError={(e) => {
							e.currentTarget.style.display = "none";
						}}
					/>
					{(yellowCards || redCards) && (
						<div className="absolute -top-1 -right-1 flex flex-col space-y-1">
							{yellowCards && (
								<div
									className="w-3 h-3 bg-yellow-400 rounded-sm"
									title="Yellow Card"
								></div>
							)}
							{redCards && (
								<div
									className="w-3 h-3 bg-red-500 rounded-sm"
									title="Red Card"
								></div>
							)}
						</div>
					)}
				</div>
			)}
			<div>
				<div className="font-medium text-sm text-white leading-5 text-center align-middle">
					{teamName}
				</div>
			</div>
		</div>
	);
};
