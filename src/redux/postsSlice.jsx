import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
});
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});
export default postsSlice.reducer;
