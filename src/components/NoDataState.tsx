import React from "react";

interface NoDataStateProps {
	message?: string;
}

export const NoDataState: React.FC<NoDataStateProps> = ({
	message = "No events found",
}) => {
	return (
		<div className="bg-background-surface text-center h-[calc(100vh-50px)] w-full max-w-4xl mx-auto flex items-center justify-center py-12">
			<div className="text-gray-400">{message}</div>
		</div>
	);
};
