import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
type Fetcher<T> = () => Promise<T>;

type ErrorHandler<E = any> = (error: E) => void;

type SuccessHandler<T> = (data: T) => void;

type UseFetchSWRResponse<T, E> = SWRResponse<T, E> & {
  handleError: ErrorHandler<E>;
  handleSuccess: SuccessHandler<T>;
};

export const useFetchSWR = <T, E = any>(
  key: string,
  fetcher: Fetcher<T>,
  deps: any,
  config?: SWRConfiguration,
  options?: {
    onSuccess?: SuccessHandler<T>;
    onError?: ErrorHandler<E>;
  },
): UseFetchSWRResponse<T, E> => {
  const { onSuccess, onError } = options || {};

  const { data, error, ...rest } = useSWR<T, E>(
    [key, deps],
    async () => {
      try {
        const response = await fetcher();
        if (onSuccess) {
          onSuccess(response);
        }
        return response;
      } catch (error: any) {
        if (onError) {
          onError(error);
        }
        throw error;
      }
    },
    config,
  );

  const handleError = (err: E) => {
    if (onError) {
      onError(err);
    }
  };

  const handleSuccess = (responseData: T) => {
    if (onSuccess) {
      onSuccess(responseData);
    }
  };

  return {
    data,
    error,
    handleError,
    handleSuccess,
    ...rest,
  };
};
