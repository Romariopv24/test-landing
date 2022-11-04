import './App.css';
import {BrowserRouter as  Router, Route, } from 'react-router-dom'
import { Home } from './components/pages';
import SigninPage from './components/pages/singin';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Route path="/" element={Home} />
      <Navbar />
      <Route path='/signin' element={SigninPage} />
    </Router>
  );
}

export default App;
