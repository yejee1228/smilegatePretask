import { IUser, IUserForList } from '@/types';
import * as API from './clientApi';
import { useMutation, useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from 'axios';

const queryKey = {
    all: ['data'] as const,
}

export const useGetCouponList = (options?: UseQueryOptions<{ data: IUserForList[] }, AxiosError>) => {
    return useQuery<{ data: IUserForList[] }, AxiosError>(queryKey.all, () => API.getCouponList(), options)
}

export const useSetUser = () => {
    const queryClient = useQueryClient();
    return useMutation((user: IUser) => API.setUser(user), {
        onSuccess: () => {
            queryClient.invalidateQueries(queryKey.all);
        },
        onError: (error) => {
            console.log(error);
        },
        useErrorBoundary: (error: AxiosError) =>
            error instanceof AxiosError && error.response?.status !== undefined,
    })
}