import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes,Route} from "react-router-dom";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialoges' element={<Dialogs title='Dialoges' />} />
          <Route path='/dialoges/:id' element={<Dialogs title='Dialoges' />} />

          <Route path='/news' element={<Dialogs title='News' />} />
          <Route path='/music' element={<Dialogs title='Music' />} />
          <Route path='/settings' element={<Dialogs title='Settings' />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;