import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = (props) => {
  console.log("Header = " + Header);
  console.log("Navbar = " + Navbar);
  console.log("Dialogs = " + Dialogs);
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dailoges' element={<Dialogs
              title='Dialogs'
            />} />
            <Route path='/dailoges' element={<Dialogs
              title='Dialogs'
            />} />
            <Route path='/news' element={<Dialogs
              title='News'
            />} />
            <Route path='/music' element={<Dialogs
              title='Music'
            />} />
            <Route path='/settings' element={<Dialogs
              title='Settings'
            />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;