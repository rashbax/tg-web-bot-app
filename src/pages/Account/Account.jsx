import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/Header/Header'
import './Account.css'
import { ArrowForwardIos, Badge, Call, Place } from '@mui/icons-material'
import { Link } from 'react-router-dom'


export default function Account() {
  return (
    <div className='Account'>
      <Header link={'/'} title={'profil'}/>
      <div className="Account__main">
        <div className="Account__main-row">
          <div className="Account__main-col">
            <div className="Account__main-left">
              <div className="Account__main-icon"><Badge/></div>
              <div className="Account__main-text">
                <h3>Ism familiya</h3>
                <p>Bahodir</p>
              </div>
            </div>
            <div className="Account__main-right"><Link to={'/change-name'}><ArrowForwardIos/></Link></div>
          </div>
          <div className="Account__main-col">
            <div className="Account__main-left">
              <div className="Account__main-icon"><Call/></div>
              <div className="Account__main-text">
                <h3>Edit number</h3>
                <p>+998 (99) 389-74-46</p>
              </div>
            </div>
            <div className="Account__main-right"><Link to={'/change-number'}><ArrowForwardIos/></Link></div>
          </div>
          <div className="Account__main-col">
            <div className="Account__main-left">
              <div className="Account__main-icon"><Place/></div>
              <div className="Account__main-text">
                <h3>Mening manzilim</h3>
                <p>Shayxontohur tumani, Gulabad mahallasi, 8</p>
              </div>
            </div>
            <div className="Account__main-right"><ArrowForwardIos/></div>
          </div>
        </div>
      </div>
      <Navigation/>
    </div>
  )
}
