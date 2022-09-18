import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {   
        id: 1,
        name: 'Diamond',
        probability: 0.1,
    },
    {
        id: 2,
        name: 'Silver',
        probability: 0.3,
    },
    {
        id: 3,
        name: 'Bronze',
        probability: 0.6,
    }
]

const InventoryItemSlice = createSlice({
    name: 'inventoryItem',
    initialState,
    reducers: {}
});

export default InventoryItemSlice.reducer