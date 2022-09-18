import { configureStore } from '@reduxjs/toolkit';
import inventoryItemReducer from '../features/tiers/InventoryItemSlice';

export default configureStore({
  reducer: {
    inventoryItems: inventoryItemReducer,
  },
});