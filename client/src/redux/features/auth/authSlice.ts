import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  user: string | null;
}

const initialState: AuthState = {
  token: null,
  user: JSON.parse(localStorage.getItem("user") ?? "null"), // Provide a default value
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    userLoggedIn: (
      state,
      action: PayloadAction<{ accessToken: string; user: string }>
    ) => {
      state.token = action.payload.accessToken;
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    userLoggedOut: (state, action) => {
      state.token = null;
      state.user = null;

      localStorage.removeItem("user");
    },
  },
});

export const { userRegistration, userLoggedIn, userLoggedOut } =
  authSlice.actions;

export default authSlice.reducer;
