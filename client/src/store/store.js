import { configureStore } from "@reduxjs/toolkit";

import textboxSliceReducer from "../features/textbox-slice";

const Store = configureStore({
  reducer: textboxSliceReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
