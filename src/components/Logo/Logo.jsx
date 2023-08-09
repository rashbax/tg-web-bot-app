import React from 'react'
import burger from '../../assets/burger4.svg'
import cls from './logo.module.css'

export default function Logo() {
  return (
    <div className={cls.logo}>
        <div className={cls.logo__img}>
            <img src={burger} alt='zaman' />
        </div>
        <div className={cls.logo__title}>zaman</div>
        <div className={cls.logo__subtitle}>halal food</div>
    </div>
  )
}
