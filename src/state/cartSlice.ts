import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  cart: {
    itemId: number;
    img: string;
    title: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.itemId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state?.cart?.find((item) => item.itemId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state?.cart?.find((item) => item.itemId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0)
          cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: { cart: CartState }) => state.cart.cart;

export const getCurrentQuantityById =
  (id: number) => (state: { cart: CartState }) =>
    state.cart.cart.find((item) => item.itemId === id)?.quantity ?? 0;

export const getTotalCartPrice = (state: { cart: CartState }) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getTotalCartQuantity = (state: { cart: CartState }) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
