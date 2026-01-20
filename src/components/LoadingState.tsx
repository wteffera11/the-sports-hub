import React from "react";

interface LoadingStateProps {
	message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
	message = "Loading events...",
}) => {
	return (
		<div className="min-h-screen text-foreground-base w-full max-w-4xl mx-auto flex items-center justify-center bg-background-surface p-4">
			<div className="text-foreground-base p-4">{message}</div>
		</div>
	);
};
