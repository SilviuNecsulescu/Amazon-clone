import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    value: [],
  },
  reducers: {
    ADD_PRODUCT: (state, action) => {
      let newArr = [...state.value];

      const checkItem = newArr.find((a) => a.id === action.payload.id);

      if (checkItem === undefined) {
        state.value = [...state.value, action.payload];
      } else {
        newArr.find((a) => a.id === action.payload.id).quantity += 1;
        state.value = newArr;
      }
    },
    REMOVE_PRODUCT: (state, action) => {
      let newArr = [...state.value];
      var test = newArr.find((a) => a.id === action.payload).quantity;
      if (test > 1) {
        newArr.find((a) => a.id === action.payload).quantity -= 1;
      } else {
        newArr = newArr.filter((item) => item.id !== action.payload);
      }

      state.value = newArr;
    },
    INCREASE_Q: (state, action) => {
      let newArr = state.value.map((a) => {
        return { ...a };
      });
      // console.log(newArr.find((a) => a.id === action.payload));
      newArr.find((a) => a.id === action.payload).quantity += 1;

      state.value = newArr;
    },
  },
});

export const { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_Q } = basketSlice.actions;

export const selectBasket = (state) => state.basket.value;

export default basketSlice.reducer;
