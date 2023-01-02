import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import type {RootState} from "../store";

export const sendDeviceToken = createAsyncThunk(
  "sendDeviceToken",
  async (values: any, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `https://agroex-backend.herokuapp.com/notifications`,
        {
          deviceType: values.type,
          token: values.deviceToken,
          isAllowed: true,
        },
        {
          headers: {
            Authorization: `Basic ${values.token}`,
          },
        }
      );
      return {data: response.data, deviceToken: values.deviceToken};
    } catch (err: Error | any) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);

export const setNotification = createAsyncThunk(
  "setNotification",
  async (values: any, {rejectWithValue}) => {
    return {data: values};
  }
);

export const deleteAllNotifications = createAsyncThunk(
  "deleteAllNotifications",
  async (values: any, {rejectWithValue}) => {
    return {data: values};
  }
);

// Define a type for the slice state
interface NotificationState {
  notificationList: [];
  deviceToken: "";
}

// Define the initial state using that type
const initialState: NotificationState = {
  notificationList: [],
  deviceToken: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: {
    "sendDeviceToken/fulfilled": (state, action) => {
      state.deviceToken = action.payload.deviceToken;
    },
    "setNotification/fulfilled": (state, action) => {
      state.notificationList.push(action.payload.data);
    },
    "deleteAllNotifications/fulfilled": (state, action) => {
      state.notificationList = [];
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCategories = (state: RootState) => state.value;

export default notificationSlice.reducer;
