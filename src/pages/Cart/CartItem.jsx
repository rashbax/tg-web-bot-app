import React from 'react'
import useCart from '../../hooks/useCart'
import { useDispatch } from 'react-redux'
import { decrease, increase, remove } from '../../app/appSlice/appSlice'
import { useCallback } from 'react'
import './Cart.css'
import { Close } from '@mui/icons-material'

export default function CartItem({el}) {
const count = useCart(el.product.id)

const dispatch = useDispatch()

const onAddHandler = useCallback(()=> {
    dispatch(increase(el.product))
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
                  <div className="Cart__item-left"></div>
                  <div className="Cart__item-right">
                    <div className="Cart__item-top">
                      <div className="Cart__item-title">{el.product.title}</div>
                      <div className="Cart__item-subtitle">{el.product.price}</div>
                    </div>
                    <div className="Cart__item-bottom">
                      <button className="Cart__item-button" onClick={onRemoveHandler}>-</button>
                      <div className="Cart__item-count">{count}</div>
                      <button className="Cart__item-button" onClick={onAddHandler}>+</button>
                    </div>
                  </div>
                </div>
              </div>
  )
}
