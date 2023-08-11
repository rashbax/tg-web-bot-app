import React from 'react'
import ConfInput from '../../components/ConfInput/ConfInput'
import ConfButton from '../../components/ConfButton/ConfButton'
import { ArrowForwardIos } from '@mui/icons-material'
import Logo from '../../components/Logo/Logo'
import './auth.css'

export default function SignIn() {
  return (
    <div className='signIn' name='sign-in'>
      <div className="auth__logo">
        <Logo/>
      </div>
        <div className="auth__container">
        <div className="signIn__main">
            <div className="auth__info">
                <div className="auth__info-title">Tizimga kirish</div>
                <div className="auth__info-text">Telefon raqamingizni kiriting, agar sizda akkaunt bo‘lsa, parol kiritish paydo bo'ladi yoki kod yuboriladi</div>
            </div>
            <ConfInput>
            <span className="Change__suptitle">Telefon raqam</span>
            <input type="text" className="Change__input" />
            </ConfInput>
            <ConfButton><ArrowForwardIos/><span>Davom etish</span></ConfButton>

        </div>
        </div>
    </div>
  )
}
