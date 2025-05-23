import { createSlice } from "@reduxjs/toolkit";
import { dataProps } from "./Data/city";

type InitialState = {
  dataLists: dataProps[];
};

const initial: InitialState = {
  dataLists: [],
};

const UserDataSlice = createSlice({
  name: "userData",
  initialState: initial,
  reducers: {
    addData(state, actions) {
      state.dataLists = [...state.dataLists, actions.payload];
    },
    addArraysOfData(state, actions) {
      state.dataLists = [...actions.payload];
    },
    deleteByDataId(state, actions) {
      state.dataLists = state.dataLists.filter(
        (data) => data._id !== actions.payload
      );
    },
  },
});

export const { addData, addArraysOfData, deleteByDataId } =
  UserDataSlice.actions;
export default UserDataSlice.reducer;
