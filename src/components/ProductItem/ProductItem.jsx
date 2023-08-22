import React, { useCallback } from 'react'
import './ProductItem.css'
import { useDispatch } from 'react-redux'
import { increase, decrease } from '../../app/appSlice/appSlice'
import useCart from '../../hooks/useCart'
import peperoni from '../../assets/peperoni.png'
import { setIsVisible } from '../../app/ModalVisible/modalSlice'
import { useModalContext } from '../../app/ModalContext/ModalContext'
import Assets from '../../assets/assest'



export default function ProductItem({product, onAdd}) {
  
  const {setData, setCountOfProduct} = useModalContext()

 const dispatch = useDispatch()

// let count = useCart(product.id)
 
//     const onAddHandler = useCallback(() => {
//       dispatch(increase(product))
//     },[product, dispatch])

//     const onRemoveHandler = useCallback(() => {
//       dispatch(decrease(product.id))
//     },[product.id, dispatch])

    const isVisibleHandler = useCallback(()=> {
      dispatch(setIsVisible(true))
      setData(product)
      setCountOfProduct(1)
    },[dispatch])

    
    
  return (
    <div className='productItem'>
       <div className="productItem-img">
        <img src={Assets[product.id -1]} alt="burger"  />
              <div className="productItem-price">{product?.price} <span>sum</span></div>
        </div>
        <div className="productitem-body">
            <div className="productItem-title">{product?.title}</div>
            <div className="productItem-subtitle">{product?.description}</div>
        </div>
        <div className="productItem-footer">
            {/* <button  onClick={onRemoveHandler}>-</button>
            <div className="productItem-count">{count}</div>
            <button className={count > 0 ? '' : 'btn-increase' } onClick={ onAddHandler} >{count > 0 ? '+' : 'Add to cart'}</button> */}
           <button className='productItem__footer-button' onClick={isVisibleHandler}>Add to cart</button>
        </div>
    </div>
  )
}
