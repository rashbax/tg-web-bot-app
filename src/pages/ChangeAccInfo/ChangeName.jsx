import React from 'react'
import Header from '../../components/Header/Header'
import { CheckBox } from '@mui/icons-material'
import './ChangeAccInfo.css'
import ConfButton from '../../components/ConfButton/ConfButton'
import ConfInput from '../../components/ConfInput/ConfInput'


export default function ChangeName() {
  return (
    <div className='change-name'>
        <Header link={'/account'} title={'Ism'}/>
        <div className="Change__container">
          <form action="#" className="Change__form">
            <ConfInput>
            <span className="Change__suptitle">Ism</span>
            <input type="text" className="Change__input" value={'Bahodir'}/>
            </ConfInput>
            <ConfButton><CheckBox/><span> Tasdiqlash</span></ConfButton>
          </form>
        </div>
    </div>
  )
}
