import React from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import {  ArrowBackIos } from '@mui/icons-material';


export default function Header(props) {
  let navigate = useNavigate()
  return (
    <div className='Header'>
        <div className="Header-row">
            <Link onClick={()=> navigate(-1)} className="Header__back"> <ArrowBackIos/> </Link>
            <h1 className='Header__title'>{props.title?.length > 13 ? props.title.slice(0,12)+'...' : props.title}</h1>
        </div>
    </div>
  )
}
