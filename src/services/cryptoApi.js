import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://cryptopot-backend.herokuapp.com";

const createRequest = (url) => ({url})

export const cryptoApi =  createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptosHistory: builder.query({
            query: ({ uuid, timePeriod}) => createRequest(`/coinhistory?id=${uuid}&time=${timePeriod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        })
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptosHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;