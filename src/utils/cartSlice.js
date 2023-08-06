import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // vanialla (older) Redux => DON'T MUTATE THE STATE, returning was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux toolkit - uses immer behind the scence
      // we have to mutate the state
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    // originalState = {items:["pizza"]}
    clearItems: (state, action) => {
      // console.log(current(state)); // [pizza]
      // state = []; only modify the local variable not modifty the acutal variable to change the state
      // console.log(state); // []

      // RTK - either mutate a existing state or return a new state
      state.items.length = 0; // originalState =[]
      // or  return {items:[]} // this new object will be repalced inside originalState = {items:[]}
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
