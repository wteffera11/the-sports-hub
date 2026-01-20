import React from "react";

interface ErrorFallbackProps {
	error: Error;
	resetErrorBoundary: () => void;
}

export function ErrorFallback({
	error,
	resetErrorBoundary,
}: ErrorFallbackProps): React.ReactElement {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
				<div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
					<svg
						className="w-6 h-6 text-red-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
						/>
					</svg>
				</div>

				<h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
					Something went wrong
				</h2>

				<p className="text-gray-600 text-center mb-6">
					We apologize for the inconvenience. An unexpected error occurred.
				</p>

				{import.meta.env.DEV && error && (
					<details className="mb-6 p-4 bg-gray-100 rounded-lg">
						<summary className="cursor-pointer font-medium text-gray-700 mb-2">
							Error Details (Development Only)
						</summary>
						<pre className="text-xs text-red-600 overflow-auto">
							{error.stack}
						</pre>
					</details>
				)}

				<div className="flex gap-3">
					<button
						onClick={resetErrorBoundary}
						className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors"
					>
						Try Again
					</button>
					<button
						onClick={() => window.location.reload()}
						className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
					>
						Reload Page
					</button>
				</div>
			</div>
		</div>
	);
}
