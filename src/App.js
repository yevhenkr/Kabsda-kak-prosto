import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Usuers/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Sidebar items={props.store.sideBar} /> */}
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialoges' element={<DialogsContainer store={props.store} title='Dialoges' />} />
          <Route path='/dialoges/:id' element={<DialogsContainer store={props.store} title='Dialoges' />} />

          <Route path='/news' element={<DialogsContainer store={props.store} title='News' />} />
          <Route path='/music' element={<DialogsContainer store={props.store} title='Music' />} />
          <Route path='/settings' element={<DialogsContainer store={props.store} title='Settings' />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;