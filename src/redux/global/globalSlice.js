import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: false,
  isMobileMenuOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const { setIsLoading, setError, setIsMobileMenuOpen } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
