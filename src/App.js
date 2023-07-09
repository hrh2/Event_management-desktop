import React from 'react';
import ResponsivePage from './components/ResponsivePage';
import { Route, Routes } from 'react-router-dom'
import DesktopLanding from './components/DesktopLanding';
import Login from './components/Login'
import SignUp from './components/SignUp'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword'
import AutheLayout from './components/AutheLayout';
import Homepage from './components/SubComponents/Homepage';
import HomepagePhoto from './components/SubComponents/HomepagePhoto';
function App() {
  return (
    <Routes>
      <Route path='/Homepage' exact element={<Homepage />} />
      <Route path='/HomepagePhoto' exact element={<HomepagePhoto/>} />
      
      <Route path='/' exact element={<DesktopLanding/>} />
      <Route path='/enteraccount' exact element={<ResponsivePage/>} />
      <Route path='/authentication' exact element={<AutheLayout />}>
          <Route index element={<Login/>} />
          <Route path='/authentication/signup' element={<SignUp/>} />
          <Route path='/authentication/reset' element={<ResetPassword/>} />
          <Route path='/authentication/forgot' element={ <ForgotPassword/>} />
      </Route>
    </Routes>
  );
}

export default App;
