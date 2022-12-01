import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./reducer";

export default configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});
