"use client";

import { useEffect, useState } from "react";

export default function ErrorBoundary({ children, fallback }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (event) => {
      setHasError(true);
      setError(event.error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md mx-auto text-center p-6">
          <h1 className="text-xl font-semibold text-red-600 mb-4">
            Configuration Error
          </h1>
          <p className="text-muted-foreground mb-4">
            The app needs to be configured before it can run properly.
          </p>
          <pre className="bg-muted p-4 rounded text-xs text-left overflow-auto mb-4">
            {error?.message || "Environment configuration required"}
          </pre>
          <a 
            href="/setup" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Configure App
          </a>
        </div>
      </div>
    );
  }

  return children;
}
