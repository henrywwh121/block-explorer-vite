import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlockNumber } from "../../services/alchemyApi";

export const fetchBlockNumber = createAsyncThunk(
  "block/blockNumber",
  async () => {
    const res = await getBlockNumber();
    return res;
  }
);

export const blockSlice = createSlice({
  name: "block",
  initialState: {
    blockNumber: "",
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlockNumber.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlockNumber.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blockNumber = action.payload;
    });
    builder.addCase(fetchBlockNumber.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default blockSlice.reducer