import React from 'react'
import useCart from '../../hooks/useCart'
import { useDispatch } from 'react-redux'
import { decrease, increase, remove } from '../../app/appSlice/appSlice'
import { useCallback } from 'react'
import './Cart.css'
import { Add, Close, Remove } from '@mui/icons-material'
import Assets from '../../assets/assest'

export default function CartItem({el}) {
const count = useCart(el.product.id)

const dispatch = useDispatch()

const onAddHandler = useCallback(()=> {
    dispatch(increase({data:el.product, count: 1}))
},[dispatch, el.product])

const onRemoveHandler = useCallback(()=> {
    dispatch(decrease(el.product.id))
},[dispatch, el.product.id])

const onDeleteHandler = useCallback(()=> {
    dispatch(remove(el.product.id))
},[dispatch, el.product.id])

  return (
    <div className='Cart__item'>
        <span className="Cart__remove" onClick={onDeleteHandler}><Close/></span>
                <div className="Cart__item-row">
                  <div className="Cart__item-left">
                    <div className="Cart__item-img">
                    <img src={Assets[el.product.id -1]} alt="img"  />
                    </div>
                    
                  </div>
                  <div className="Cart__item-right">
                    <div className="Cart__item-top">
                      <div className="Cart__item-title">{el.product.title}</div>
                      <div className="Cart__item-subtitle">{el.product.price}</div>
                    </div>
                    <div className="Cart__item-bottom">
                      <button className="Cart__item-button" onClick={onRemoveHandler}><Remove/></button>
                      <div className="Cart__item-count">{count}</div>
                      <button className="Cart__item-button" onClick={onAddHandler}><Add/></button>
                    </div>
                  </div>
                </div>
              </div>
  )
}
