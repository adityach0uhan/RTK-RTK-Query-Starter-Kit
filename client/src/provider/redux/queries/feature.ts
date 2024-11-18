import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const featureApi = createApi({
    reducerPath: 'featureApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => ({
                url: '/api/todo',
                method: 'GET'
            })
        })
    })
});

export const { useGetAllTodosQuery } = featureApi;
