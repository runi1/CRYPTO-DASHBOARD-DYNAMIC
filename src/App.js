
import {
  Routes,
  Route,
  useLocation,
  BrowserRouter as Router
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CryptoHistory from './partials/dashboard/CryptoHistory';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/history/:name/:coinid" element={<CryptoHistory />} />
      </Routes>
      
    </>
  );
}

export default App;
