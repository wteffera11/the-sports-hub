import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { RootLayout } from "./layouts/RootLayout";
import { DashboardPage } from "./pages/dashboard";
import MatchDetailPage from "./pages/match-details";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <DashboardPage />,
			},
			{
				path: "match",
				element: <DashboardPage />,
			},
			{
				path: "match/:eventId",
				element: <MatchDetailPage />,
			},
		],
	},
]);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>,
);
