import { useEffect, useRef, useState } from 'react'
import './App.css'
import Marble from './components/Marble'
import Stream from './components/Stream'
import { Subject } from 'rxjs';


function App() {
  const [xValue, setXValue] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(0);


  const startInterval = () => {
    if (!isRunning) {
      setIsRunning(true);
      let count = 0;
      intervalRef.current = setInterval(() => {
        if (count <= 55) {
          setXValue(xValue => xValue + 0.15);
          count += 0.1;
        }        
      }, 1);
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="container">
        <h1>RxJS Visualizer</h1>

        {/* <button onClick={startInterval}>Start</button> */}
        <div className="marble-container">
          <Stream />
          {/* <svg viewBox='0 0 100 10' style={{ width: '680px', height: '68px', overflow: 'visible' }}>
          <Marble x={xValue} label={'1'} />
          <Marble x={xValue + 15} label={'A'} />
          </svg> */}
        </div>
        {/* <div className="marble-container">
          <Stream />
        </div> */}
      </div>
    </>
  )
}

export default App
