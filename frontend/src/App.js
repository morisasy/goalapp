import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import  Dashboard from './pages/Dashboard'
import  Login from './pages/Login'
import  Register from './pages/Register'
import  Header from './components/Header'
//import {register, reset} from './features/auth/authSlice'
//import { Counter } from './features/counter/Counter';
//import './App.css';
// npm run client
// npm i -D concurrently
// npm i axios react-toastify


const App = () => {
  return (
    <>
        <Router>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/"  element = {<Dashboard />} />
                    <Route path="/Login"  element = {<Login />} />
                    <Route path="/Register"  element = {<Register />} />
                </Routes>
            </div>
        </Router>
        <ToastContainer />
    </>
  )
}

export default App;
