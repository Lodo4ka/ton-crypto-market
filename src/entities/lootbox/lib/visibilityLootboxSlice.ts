import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ReactNode } from 'react';

interface OverlayContentPayload {
  icon: ReactNode;
  title: string;
  description?: string;
  date: string;
  balanceFrom: string;
  balanceTo: string;
  itemTitle: string;
  itemNumber: string;
}

interface OverlayState {
  isOpen: boolean;
  props: OverlayContentPayload | null;
}

const initialState: OverlayState = {
  isOpen: false,
  props: null,
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    openLootbox(state, action: PayloadAction<OverlayContentPayload>) {
      state.isOpen = true;
      state.props = action.payload;
    },
    closeLootbox(state) {
      state.isOpen = false;
      state.props = null;
    },
  },
});

export const { openLootbox, closeLootbox } = overlaySlice.actions;
export default overlaySlice.reducer;
