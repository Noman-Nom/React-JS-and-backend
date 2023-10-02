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
  const currentUser = false;
const RequireAuth = ({ children }) => {
  return currentUser ? children : <Navigate to="/login" />;
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequireAuth><Layout/></RequireAuth>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App
