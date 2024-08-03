import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/landingPage/LandingPage';
import DemeterMap from './Pages/DemeterMap/DemeterMap';
import DemeterMenu from './Pages/DemeterMenu/DemeterMenu';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demeter" element={<DemeterMenu />} />
          <Route path="/demeter/map" element={<DemeterMap />} />
          <Route path="*" element={<LandingPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
