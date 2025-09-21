import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AppMenu from './routes/index';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const PrivateRoute = ({ element }) => {
  //   return isAuthenticated ? element : <Navigate to="/login" />
  // }

  return (
    // <div className="App">
    //   <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
    //   <Routes>
    //     {/* <Route path='/' element={<Navigate to="/login" />} /> */}
    //     <Route path='/' element={<LandingPage />} />
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/signup' element={<Signup />} />
    //     {/* <Route path='/dashboard' element={<Dashboard />} /> */}
    //     <Route path='/home' element={<PrivateRoute element={<Home />} />} />
    //   </Routes>
    // </div>

    <AppMenu />
  );
}

export default App;
