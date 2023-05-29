import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Sidebar from './components/SideBar/SideBar'
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Sidebar items={props.store.sideBar} /> */}
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialoges' element={<Dialogs store={props.store} title='Dialoges' />} />
          <Route path='/dialoges/:id' element={<Dialogs store={props.store} title='Dialoges' />} />

          <Route path='/news' element={<Dialogs store={props.store} title='News' />} />
          <Route path='/music' element={<Dialogs store={props.store} title='Music' />} />
          <Route path='/settings' element={<Dialogs store={props.store} title='Settings' />} />
          <Route path='/profile' element={<Profile store={props.store}
            dispatch={props.dispatch}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;