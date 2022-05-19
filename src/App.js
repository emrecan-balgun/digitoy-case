import './App.css';
import { useState } from 'react';
const { data } = require('./data');

function App() {
  const [value, setValue] = useState(1000);
  const minValue = 200;
  const maxValue = 5000;

  const [tip1, setTip1] = useState('Evet');
  const [tip2, setTip2] = useState('Evet');
  const [tip3, setTip3] = useState('Evet');

  const handleClick = () => {
    console.log("Butona basıldı");
    console.log("Bahis: " + value + "\nHızlı: " + tip1 + "\nTeke Tek: " + tip2 + "\nRövanş: " + tip3)
  }
  
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
              <div className="filter" onChange={(e) => setTip1(e.target.value)}>
                <input type="radio" name="masaTipi1" value="Evet" defaultChecked/> Evet
                <input type="radio" name="masaTipi1" value="Hayır" /> Hayır
              </div>
            </div>
            <div className="filterContainer">
              <span>Teke Tek</span>
              <div className="filter" onChange={(e) => setTip2(e.target.value)}>
                <input type="radio" name="masaTipi2" value="Evet" defaultChecked/> Evet
                <input type="radio" name="masaTipi2" value="Hayır" /> Hayır
              </div>
            </div>
            <div className="filterContainer">
              <span>Rövanş</span>
              <div className="filter" onChange={(e) => setTip3(e.target.value)}>
                <input type="radio" name="masaTipi3" value="Evet" defaultChecked/> Evet
                <input type="radio" name="masaTipi3" value="Hayır" /> Hayır
              </div>
            </div>
          </div>
          <button className="save" onClick={handleClick}>Tamam</button>
          <div className="results">
            {
              
            }
            {/* <div className="result">
              <span><b>Bahis:</b> 1000$</span>
              <br />
              <span><b>Masa Tipi:</b> Hızlı Evet, Teke Tek Evet</span>
            </div> */}
          </div>
        </div>
    </div>
  );
}

export default App;
