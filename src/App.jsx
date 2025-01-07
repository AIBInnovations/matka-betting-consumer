import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AddFunds from './pages/AddFunds';
import MarketPlay from './pages/MarketPlay';
import SingleDigit from './pages/SingleDigit';
import JodiDigit from './pages/JodiDigit';
import SinglePana from './pages/SinglePana';
import DoublePana from './pages/DoublePana';
import TriplePana from './pages/TriplePana';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header'; // New Header component
import BetsHistory from './pages/BetsHistory';
import WinHistory from './pages/WinHistory';
import CoinSettlements from './pages/CoinSettlements';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Wallet from './pages/Wallet';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <>
          <Header />
          <HomePage />
          </>
      } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/add-funds" element={<AddFunds />} />
          <Route path="/play/:marketName" element={<MarketPlay />} />
          <Route path="/bets-history" element={<BetsHistory />} />
          <Route path="/single-digit" element={<SingleDigit />} />
          {/* <Route path="/single-digit/:marketName" element={<SingleDigit />} /> */}
          <Route path="/jodi-digit" element={<JodiDigit />} />
          <Route path="/single-pana" element={<SinglePana />} />
          <Route path="/double-pana" element={<DoublePana />} />
          <Route path="/triple-pana" element={<TriplePana />} />
          <Route path="/win-history" element={<WinHistory />} />
          <Route path="/coin-settlements" element={<CoinSettlements/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/help" element={<Help />}/>
        </Route>
      </Routes>
    </Router>
  );
}
 
export default App;
