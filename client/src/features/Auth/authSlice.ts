import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "model";

const initialState: { user: UserProps | null; token: string | null } = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{ token: string; user: UserProps }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem(
        "User",
        JSON.stringify({
          user: action.payload.user,
          token: action.payload.token,
        })
      );
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("User");
    },
  },
});
export const { logIn, logOut } = authSlice.actions;
export default authSlice;
