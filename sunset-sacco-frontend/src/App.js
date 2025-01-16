import React from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
// import Login from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Navbar />
      <Login />
      <SignUp /> 
    </div>
  );
}

export default App;
