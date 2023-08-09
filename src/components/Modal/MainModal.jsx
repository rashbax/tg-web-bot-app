import React, { useState } from 'react'
// import Modal from 'react-modal'
import cl from './Modal.module.css'
import './m.css'


export default function MainModal({children, visible, setVisible}) {

  const rootClasses = [cl.mainModal]

  if(visible){
    rootClasses.push(cl.active)
  }
    
  
  return (
    <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
      
      <div className={cl.mainModal__content} onClick={(e)=> e.stopPropagation()}>
      <div className={cl.modal__rectangle}></div>
        {children}
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
