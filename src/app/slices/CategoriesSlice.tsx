import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { REACT_APP_DEV_LINK } from "@env";
import type { RootState } from "../store";

const REACT_APP_DEV_LINK = "https://agroex-for-test.herokuapp.com";
export const getCategories = createAsyncThunk(
  "getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${REACT_APP_DEV_LINK}/categories`);
      return response.data;
    } catch (err: Error | any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const addAdvert = createAsyncThunk(
  "addAdvert",
  async (values: any, { rejectWithValue }) => {
    const formdata = new FormData();
    try {
      formdata.append("files", {
        uri: values.image[0]?.path,
        type: values.image[0]?.mime,
        name: values.image[0]?.filename,
      });
      if (values.image[1]) {
        formdata.append("files", {
          uri: values.image[1]?.path,
          type: values.image[1]?.mime,
          name: values.image[1]?.filename,
        });
      }
      if (values.image[2]) {
        formdata.append("files", {
          uri: values.image[2]?.path,
          type: values.image[2]?.mime,
          name: values.image[2]?.filename,
        });
      }
      if (values.valueProductTitle === "Other") {
        formdata.append("title", values.title);
      } else {
        formdata.append("title", values.valueProductTitle);
      }
      formdata.append("price", values.price);
      formdata.append("currency", values.valueCurrency);
      formdata.append("quantity", values.weight);
      formdata.append("unit", values.valueAmount);
      formdata.append("category", values.valueCategories);
      formdata.append("subCategory", "The best");
      formdata.append("country", "Uzbekistan");
      formdata.append("location", values.valueLocation);
      const response = await axios.post(
        `${REACT_APP_DEV_LINK}/advertisements`,
        formdata,
        {
          headers: {
            Authorization: `Basic ${values.token}`,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
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
export const changeAdvert = createAsyncThunk(
  "changeAdvert",
  async (values: any, { rejectWithValue }) => {
    const formdata = new FormData();
    try {
      formdata.append("files", {
        uri: values.image[0]?.img
          ? values.image[0]?.img
          : values.image[0]?.path,
      });
      if (values.image[1]) {
        formdata.append("files", {
          uri: values.image[1]?.img
            ? values.image[1]?.img
            : values.image[1]?.path,
        });
      }
      if (values.image[2]) {
        formdata.append("files", {
          uri: values.image[2]?.img
            ? values.image[2]?.img
            : values.image[2]?.path,
        });
      }
      if (values.valueProductTitle === "Other") {
        formdata.append("title", values.title);
      } else {
        formdata.append("title", values.valueProductTitle);
      }
      formdata.append("price", values.price);
      formdata.append("currency", values.valueCurrency);
      formdata.append("quantity", values.weight);
      formdata.append("unit", values.valueAmount);
      formdata.append("category", values.valueCategories);
      formdata.append("subCategory", "The best");
      formdata.append("country", "Uzbekistan");
      formdata.append("location", values.valueLocation);
      formdata.append("slug", values.slug);
      const response = await axios.put(
        `${REACT_APP_DEV_LINK}/advertisements/update`,
        formdata,
        {
          headers: {
            Authorization: `Basic ${values.token}`,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
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
export const addBet = createAsyncThunk(
  "addBet",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${REACT_APP_DEV_LINK}/${values.slug}/bet`,
        { betValue: +values.bet },
        {
          headers: {
            Authorization: `Basic ${values.token}`,
            Accept: "application/json",
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
export const buyNow = createAsyncThunk(
  "buyNow",
  async (values: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${REACT_APP_DEV_LINK}/orders/buy/${values.slug}`,
        {},
        {
          headers: {
            Authorization: `Basic ${values.token}`,
            Accept: "application/json",
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
export const getProductList = createAsyncThunk(
  "getProductList",
  async (
    value: { page: number; categoryName: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(
        `${REACT_APP_DEV_LINK}/advertisements?limit=5&offset=${(
          value.page * 5
        ).toString()}&category=${value.categoryName}`
      );
      return {
        data: response.data,
        redownloadList: value.page === 0,
      };
    } catch (err: Error | any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getAuctionList = createAsyncThunk(
  "getAuctionList",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${REACT_APP_DEV_LINK}/advertisements/my-bets`, // real API
        {
          headers: {
            Authorization: `Basic ${token}`,
            Accept: "application/json",
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (err: Error | any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getUsersAdvertisements = createAsyncThunk(
  "getUsersAdvertisements",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${REACT_APP_DEV_LINK}/advertisements/my-advertisements`,
        {
          headers: {
            Authorization: `Basic ${value}`,
            Accept: "application/json",
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

export const getUsersOrders = createAsyncThunk(
  "getUsersOrders",
  async (value: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${REACT_APP_DEV_LINK}/orders`, {
        headers: {
          Authorization: `Basic ${value}`,
          Accept: "application/json",
        },
      });
      return { data: response.data, status: response.status };
    } catch (err: Error | any) {
      return rejectWithValue({
        data: err.response.data,
        status: err.response.status,
      });
    }
  }
);

export const confirmDeal = createAsyncThunk(
  "confirmDeal",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${REACT_APP_DEV_LINK}/orders/confirm/${values.slug}`,
        {},
        {
          headers: {
            Authorization: `Basic ${values.token}`,
            Accept: "application/json",
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
interface CounterState {
  categories: [];
  productList: [];
  auctionList: [];
  myAdvertisements: [];
  myOrders: [];
}

// Define the initial state using that type
const initialState: CounterState = {
  categories: [],
  productList: [],
  auctionList: [],
  myAdvertisements: [],
  myOrders: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: {
    "getCategories/fulfilled": (state, action) => {
      state.categories = action.payload;
    },
    "getCategories/rejected": (state, action) => {
      action.payload;
    },
    "addAdvert/fulfilled": (state, action) => {
      action.payload.data;
    },
    "changeAdvert/fulfilled": (state, action) => {
      action.payload.data;
    },
    "addBet/fulfilled": (state, action) => {
      action.payload.data;
    },
    "buyNow/fulfilled": (state, action) => {
      action.payload.data;
    },
    "getProductList/fulfilled": (state, action) => {
      if (action.payload.redownloadList) {
        state.productList = action.payload.data.advertisements;
      } else {
        state.productList = [
          ...state.productList,
          ...action.payload.data.advertisements,
        ];
      }
    },
    "getAuctionList/fulfilled": (state, action) => {
      state.auctionList = action.payload.data;
    },
    "getUsersAdvertisements/fulfilled": (state, action) => {
      state.myAdvertisements = action.payload.data.advertisements;
    },
    "getUsersOrders/fulfilled": (state, action) => {
      state.myOrders = action.payload.data;
    },
    "confirmDeal/fulfilled": (state, action) => {
      action.payload.data;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCategories = (state: RootState) => state.value;

export default categoriesSlice.reducer;
