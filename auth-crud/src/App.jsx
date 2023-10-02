import { useState,useContext } from 'react'
import Login from './components/Login/Login'
import Layout from './Layout.jsx'
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import NewData from './components/NewData/NewData';


function App() {

  const {currentUser} = useContext(AuthContext)

  
const RequireAuth = ({ children }) => {
  return currentUser ? children : <Navigate to="/login" />;
};

console.log(currentUser)
  return (
    <Router>
      <Routes>
        <Route path='/'>
        <Route path="login" element={<Login />} />
        <Route path="new" element={<NewData/>} />
        <Route
              index
              element={
                <RequireAuth>
                  <Layout />
                </RequireAuth>
              }
            />


        </Route>
        
        {/* <Route path="/" element={<RequireAuth><Layout/></RequireAuth>} /> */}

        
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App
