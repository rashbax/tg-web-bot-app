import React, { useState } from 'react'
// import Modal from 'react-modal'
import cl from './Modal.module.css'
import './m.css'
import { useDispatch, useSelector } from 'react-redux'
import { setIsVisible } from '../../app/ModalVisible/modalSlice'
import { useModalContext } from '../../app/ModalContext/ModalContext'


export default function MainModal({children}) {
  let isVisible = useSelector(state => state.modal.isVisible)
 const dispatch = useDispatch()
 const {countOfProduct,setCountOfProduct} = useModalContext()

  const rootClasses = [cl.mainModal]

  if(isVisible){
    rootClasses.push(cl.active)
  } 
  
  if(countOfProduct <= 0){
    dispatch(setIsVisible(false))
  }

  const closeModalHandler = () => {
    dispatch(setIsVisible(false))
    setCountOfProduct(0)
  }
    
  
  return (
    <div className={rootClasses.join(' ')} onClick={closeModalHandler}>
      
      <div className={cl.mainModal__content} onClick={(e)=> e.stopPropagation()}>
        <div className={cl.mainModal__content__container}>
          <div className={cl.modal__rectangle}></div>
          {children}
        </div>
      
      </div>
    </div>
  //   <div class="app-container">
  //   <button id="open-bottom-sheet">Open Bottom Sheet</button>
  //   <div class="overlay active" id="overlay"></div>
  //   <div class="bottom-sheet active" id="bottom-sheet">
  //     <div class="bottom-sheet-content">
  //       <p>This is the content of the bottom sheet.</p>
  //       <button id="close-bottom-sheet">Close</button>
  //     </div>
  //   </div>
  // </div>
  )
}
