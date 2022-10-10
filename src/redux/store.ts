import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import session from 'redux-persist/lib/storage/session';
import { setupListeners } from '@reduxjs/toolkit/query';
import type { Middleware } from '@reduxjs/toolkit';
import counterReducer from '@/redux/counterSlice';
import authReducer from '@/redux/authSlice';
// import { emptySplitApi } from '@/RTKQuery/apiSlice';
import { globalErrorHandling } from './helper';

const persistConfig = {
	key: 'auth',
	version: 1,
	storage: session,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
	// RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
	if (isRejectedWithValue(action)) {
		globalErrorHandling(action);
	}

	return next(action);
};

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: persistedAuthReducer,
		// [emptySplitApi.reducerPath]: emptySplitApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			// .concat(emptySplitApi.middleware)
			.concat(rtkQueryErrorLogger),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
