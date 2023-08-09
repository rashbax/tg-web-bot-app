import React from 'react'
import './Main.css'
import food from '../../assets/pizza2.svg'
import Navigation from '../../components/Navigation/Navigation'
import Foods from '../Products/Foods'
import Logo from '../../components/Logo/Logo'



export default function Main() {
  return (
    <div className='main'>
        <div className="main_container">
          <Logo/>
          <div className="main__intro">
            <div className="main__intro-row">
              <div className="main__intro-left">
                <div className="main__intro-suptitle">Mazali taom vaqti!</div>
                <div className="main__intro-title">Salom, Bahodirjon!</div>
              </div>
              <div className="main__intro-right">
                <img src={food} alt='food' />
              </div>
            </div>
          </div>
        <main className='main__main'>
        <Foods/>
        </main>
        
          
        
        </div>
        <Navigation/>
    </div>
  )
}
