import { useState } from 'react'
import Login from './components/Login/Login'
import Layout from './Layout.jsx'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App
