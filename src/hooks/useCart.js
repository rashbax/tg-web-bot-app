import { useSelector } from "react-redux"

  const useCart = (id) => {
const cartItems = useSelector(state => state.app.cart);

const item = cartItems.find(item => item.product.id === id)


if(item){
    return item.count
}
return 0
}
export default useCart