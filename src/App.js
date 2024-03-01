import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Vision from './components/Vision';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vision" element={<Vision />} />
    </Routes>    </>
  );
}

export default App;
