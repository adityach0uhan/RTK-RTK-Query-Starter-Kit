import { configureStore } from '@reduxjs/toolkit';
import { featureApi } from './queries/feature';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSlice } from './slices/userSlice';

export const store = configureStore({
    reducer: {
        [featureApi.reducerPath]: featureApi.reducer,
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(featureApi.middleware) // Add RTK Query middleware
});

// Set up listeners for caching and other optimizations in RTK Query
setupListeners(store.dispatch);
