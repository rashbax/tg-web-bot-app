import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import './Cart.css'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { AddShoppingCartOutlined } from '@mui/icons-material'



export default function Cart() {

 const cartItems = useSelector(state => state.app.cart)
 console.log(cartItems);
 let countInCart = cartItems.reduce((acc, val) => {
 return acc += val.count
},0)

let priceOfAll = cartItems.reduce((acc, val) => {
  return acc += val.product.price * val.count
},0)
  
  return (
    <div className='Cart'>
      <Header link={'/'} title={'Cart'}/>
      <div className="Cart__main">
        {cartItems.length ?
          ( <div className="Cart__row">
          {cartItems && cartItems.map((el,id) => {
            return (
              <CartItem key={id} el={el} />
            )
          })}
        </div>)
        :
        (
      <div className='Cart__noOrder'>
        <div className="noOrder__container">
          <div className="noOrder__img"><AddShoppingCartOutlined/></div>
          <div className="noOrder__body">
            <div className="noOrder__title">No Orders yet</div>
            <div className="noOrder__text">Hit the orange button down
  below to Create an order</div>
          </div>
        </div>
      </div>
        ) 
        }
      </div>
      {cartItems.length 
      ?
       (
        <div className='Cart__check'>
          <div className="Cart__check-row">
            <div className="Cart__check-col">
              <div className="Cart__check-count">{countInCart } ta mahsulot</div>
              <div className="Cart__check-price">{priceOfAll} so'm</div>
            </div>
            <div className="Cart__check-col">
              <button className="Cart__check-button">Order</button>
            </div>
          </div>
        </div>
      )
      :
      null
    }
      <Navigation/>
    </div>
  )
}
