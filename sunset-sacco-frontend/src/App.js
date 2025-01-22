import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import HomePage from './pages/Home'; // Ensure HomePage is correctly imported

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* The Navbar remains consistent across all pages */}
        <main> {/* Main content area */}
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* HomePage as default route */}
            <Route path="/login" element={<Login />} /> {/* Login page route */}
            <Route path="/signup" element={<SignUp />} /> {/* Sign-up page route */}
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer /> {/* Footer remains consistent across all pages */}
      </div>
    </Router>
  );
}

export default App;
