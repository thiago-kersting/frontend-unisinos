import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import AdminPanel from './AdminPanel';
import './App.css';
import TurmasView from './TurmasView';
import MinhasTurmas from './MinhasTurmas';

function App() {
  return (
    <div className="App">
      <Router classname="app">
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/turmas" element={<TurmasView />} />
          <Route path="/minhas-turmas" element={<MinhasTurmas />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
