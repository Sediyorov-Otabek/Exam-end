import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", state.token ?? "");
    },

    logOut: (state) => {
      state.token = null;
      localStorage.removeItem("token");
      window.location.pathname = "/auth/login";
    },
  },
});

export const { signIn, logOut } = authSlice.actions;
export default authSlice.reducer;
