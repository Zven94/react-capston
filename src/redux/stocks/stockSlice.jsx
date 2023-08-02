import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const myUrl = 'https://financialmodelingprep.com/api/v3/quote/AAPL,NVDA,META,MSFT,INTC,TSLA,RIVN?apikey=212794e542583c32d527fc0587006b94';

// export const stocksData = createAsyncThunk('stocks/stocksData', async () => {
//   const response = await fetch(myUrl);
//   const data = await response.json();
//   return data;
// });

export const stocksData = createAsyncThunk(
  'stocks/stocksData',
  async () => {
    try {
      const response = await axios.get(myUrl);
      const { data } = response;
      return data;
    } catch (error) {
      return Promise.reject(error.message ? error.message : error);
    }
  },
);

const initialState = {
  stocks: [],
  isLoading: false,
  error: false,
};

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(stocksData.fulfilled, (state, action) => ({
        ...state,
        stocks: action.payload.map((stock) => ({
          symbol: stock.symbol,
          name: stock.name,
          price: stock.price,
        })),
      }));
  },
});

export default stockSlice.reducer;
