import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar"; 
import Login from "./pages/Login"; 
import SignUp from "./pages/SignUp"; 
import Home from "./pages/Home"; 
import Footer from "./pages/Footer";
import About from "./pages/About";
import Membership from "./membership/Membership";
import Eligibility from "./membership/Eligibility";
import Benefits from "./membership/Benefits";
import RequestLoan from "./Loan/RequestLoan";
import Bosa from "./Loan/Bosa";
import Fosa from "./Loan/Fosa";
import Contributions from "./Services/contribution";
import Welfare from "./Services/welfareFund";
import InternetBanking from "./Services/InternetBanking";
import MobileBanking from "./Services/MobileBanking";


function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<About />}  />
          <Route path="/benefits" element={<Benefits />}  />
          <Route path="/eligibility" element={<Eligibility />}  />
          <Route path="/membership" element={<Membership />}  />
          <Route path="/bosa" element={<Bosa />}  />
          <Route path="/fosa" element={<Fosa />}  />
          <Route path="/requestLoan" element={<RequestLoan />}  />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/welfare" element={<Welfare />} />
          <Route path="/interneBanking" element={<InternetBanking />} />
          <Route path="/mobileBanking" element={<MobileBanking />} />

        </Routes>
      </main>
      <Footer /> 
    </Router>
  );
}

export default App;
