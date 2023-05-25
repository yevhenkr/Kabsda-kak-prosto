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
      <Sidebar items={props.state.sideBar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialoges' element={<Dialogs title='Dialoges' dialogePage={props.state.dialogePage} />} />
          <Route path='/dialoges/:id' element={<Dialogs title='Dialoges' dialogePage={props.state.dialogePage} />} />

          <Route path='/news' element={<Dialogs title='News' dialogePage={props.state.dialogePage} />} />
          <Route path='/music' element={<Dialogs title='Music' dialogePage={props.state.dialogePage} />} />
          <Route path='/settings' element={<Dialogs title='Settings' dialogePage={props.state.dialogePage} />} />
          <Route path='/profile' element={<Profile
            posts={props.state.postsPage}
            addNewText={props.addNewText}
            addPost={props.addPost}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;