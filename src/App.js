import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
       case "portfolio":
        return <Portfolio />
      default: 
        return null;
    }
  }
  return (
    <div>
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
    </div>
    <div>
      <main>{renderTab()}</main>
    </div>
    </div>
  );
}

export default App;
