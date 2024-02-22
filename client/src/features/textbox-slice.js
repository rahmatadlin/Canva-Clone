import { createSlice } from "@reduxjs/toolkit";

const textboxSlice = createSlice({
  name: "textbox",
  initialState: {
    height: 800,
    width: 900,
    B_color: "white",
    pencolor: "black",
    stroke: 2,
    canvaVal: null,
  },
  reducers: {
    setHeight(state, action) {
      state.height = action.payload;
    },
    setWidth(state, action) {
      state.width = action.payload;
    },
    setColor(state, action) {
      state.B_color = action.payload;
    },
    setPencolor(state, action) {
      state.pencolor = action.payload;
    },
    setStroke(state, action) {
      state.stroke = action.payload;
    },
    setCanva(state, action) {
      state.canvaVal = action.payload;
    },
  },
});

export const actions = textboxSlice.actions;
export default textboxSlice.reducer;
