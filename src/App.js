import React from 'react';
import './App.scss';
import 'typeface-roboto';
import Header from './components/header.js';
import TodaysBirthday from './components/todays-birthday.js';

function App() {
  return (
    <div className="App">
      <Header />
      <TodaysBirthday />
    </div>
  );
}

export default App;
