import React from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom'
import DesktopLanding from './components/DesktopLanding';
import AuthenticationService from './layout/Authenticating'
import SignInOption from './layout/SignInOption';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import Home from './layout/Home'
import BookPage from './layout/Book';
import BuyingTicketProcess from './layout/BuyTicketProcess';
import BuyTicketStepI from'./components/BuyTicketStepI'
import BuyTicketStepII from'./components/BuyTicketStepII'
import BuyTicketStepIII from './components/BuyTicketStepIII'
import BuyTicketStepIV from './components/BuyTicketStepIV'
import BuyTicketStepV from './components/BuyTicketStepV'
import BookProcess from './layout/BookProcess';

import Testing from './components/SubComponents/BookingSteptest'
import Sharing from './components/Sharing'
function App() {
  return (
    <Routes>
      <Route path='/' exact element={<DesktopLanding/>}/>
      <Route path='/options' exact element={<SignInOption/>}/>
      <Route path='/authentication' exact element={<AuthenticationService/>}>
          <Route index element={<Login/>} />
          <Route path='/authentication/signup' element={<SignUp/>} />
          <Route path='/authentication/reset' element={<ResetPassword/>} />
          <Route path='/authentication/forgot' element={ <ForgotPassword/>} />
      </Route>
      <Route path ='/home' exact element={<Home/>}/>
      <Route path='/bookEvent' exact element={<BookPage />} />
      <Route path='/buyTicket' exact element={<BuyingTicketProcess />}>
        <Route index element={<BuyTicketStepI />} />
        <Route path='/buyTicket/stepI' element={<BuyTicketStepII />} />
        <Route path='/buyTicket/stepIII' element={<BuyTicketStepIII />} />
        <Route path='/buyTicket/stepIV' element={<BuyTicketStepIV />} />
        <Route path='/buyTicket/stepV' element={<BuyTicketStepV />} />
        <Route path='/buyTicket/invite' element={<Sharing />} />
      </Route>
      <Route path='/book' exact element={<BookProcess />}>
        <Route index element={<BuyTicketStepI />} />
        <Route path='/book/stepI' element={<BuyTicketStepII />} />
        <Route path='/book/invite' element={<BuyTicketStepIII />} />
      </Route>
      <Route path='/testing' exact element={<Testing/>}/>
    </Routes>
  );
}

export default App;

