// userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: [] // Initially empty array
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload; // Set user data here
        }
    }
});

export const { setUser } = userSlice.actions; // Export the action
export default userSlice.reducer; // Export the reducer
