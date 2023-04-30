import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

type Fetcher<T> = () => Promise<T>;

type ErrorHandler<E = any> = (error: E) => void;

type UseFetchSWRResponse<T, E> = SWRResponse<T, E> & {
  handleError: ErrorHandler<E>;
};

export const useFetchSWR = <T, E = any>(
  key: string,
  fetcher: Fetcher<T>,
  deps: any,
  config?: SWRConfiguration,
  errorHandler?: ErrorHandler<E>,
): UseFetchSWRResponse<T, E> => {
  const { data, error, ...rest } = useSWR<T, E>([key, deps], fetcher, config);

  const handleError = (err: E) => {
    if (errorHandler) {
      errorHandler(err);
    }
  };

  return {
    data,
    error,
    handleError,
    ...rest,
  };
};
