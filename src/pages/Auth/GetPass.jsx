import React from 'react'
import Header from '../../components/Header/Header'
import ConfInput from '../../components/ConfInput/ConfInput'
import ConfButton from '../../components/ConfButton/ConfButton'
import { ArrowForwardIos } from '@mui/icons-material'
import Logo from '../../components/Logo/Logo'

export default function GetPass() {
  return (
    <div className='getPass' name='get-password'>
        <Header link={'/sign-in'}/>
        <div className="auth__logo">
          <Logo/>
        </div>
        <div className="auth__container">
        <div className="getPass__main">
            <div className="auth__info">
                <div className="auth__info-title">Kodni kiritish</div>
                <div className="auth__info-text">97 707-27-11, 5 raqamdan iborat kod yuborildi</div>
            </div>
            <ConfInput>
            <span className="Change__suptitle">Kod</span>
            <input type="text" className="Change__input" />
            </ConfInput>
            <ConfButton><ArrowForwardIos/><span>Davom etish</span></ConfButton>
        </div>
        </div>
    </div>
  )
}
