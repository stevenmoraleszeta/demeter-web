import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/landingPage/LandingPage';
import DemeterDemo from './Pages/DemoWeb/DemeterDemo';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demeter-demo" element={<DemeterDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
