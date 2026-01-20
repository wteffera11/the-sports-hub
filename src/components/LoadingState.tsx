import React from "react";

interface LoadingStateProps {
	message?: string;
	className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
	message = "Loading events...",
	className,
}) => {
	return (
		<div
			className={`min-h-100 flex items-center justify-center bg-background-surface p-4 ${className}`}
		>
			<div className="text-foreground-base">{message}</div>
		</div>
	);
};
