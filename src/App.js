
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Foods from './pages/Products/Foods'
import Cart from './pages/Cart/Cart';
import Account from './pages/Account/Account';
import ChangeName from './pages/ChangeAccInfo/ChangeName';
import ChangeNumber from './pages/ChangeAccInfo/ChangeNumber';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import GetPass from './pages/Auth/GetPass';
import { useEffect } from 'react';
import {useTelegram} from './hooks/useTelegram'
function App() {
  const {tg} = useTelegram()
  
  useEffect(() => {
    tg.ready()
  }, [])
  
  return (
    <div className="App">
      <div className='container'>
      <Routes>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/get-password' element={<GetPass/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/food' element={<Foods/>}/>
        <Route path='/change-name' element={<ChangeName/>}/>
        <Route path='/change-number' element={<ChangeNumber/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
