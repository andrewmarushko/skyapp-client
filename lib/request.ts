export interface FetchOptions extends RequestInit {
  // Fetch settings will goes here
}

export type FetchErrorHandler = (error: Error) => void;

export async function request<T>(
  url: string,
  options: FetchOptions = {},
  errorHandler?: FetchErrorHandler,
): Promise<T> {
  const response = await fetch(url, options);

  // If response is success return data object
  if (response.ok) {
    const data = await response.json();
    return data as T;
  }

  const errorMessage = `Server response error. Status: ${response.status}`;
  const error = new Error(errorMessage);

  if (errorHandler) {
    errorHandler(error);
  }

  throw error;
}
