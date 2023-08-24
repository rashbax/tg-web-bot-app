import React from 'react'
import './Main.css'
import food from '../../assets/pizza2.svg'
import Navigation from '../../components/Navigation/Navigation'
import Foods from '../Products/Foods'
import Logo from '../../components/Logo/Logo'
import MainModal from '../../components/Modal/MainModal'
import { useModalContext } from '../../app/ModalContext/ModalContext'
import ConfButton from '../../components/ConfButton/ConfButton'
import { Add, AddShoppingCartOutlined, Remove} from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { increase } from '../../app/appSlice/appSlice'
import { setIsVisible } from '../../app/ModalVisible/modalSlice'
import Assets from '../../assets/assest'



export default function Main() {

  // const [count, setCount] = useState(0)

  const {data, countOfProduct, setCountOfProduct} = useModalContext()

  const dispatch = useDispatch()

  const confirmHandler = () => {
     dispatch(increase( {count:countOfProduct, data: data}))
     setCountOfProduct(0)
     dispatch(setIsVisible(false))
  }

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
        {
          countOfProduct <= 0 ?
          <Navigation/>
          :
          <MainModal>
          <div className="main__modal-container">
            <div className="main__modal-header">
              <div className="main__modal-title">{data?.title}</div>
              <div className="main__modal-subtitle">{data?.description}</div>
            </div>
            <div className="main__modal-img">
              <img src={Assets[data?.id -1]} alt='img'/>
            </div>
            <div className="main__modal-footer">
              <div className="main__modal-footer__head">
                <div className="main__modal-footer__price">{data?.price * countOfProduct} so'm</div>
                <div className="main__modal-footer__buttons">
                  <button disabled={countOfProduct <= 0 ? true : false} className={countOfProduct <=0 ? 'disabled' : ''} 
                  onClick={()=> setCountOfProduct(countOfProduct -1)}><Remove/></button>
                  <div className='main__modal-count'>{countOfProduct}</div>
                  <button onClick={()=> setCountOfProduct(countOfProduct+1)}><Add/></button>
                </div>
              </div>
              <ConfButton onClick={confirmHandler}>
                <AddShoppingCartOutlined/>
                <span>Savatchaga qo'shish</span>
              </ConfButton>
            </div>
          </div>
        </MainModal>
        }
        
        
    </div>

  )
}
