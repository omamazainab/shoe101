import React from 'react';
import './App.css';
import Routes from './RouterConfig'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
        <Routes></Routes>
    </GlobalProvider>
    
  );
}

export default App;
