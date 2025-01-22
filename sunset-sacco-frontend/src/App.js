import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar"; // Adjust the path if necessary
import Login from "./pages/Login"; // Keep the name consistent
import SignUp from "./pages/SignUp"; // Create Register page
import Home from "./pages/Home"; // Create Home 
import Footer from "./pages/Footer";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4"> {/* Add padding to prevent overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<About />}  />
        </Routes>
      </main>
      <Footer /> 
    </Router>
  );
}

export default App;
