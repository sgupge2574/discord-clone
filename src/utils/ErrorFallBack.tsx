import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>An error occurred: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
