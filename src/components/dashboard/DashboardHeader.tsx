import type React from "react";
import { DesktopDateFilter } from "./DesktopDateFilter";
import { MobileDateFilter } from "./MobileDateFilter";

interface DashboardHeaderProps {
	onDateChange?: (date: string) => void;
	selectedDate?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = (props) => {
	return (
		<>
			<DesktopDateFilter {...props} />
			<MobileDateFilter {...props} />
		</>
	);
};
