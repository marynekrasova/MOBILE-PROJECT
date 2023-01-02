import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { REACT_APP_DEV_LINK } from "@env";
import type { RootState } from "../store";

const REACT_APP_DEV_LINK = "https://agroex-for-test.herokuapp.com";
export const getModerationList = createAsyncThunk(
  "getModerationList",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${REACT_APP_DEV_LINK}/advertisements/moderation/get`,
        {
          headers: {
            Authorization: `Basic ${value}`,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err: Error | any) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);

export const moderationOnReject = createAsyncThunk(
  "moderationOnReject",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${REACT_APP_DEV_LINK}/advertisements/moderation/set`,
        {
          advertisements: {
            slug: values.slug,
            moderationComment: values.comment,
            moderationStatus: "rejected",
          },
        },
        {
          headers: {
            Authorization: `Basic ${values.token}`,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err: Error | any) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);

export const moderationOnApprove = createAsyncThunk(
  "moderationOnApprove",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${REACT_APP_DEV_LINK}/advertisements/moderation/set`,
        {
          advertisements: {
            slug: values.slug,
            moderationComment: values.comment,
            moderationStatus: "approved",
          },
        },
        {
          headers: {
            Authorization: `Basic ${values.token}`,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err: Error | any) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);
export const getModerationUserList = createAsyncThunk(
  "getModerationUserList",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${REACT_APP_DEV_LINK}/users/moderation`,
        {
          headers: {
            Authorization: `Basic ${value}`,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err: Error | any) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);
export const moderationUserOnReject = createAsyncThunk(
  "moderationUserOnReject",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${REACT_APP_DEV_LINK}/users/moderation`,
        {
          userId: values.userId,
          moderationComment: values.comment,
          moderationStatus: "rejected",
        },
        {
          headers: {
            Authorization: `Basic ${values.token}`,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err: Error | any) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);

export const moderationUserOnApprove = createAsyncThunk(
  "moderationUserOnApprove",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${REACT_APP_DEV_LINK}/users/moderation`,
        {
          userId: values.userId,
          moderationComment: values.comment,
          moderationStatus: "approved",
        },
        {
          headers: {
            Authorization: `Basic ${values.token}`,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err: Error | any) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);
// Define a type for the slice state
interface ModerationState {
  moderationList: [];
  moderationUserList: [];
}

// Define the initial state using that type
const initialState: ModerationState = {
  moderationList: [],
  moderationUserList: [],
};

export const moderationSlice = createSlice({
  name: "moderation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: {
    "getModerationList/fulfilled": (state, action) => {
      state.moderationList = action.payload.data.advertisements;
    },
    "moderationOnApprove/fulfilled": (state, action) => {
      // state.moderationList = action.payload.data.advertisements;
      action.payload.data;
    },
    "moderationOnReject/fulfilled": (state, action) => {
      // state.moderationList = action.payload.data.advertisements;
      action.payload.data;
    },
    "getModerationUserList/fulfilled": (state, action) => {
      state.moderationUserList = action.payload.data.users;
    },
    "moderationUserOnApprove/fulfilled": (state, action) => {
      // state.moderationList = action.payload.data.advertisements;
      action.payload.data;
    },
    "moderationUserOnReject/fulfilled": (state, action) => {
      // state.moderationList = action.payload.data.advertisements;
      action.payload.data;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCategories = (state: RootState) => state.value;

export default moderationSlice.reducer;
