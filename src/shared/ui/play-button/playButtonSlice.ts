import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

export type PlayButtonState = {
  label: React.ReactNode;
  visible: boolean;
  component?: React.ReactNode;
};

const initialState: PlayButtonState = {
  label: 'Play',
  visible: false,
  component: undefined,
};

const playButtonSlice = createSlice({
  name: 'playButton',
  initialState,
  reducers: {
    setPlayButtonLabel(state, action: PayloadAction<React.ReactNode>) {
      state.label = action.payload;
      state.component = undefined;
      state.visible = true;
    },
    setPlayButtonComponent(state, action: PayloadAction<React.ReactNode | undefined>) {
      state.component = action.payload;
      state.visible = Boolean(action.payload);
    },
    setPlayButtonVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    },
    resetPlayButtonLabel(state) {
      state.label = initialState.label;
      state.visible = initialState.visible;
      state.component = initialState.component;
    },
  },
});

export const {
  setPlayButtonLabel,
  setPlayButtonComponent,
  setPlayButtonVisible,
  resetPlayButtonLabel,
} = playButtonSlice.actions;
export default playButtonSlice.reducer;
