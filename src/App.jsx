import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ContextProvider } from './context/context'
import Animes from './pages/Animes/index';
import FavoritesPage from './pages/Favorites';
import Manga from './pages/Manga';

import './styles/global.css';


function App() {
  
  
  return (
    <BrowserRouter>
        <ContextProvider>
          <Routes>
              <Route path="/" element={<Animes />} />
              <Route path="/favoritos" element={<FavoritesPage />} />
              <Route path="/manga" element={<Manga />} />
          </Routes>
        </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
