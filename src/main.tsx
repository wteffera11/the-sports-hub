import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import { RootLayout } from "./layouts/RootLayout";
import { DashboardPage } from "./pages/dashboard";
import MatchDetailPage from "./pages/match-view";

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

document.title = "The Sports Hub - Live Sports Events & Match Details";

let metaDescription = document.querySelector('meta[name="description"]');
if (!metaDescription) {
	metaDescription = document.createElement("meta");
	metaDescription.setAttribute("name", "description");
	document.head.appendChild(metaDescription);
}
metaDescription.setAttribute(
	"content",
	"Your destination for live sports events, match details, and real-time updates",
);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
	<ErrorBoundary
		fallbackRender={({ error, resetErrorBoundary }) => (
			<ErrorFallback
				error={error as Error}
				resetErrorBoundary={resetErrorBoundary}
			/>
		)}
	>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</ErrorBoundary>,
);
