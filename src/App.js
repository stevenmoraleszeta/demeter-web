import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/landingPage/LandingPage';
import DemeterMap from './Pages/DemeterMap/DemeterMap';
import DemeterMenu from './Pages/DemeterMenu/DemeterMenu';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import DemeterAI from './Pages/DemeterAI/DemeterAI';
import CanvasModel from './Pages/CanvasModel/CanvasModel';
import Profile from './Pages/Profile/Profile';

function App() {
  /*TODO Change icon an title*/
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demeter" element={<DemeterMenu />} />
          <Route path="/demeter/map" element={<DemeterMap />} />
          <Route path="/demeter/ai" element={<DemeterAI />} />
          <Route path="/canvas" element={<CanvasModel />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<LandingPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
