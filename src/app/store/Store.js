import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../appSlice/appSlice";
import { modalSlice } from "../ModalVisible/modalSlice";
// console.log(modalSlice);
export default configureStore({
    reducer: {
        app: appSlice.reducer,
        modal: modalSlice.reducer,
    }
})