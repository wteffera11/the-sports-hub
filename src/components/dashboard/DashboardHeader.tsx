import type React from "react";
import { DesktopDashboardHeader } from "./DesktopHeader";
import { MobileDashboardHeader } from "./MobileHeader";

interface DashboardHeaderProps {
	onDateChange?: (date: string) => void;
	selectedDate?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = (props) => {
	return (
		<>
			<DesktopDashboardHeader {...props} />
			<MobileDashboardHeader {...props} />
		</>
	);
};
