import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from '../../types/auth';

export interface AuthState {
    isAuthenticated: boolean;
    auth: Auth;
}

const ini_state: AuthState = {
    isAuthenticated: false,
    auth: {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState: ini_state,
    reducers: {
        setAuthenticated(
            state,
            {
                payload: { authenticated, auth }
            }: PayloadAction<{ authenticated: boolean; auth: Auth }>
        ) {
            state.isAuthenticated = authenticated;
            state.auth = auth;
        }
    }
});
export const authAction = authSlice.actions;
const AuthReducer = authSlice.reducer;
export default AuthReducer;
