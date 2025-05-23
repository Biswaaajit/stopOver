import { createSlice } from "@reduxjs/toolkit";

const initial = {
  userName: "biswa",
  userImg: "",
  userId: "",
  loginStatus: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    addUser(state, actions) {
      state.userId = actions.payload._id;
      state.userName = actions.payload.userName;
      state.userImg = actions.payload.userImage;
      state.loginStatus = true;
    },
    logOut(state) {
      state.loginStatus = false;
      state.userId = "";
      state.userName = "";
      state.userImg = "";
    },
  },
});

export const { addUser, logOut } = UserSlice.actions;
export default UserSlice.reducer;
