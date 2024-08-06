import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import SignOut from './pages/SignOut';
import Signin from './pages/Signin';
import Home from './pages/Home';
import About from './pages/About';
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Signout" element={<SignOut/>}/>
   </Routes>
   </BrowserRouter>
  );
}