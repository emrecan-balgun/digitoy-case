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
          <span className="tip">{value}$</span>
          <div className="bahis-slider">
              <span>Bahis Aralığı</span>
              <span className="value">Min {minValue}</span>
              <input type="range" min={minValue} max={maxValue} value={value} onChange={(e) => setValue(e.target.value)}/>
              <span className="value">Max {maxValue}</span>
          </div>
          <div className="filters">
            <div className="filterContainer">
              <span>Hızlı</span>
              <div className="filter">
                <input type="radio" value="Evet" name="option1" /> Evet
                <input type="radio" value="Hayır" name="option1" /> Hayır
              </div>
            </div>
            <div className="filterContainer">
              <span>Teke Tek</span>
              <div className="filter">
                <input type="radio" value="Evet" name="option2" /> Evet
                <input type="radio" value="Hayır" name="option2" /> Hayır
              </div>
            </div>
            <div className="filterContainer">
              <span>Rövanş</span>
              <div className="filter">
                <input type="radio" value="Evet" name="option3" /> Evet
                <input type="radio" value="Hayır" name="option3" /> Hayır
              </div>
            </div>
          </div>
          <button className="save">Tamam</button>
        </div>
    </div>
  );
}

export default App;
