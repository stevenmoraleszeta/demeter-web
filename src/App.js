import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/landingPage/LandingPage';
import DemeterDemo from './Pages/DemoWeb/DemeterDemo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demeter-demo" element={<DemeterDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
