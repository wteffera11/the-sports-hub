import React from "react";

interface ErrorStateProps {
	message: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
	return (
		<div className="min-h-screen text-white p-4">
			<div className="text-foreground-danger p-4">{message}</div>
		</div>
	);
};
