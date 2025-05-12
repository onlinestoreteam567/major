import { Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import CatalogPage from '@pages/CatalogPage/CatalogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
