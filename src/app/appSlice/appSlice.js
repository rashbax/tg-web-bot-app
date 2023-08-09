import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
  };

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
      increase: (state, action) =>{
        const product = action.payload
        const contains = state.cart.find((item) => item.product.id === product.id);

        if(contains){
          state.cart = state.cart.map((item) => 
          item.product.id === product.id
          ?
          {...item,
            count: item.count +1
          }
          :
          item
          );

        } else {
          state.cart = [
            ...state.cart, {product:product,
            count: 1
            }
          ]
        }
      },
      decrease: (state, action) => {
        const id = action.payload
        const contains = state.cart.find((item) => item.product.id === id)
        console.log(id);

        if(contains.count === 1){
          state.cart = state.cart.filter(item => item.product.id !== id)
        }else{
          state.cart = state.cart.map(item =>
            item.product.id === id
            ?
            {...item, count: item.count -1}
            :
            item
            )
        }
       
        console.log(state.cart);
      },
      clear: (state) => {
        state.cart = []
      },
      remove: (state, action) => {
        const id = action.payload
        state.cart = state.cart.filter((item) => item.product.id !== id)
      }
    }
})

export default appSlice.reducer;

export const { increase, decrease, remove } = appSlice.actions;