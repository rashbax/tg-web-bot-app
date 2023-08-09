import {  AccountBoxRounded, HomeRounded, ShoppingBagRounded} from '@mui/icons-material'
import React  from 'react'
import {  NavLink } from 'react-router-dom'
import './navigation.css'
import { Badge } from '@mui/material'
import { useSelector } from 'react-redux'


export default function Navigation() {
    const cartItems = useSelector(state => state.app.cart)
    let countInCart = cartItems.reduce((acc, val) => {
        return acc += val.count
       },0)
  return (
    <div className='navigation'>
        <div className="navigation__container">
            <NavLink className="navigation__col" to={'/'}>
                <div className="navigation__img"><HomeRounded/></div>
                <div className="navigation__text">Home</div>
            </NavLink>
            
            <NavLink className="navigation__col" to={'/cart'}>
                <div className="navigation__img"><Badge className='badge' badgeContent={countInCart}><ShoppingBagRounded/></Badge></div>
                <div className="navigation__text">Cart</div>
            </NavLink>
            
            
            <NavLink className="navigation__col" to={'/account'}>
                <div className="navigation__img"><AccountBoxRounded/></div>
                <div className="navigation__text">Account</div>
            </NavLink>
           
        </div>
    </div>
   
  )


}
