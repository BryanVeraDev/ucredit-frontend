import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/login';
import Credits from './components/credit';
import Products from './components/product';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/credits" element={<Credits />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
