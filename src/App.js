import Login from './containers/Login.js';
import Signup from './containers/Signup.js';
import Profile from './containers/Profile.js';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="/signup" element={<Signup />}>
      </Route>
      <Route path="/profile" element={<Profile />}>
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
