import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const [isloggedin, setIsloggedin] = useState(false);

  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col '>
      <Navbar isloggedin={isloggedin} setIsloggedin={setIsloggedin} />

      <Routes>

        <Route path="/" element={<Home isloggedin={isloggedin} />}></Route>
        <Route path="/login" element={<Login setIsloggedin={setIsloggedin} />} />
        <Route path="/signup" element={<Signup setIsloggedin={setIsloggedin} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isloggedin={isloggedin}>
            <Dashboard />
          </PrivateRoute>
        } />

      </Routes>
    </div>
  )
}

export default App;
