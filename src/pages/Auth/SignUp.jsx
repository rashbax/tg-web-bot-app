import React from 'react'
import ConfInput from '../../components/ConfInput/ConfInput'
import ConfButton from '../../components/ConfButton/ConfButton'
import { Login } from '@mui/icons-material'
import './auth.css'
import Header from '../../components/Header/Header'
import Logo from '../../components/Logo/Logo'

export default function SignUp() {
  return (
    <div className='signUp' name='sign-up'>
        <Header link={'/get-password'}/>
        <div className="auth__logo">
        <Logo/>
        </div>
        <div className="auth__container">
          
        <div className="signUp__main">
        <div className="auth__info">
                <div className="auth__info-title">Ro‘yxatdan o‘tish</div>
                <div className="auth__info-text">Maydonlarni to‘ldiring</div>
                <ConfInput>
                <span className="Change__suptitle">Ism</span>
                <input type="text" className="Change__input" />
                </ConfInput>
                <ConfButton><Login/><span>Ro'yhatdan o'tish</span></ConfButton>
            </div>
        </div>
        </div>
    </div>
  )
}
