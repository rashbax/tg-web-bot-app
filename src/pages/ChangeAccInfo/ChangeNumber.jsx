import React from 'react'
import Header from '../../components/Header/Header'
import { ArrowForwardIos } from '@mui/icons-material'
import './ChangeAccInfo.css'
import ConfButton from '../../components/ConfButton/ConfButton'
import ConfInput from '../../components/ConfInput/ConfInput'

export default function ChangeNumber() {
  return (
    <div className='change-number'>
        <Header link={'/account'} title={'Raqamni O\'zgartirish'}/>
        <div className="Change__container">
          <form action="#" className="Change__form">
            <ConfInput><span className="Change__suptitle">Yangi telefon raqam</span>
            <input type="text" className="Change__input" value={'+998 (97) 707-27-11'}/>
            </ConfInput>
            <ConfButton><ArrowForwardIos/><span> Davom etish</span></ConfButton>
            
          </form>
        </div>
    </div>
  )
}
