import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				index: true,
				element: <div>test</div>,
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
