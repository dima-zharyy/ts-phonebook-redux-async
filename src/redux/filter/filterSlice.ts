import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IFilterState {
  value: string;
}

// Define the initial state using that type
const initialState: IFilterState = {
  value: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const getFilter = (state: RootState) => state.filter.value;
