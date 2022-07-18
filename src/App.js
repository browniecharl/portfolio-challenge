import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactPage from './components/Contact';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
       case "portfolio":
        return <Portfolio />
      case "contact":
        return <ContactPage />
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
