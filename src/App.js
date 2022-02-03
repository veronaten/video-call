import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Conference from './components/conference/Conference';
import Statistics from './components/statistics/Statistics';

function App() {
  return (
    <div className='container'>
      <Header />
      <Conference />
      <Statistics />
    </div>
  );
}

export default App;
