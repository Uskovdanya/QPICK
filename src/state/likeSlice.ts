import { createSlice } from "@reduxjs/toolkit";

interface LikeState {
  like: {
    id: number;
    img: string;
    title: string;
    price: number;
    oldPrice: number;
    rate: number;
    liked: boolean;
    quantity: number;
    info: string;
    wireless: boolean;
  }[];
}

const initialState: LikeState = {
  like: [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.like.push(action.payload);
    },
    removeFromFavorites(state, action) {
      const likedItemId = action.payload;
      state.like = state.like.filter((item) => item.id !== likedItemId);
    },
    clearLike(state) {
      state.like = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearLike } =
  likeSlice.actions;

export default likeSlice.reducer;

export const getLikedCart = (state: { like: LikeState }) => state.like.like;

export const getCurrentLikeQuantityById =
  (id: number) => (state: { like: LikeState }) =>
    state.like.like.find((item) => item.id === id)?.quantity ?? 0;

export const getTotalLikeQuantity = (state: { like: LikeState }) =>
  state.like.like.reduce((sum, item) => sum + item.quantity, 0);
