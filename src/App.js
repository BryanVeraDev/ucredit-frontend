// eslint-disable-next-lineimport logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Credits from './components/credit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
