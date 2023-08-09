
const initialState = {
    cart: []
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT'

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {...state, cart: []}
    }
}

 export const incrementCreator = (count) => {
    return {
        type: INCREMENT,
        payload: count
    }
}