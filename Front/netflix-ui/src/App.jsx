import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Player from './pages/Player';


const App = () => {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Netflix />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="player" element={<Player />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
   </>
  )
}

export default App