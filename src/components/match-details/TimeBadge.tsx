import type React from "react";

interface TimeBadgeProps {
	time: string;
}

export const TimeBadge: React.FC<TimeBadgeProps> = ({ time }) => {
	return (
		<div className="text-xs px-2 py-0.5 bg-background-muted rounded-full mx-1 w-12 text-center text-foreground-base">
			{time}'
		</div>
	);
};
