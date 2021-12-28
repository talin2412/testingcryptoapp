import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import axios from 'axios';

const baseUrl = "https://cryptopot-backend.herokuapp.com";

const createRequest = (url) => ({url})

export const cryptoNewsApi =  createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (newsCategory) => createRequest(`/search?q=${newsCategory}`),
        })
    })
})


export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;