import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import CountryCard from './components/country-card/country-card';
import Toggle from './components/toggle/toggle';
import { keepTheme } from './utils/theme';

function App() {
   const [className, setClassName] = useState("theme-dark");

  useEffect(() => {
    keepTheme(setClassName)
  }, [setClassName])
  
  return (
    <div  className={`App`}>
      <header className="App-header">
        <Toggle setClassName={setClassName}/>
      </header>
      <CountryCard />
    </div>
  );
}

export default App;
