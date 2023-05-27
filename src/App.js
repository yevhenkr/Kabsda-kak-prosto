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
      {/* <Sidebar items={props.store.state.sideBar} /> */}
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialoges' element={<Dialogs title='Dialoges' dialogePage={props.store.dialogePage} />} />
          <Route path='/dialoges/:id' element={<Dialogs title='Dialoges' dialogePage={props.store.dialogePage} />} />

          <Route path='/news' element={<Dialogs title='News' dialogePage={props.store.dialogePage} />} />
          <Route path='/music' element={<Dialogs title='Music' dialogePage={props.store.dialogePage} />} />
          <Route path='/settings' element={<Dialogs title='Settings' dialogePage={props.store.dialogePage} />} />
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