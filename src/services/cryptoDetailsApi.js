import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://cryptopot-backend.herokuapp.com";

const createRequest = (url) => ({url})

export const cryptoDetailsApi =  createApi({
    reducerPath: 'cryptoDetailsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptosDetail: builder.query({
            query: (uuid) => createRequest(`/coin?id=${uuid}`),
        })
    })
})

export const {
    useGetCryptosDetailQuery,
} = cryptoDetailsApi;