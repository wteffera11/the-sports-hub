import type React from "react";

interface TeamDisplayProps {
	teamName: string;
	teamBadge: string | null;
}

export const TeamDisplay: React.FC<TeamDisplayProps> = ({
	teamName,
	teamBadge,
}) => {
	return (
		<div className="flex items-center space-x-2">
			{teamBadge && (
				<img
					src={teamBadge}
					alt={teamName}
					className="w-4 h-4 object-contain rounded-sm"
					onError={(e) => {
						e.currentTarget.style.display = "none";
					}}
				/>
			)}
			<span className="text-xs leading-4">{teamName}</span>
		</div>
	);
};
