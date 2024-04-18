import { configureStore } from "@reduxjs/toolkit";
import reducers from "../Reducer/index";

export const store = configureStore(reducers, {});
