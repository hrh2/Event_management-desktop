import React from 'react';
import './index.css'
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
import CategoryCard from './components/SubComponents/CategoryCard';
import Searchbar from './components/SubComponents/Searchbar';
import EventCard from './components/SubComponents/EventCard';
import BookPage from './components/SubComponents/BookPage';
function App() {
  return (
    <Routes>
      <Route path='/BookPage' exact element={<BookPage />} />
      <Route path='/Homepage' exact element={<Homepage />} />
      <Route path='/HomepagePhoto' exact element={<HomepagePhoto/>} />
      <Route path='/CategoryCard' exact element={<CategoryCard/>} />
      <Route path='/EventCard' exact element={<EventCard/>} />
      <Route path='/Searchbar' exact element={<Searchbar/>} />

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
