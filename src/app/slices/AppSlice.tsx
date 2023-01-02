import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { REACT_APP_DEV_LINK } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { RootState } from "../store";

const REACT_APP_DEV_LINK = "https://agroex-for-test.herokuapp.com";
export const signUp = createAsyncThunk(
  "signUp",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${REACT_APP_DEV_LINK}/auth/signup/person`,
        {
          user: {
            type: "person",
            name: values.username,
            surname: values.surname,
            email: values.email,
            phone: `+${values.countryPhone}${values.phoneValue}`,
            password: values.password,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);
export const signUpCompany = createAsyncThunk(
  "signUpCompany",
  async (values: any, { rejectWithValue }) => {
    const formdata = new FormData();
    try {
      formdata.append("files", values.singleFile[0]);
      formdata.append("type", "legalEntity");
      formdata.append("companyName", values.companyName);
      formdata.append("companyTaxNumber", values.companyINN);
      formdata.append("bankAccount", values.companyAccount);
      formdata.append("email", values.email);
      formdata.append("phone", `+${values.countryPhone}${values.phoneValue}`);
      formdata.append("password", values.password);
      formdata.append("name", values.username);
      formdata.append("surname", values.surname);
      const response = await axios.post(
        `${REACT_APP_DEV_LINK}/auth/signup/company`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);
export const logIn = createAsyncThunk(
  "logIn",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${REACT_APP_DEV_LINK}/auth/login`, {
        user: {
          email: values.email,
          password: values.password,
        },
      });
      return { data: response.data, status: response.status };
    } catch (err) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);

export const logOut = createAsyncThunk(
  "logOut",
  async (values: any, { rejectWithValue }) => ({ data: values })
);

// Define a type for the slice state
interface CounterState {
  signupData: {};
  loginData: {};
  token: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  signupData: {},
  loginData: {},
  token: "",
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: {
    "signUp/fulfilled": (state, action) => {
      AsyncStorage.setItem("userToken", action.payload.data.user.token);
      state.signupData = action.payload.data;
    },
    "signUpCompany/fulfilled": (state, action) => {
      AsyncStorage.setItem("userToken", action.payload.data.user.token);
      state.signupData = action.payload.data;
    },
    "logIn/fulfilled": (state, action) => {
      AsyncStorage.setItem("userToken", action.payload.data.user.token);
      state.token = action.payload.data.user.token;
      state.loginData = action.payload.data;
    },
    "logOut/fulfilled": (state, action) => {
      AsyncStorage.setItem("userToken", "");
      state.token = "";
      state.loginData = [];
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.value;

export default appSlice.reducer;
