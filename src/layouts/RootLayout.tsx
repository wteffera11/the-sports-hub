import React from "react";
import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const RootLayout: React.FC = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<main className="bg-background">
				<Outlet />
			</main>
		</div>
	);
};
