import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialoges' element={<Dialogs title='Dialoges' dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/dialoges/:id' element={<Dialogs title='Dialoges' dialogs={props.dialogs} messages={props.messages} />} />

          <Route path='/news' element={<Dialogs title='News' dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/music' element={<Dialogs title='Music' dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/settings' element={<Dialogs title='Settings' dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/profile' element={<Profile posts={props.posts} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;