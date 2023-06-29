import {
  Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navmenu from './components/Navmenu';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </div>

  );
}

export default App;
