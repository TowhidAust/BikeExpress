// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { variablesFromEnv } from '@/config';

// Define a service using a base URL and expected endpoints
export const emptySliceApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({ baseUrl: variablesFromEnv.BASE_URL }),
	endpoints: () => ({}),
});
