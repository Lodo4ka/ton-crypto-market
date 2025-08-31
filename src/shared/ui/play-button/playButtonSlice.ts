import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

export type PlayButtonState = {
  label: React.ReactNode;
};

const initialState: PlayButtonState = {
  label: 'Play',
};

const playButtonSlice = createSlice({
  name: 'playButton',
  initialState,
  reducers: {
    setPlayButtonLabel(state, action: PayloadAction<React.ReactNode>) {
      state.label = action.payload;
    },
    resetPlayButtonLabel(state) {
      state.label = initialState.label;
    },
  },
});

export const { setPlayButtonLabel, resetPlayButtonLabel } = playButtonSlice.actions;
export default playButtonSlice.reducer;
