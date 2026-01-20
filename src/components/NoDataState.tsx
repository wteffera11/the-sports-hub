import React from "react";

interface NoDataStateProps {
	message?: string;
}

export const NoDataState: React.FC<NoDataStateProps> = ({
	message = "No events found",
}) => {
	return (
		<div className="min-h-100 flex items-center justify-center bg-background-surface p-4">
			<div className="text-gray-400">{message}</div>
		</div>
	);
};
