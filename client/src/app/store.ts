import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "features/Cart/cartSlice";
import modalSlice from "features/Modal/modalSlice";
import transactionApi from "features/Transaction/transactionApi";

import { authApi } from "../features/Auth/authApi";
import authSlice from "../features/Auth/authSlice";
import blogApi from "../features/Blog/blogApi";
import productApi from "../features/Product/productApi";
import treatmentApi from "../features/Treatment/treatmentApi";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
    [authSlice.name]: authSlice.reducer,
    [treatmentApi.reducerPath]: treatmentApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      transactionApi.middleware,
      treatmentApi.middleware,
      blogApi.middleware,
      productApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
