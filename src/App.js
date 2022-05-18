import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(1000);
  const minValue = 200;
  const maxValue = 5000;
  
  return (
    <div className="App">
        <div className="container">
          <div className="header">
             <span className="header-text">Masa Özelliklerine Geç</span>
             <span className="header-text">X</span>
          </div>
          <hr className="hr"/>
          <div className="bahis-slider">
              <span>Bahis Aralığı</span>
              <span className="value">Min {minValue}</span>
              <input type="range" min={minValue} max={maxValue} value={value}/>
              <span className="value">Max {maxValue}</span>
          </div>
          <div className="filters">
              <div className="filter">
                <span>Hızlı</span>
                <input type="radio" name="range" />
              </div>
          </div>
          <hr />
        </div>
    </div>
  );
}

export default App;
