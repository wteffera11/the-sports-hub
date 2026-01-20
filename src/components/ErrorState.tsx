import React from "react";

interface ErrorStateProps {
	message: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
	return (
		<div className="min-h-100 flex items-center justify-center bg-background-surface p-4">
			<div className="text-foreground-danger">{message}</div>
		</div>
	);
};
