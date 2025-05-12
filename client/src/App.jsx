import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<p>123</p>} />
        <Route path="/about" element={<p>333</p>} />
      </Routes>
    </div>
  );
}

export default App;
