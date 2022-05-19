import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(1000);
  const minValue = 200;
  const maxValue = 5000;

  const masaHandler = (event) => {
    console.log(event.target.value);
  }

  const handleClick = () => {
    console.log("Butona basıldı");
  }

  const data = [
    {
      bahis: "1000",
      hizli: "evet",
      teketek: "evet",
      rovans: "evet",
    },
    {
      bahis: "1500",
      hizli: "evet",
      teketek: "evet",
      rovans: "hayir",
    },
    {
      bahis: "3200",
      hizli: "evet",
      teketek: "hayir",
      rovans: "evet",
    },
    {
      bahis: "200",
      hizli: "hayir",
      teketek: "evet",
      rovans: "evet",
    },
    {
      bahis: "4000",
      hizli: "hayir",
      teketek: "hayir",
      rovans: "evet",
    }
  ]
  
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
              <div className="filter" onChange={(e) => masaHandler(e)}>
                <input type="radio" value="Hızlı Evet" /> Evet
                <input type="radio" value="Hızlı Hayır" /> Hayır
              </div>
            </div>
            <div className="filterContainer">
              <span>Teke Tek</span>
              <div className="filter" onChange={(e) => masaHandler(e)}>
                <input type="radio" value="Teke Tek Evet" /> Evet
                <input type="radio" value="Teke Tek Hayır" /> Hayır
              </div>
            </div>
            <div className="filterContainer">
              <span>Rövanş</span>
              <div className="filter" onChange={(e) => masaHandler(e)}>
                <input type="radio" value="Rövanş Evet" /> Evet
                <input type="radio" value="Rövanş Hayır" /> Hayır
              </div>
            </div>
          </div>
          <button className="save" onClick={handleClick}>Tamam</button>
          <div className="results">
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
