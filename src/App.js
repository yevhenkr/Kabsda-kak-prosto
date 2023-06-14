import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Usuers/UsersContainer';
import Login from './components/Login/Login';
import AuthRedirectComponent from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      {/* <Sidebar items={props.store.sideBar} /> */}
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialoges' element={<DialogsContainer title='Dialoges' />} />
          <Route path='/dialoges/:id' element={<DialogsContainer title='Dialoges' />} />

          <Route path='/news' element={<DialogsContainer title='News' />} />
          <Route path='/music' element={<DialogsContainer title='Music' />} />
          <Route path='/settings' element={<DialogsContainer title='Settings' />} />

          <Route path='/users' element={<UsersContainer />} />
          <Route path='/profile/:userId?' element={<AuthRedirectComponent />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;