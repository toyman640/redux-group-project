import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navmenu from './components/Navmenu';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Navmenu />
        <Route path="/" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
