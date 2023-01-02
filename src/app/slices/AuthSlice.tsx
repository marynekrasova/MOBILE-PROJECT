import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface AuthState {
  isAuth: string;
  role: Object[];
}

// Define the initial state using that type
const initialState: AuthState = {
  isAuth: "",
  role: [],
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signOut: (state) => {
      state.isAuth = "";
      state.role = [];
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    signIn: (state, action: PayloadAction<string>) => {
      state.isAuth = action.payload;
    },
    setRole: (state, action: PayloadAction<number>) => {
      state.role = action.payload;
    },
  },
});

export const { signOut, signIn, setRole } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth.isAuth;

export default authSlice.reducer;
