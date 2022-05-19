import './App.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
const { data } = require('./data');

function App() {
  const [value, setValue] = useState(1000);
  const minValue = 200;
  const maxValue = 5000;

  const [tip1, setTip1] = useState('evet');
  const [tip2, setTip2] = useState('evet');
  const [tip3, setTip3] = useState('evet');

  let global = [];

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
                <input type="radio" name="masaTipi1" value="evet" defaultChecked/> Evet
                <input type="radio" name="masaTipi1" value="hayir" /> Hayır
              </div>
            </div>
            <div className="filterContainer">
              <span>Teke Tek</span>
              <div className="filter" onChange={(e) => setTip2(e.target.value)}>
                <input type="radio" name="masaTipi2" value="evet" defaultChecked/> Evet
                <input type="radio" name="masaTipi2" value="hayir" /> Hayır
              </div>
            </div>
            <div className="filterContainer">
              <span>Rövanş</span>
              <div className="filter" onChange={(e) => setTip3(e.target.value)}>
                <input type="radio" name="masaTipi3" value="evet" defaultChecked/> Evet
                <input type="radio" name="masaTipi3" value="hayir" /> Hayır
              </div>
            </div>
          </div>
          <button className="save">Tamam</button>
          <div className="results">
            {
              data.filter((bilgi) => {
                const obj = {};

                if(Number(value) >= Number(bilgi.bahis)) {
                  obj['bahis'] = bilgi.bahis;
                  if(tip1 == bilgi.hizli && bilgi.hizli == 'evet') {
                    obj['hizli'] = bilgi.hizli;
                  }
                  if(tip2 == bilgi.teketek && bilgi.teketek == 'evet') {
                    obj['teketek'] = bilgi.teketek;
                  }
                  if(tip3 == bilgi.rovans && bilgi.rovans == 'evet') {
                    obj['rovans'] = bilgi.rovans;
                  }

                  global.push(obj);
                }   
            })
            }
                  {
                      global.map((bilgi) => (
                        <div className="result" key={nanoid()}>
                          <span><b>Bahis:</b> {bilgi.bahis}</span>
                          <br />
                          <span><b>Masa Tipi:</b>
                              <br/><b>Hızlı:</b> {bilgi.hizli ? 'Evet' : 'Hayır'}<br/>
                              <b>Teke tek:</b> {bilgi.teketek ? 'Evet' : 'Hayır'}<br/>
                              <b>Rövanş:</b> {bilgi.rovans ? 'Evet' : 'Hayır'}<br/>
                          </span>
                        </div>
                      ))
                    }
          </div>
        </div>
    </div>
  );
}

export default App;
