import { configureStore } from '@reduxjs/toolkit';
import overlayReducer from '../entities/lootbox/lib/visibilityLootboxSlice.ts';
import playButtonReducer from '../shared/ui/play-button/playButtonSlice.ts';

export const store = configureStore({
  reducer: {
    overlay: overlayReducer,
    playButton: playButtonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
