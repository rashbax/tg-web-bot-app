import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false
};
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsVisible: (state, action) => {
            state.isVisible = action.payload
        }
    }
})

export default modalSlice.reducer;
export const {setIsVisible} = modalSlice.actions;
