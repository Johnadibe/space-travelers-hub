import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rockets from './pages/rockets/Rockets';
import Missions from './pages/missions/Missions';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
