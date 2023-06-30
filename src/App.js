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
    <div className="App">
      <BrowserRouter>
        <Navmenu />
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
