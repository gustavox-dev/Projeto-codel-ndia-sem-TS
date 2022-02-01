import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Animes from './pages/Animes/index';

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/anime" element={<Animes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
