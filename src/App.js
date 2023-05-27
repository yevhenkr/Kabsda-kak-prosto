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
      <Sidebar items={props.store.sideBar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialoges' element={<Dialogs title='Dialoges' dialogsPage={props.store.dialogsPage} />} />
          <Route path='/dialoges/:id' element={<Dialogs title='Dialoges' dialogsPage={props.store.dialogsPage} />} />

          <Route path='/news' element={<Dialogs title='News' dialogsPage={props.store.dialogsPage} />} />
          <Route path='/music' element={<Dialogs title='Music' dialogsPage={props.store.dialogsPage} />} />
          <Route path='/settings' element={<Dialogs title='Settings' dialogsPage={props.store.dialogsPage} />} />
          <Route path='/profile' element={<Profile store={props.store} 
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;