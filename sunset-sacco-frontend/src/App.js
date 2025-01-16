import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main> {/* This wraps the content inside the main tag */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer /> {/* Footer remains at the bottom */}
      </div>
    </Router>
  );
}

export default App;
