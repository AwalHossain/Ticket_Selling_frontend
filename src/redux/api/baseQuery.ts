// Need to use the React-specific entry point to import createApi

import axiosBaseQuery from '@/helpers/axios/axiosBaseQuery'
import { baseUrl } from '@/helpers/config/envConfig'
import { createApi } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: baseUrl() }),
    endpoints: () => ({}),
    tagTypes: ['user'],
})

