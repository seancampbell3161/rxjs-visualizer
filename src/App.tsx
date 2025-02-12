import './App.css'
import { Link, Route, Router, Routes } from 'react-router'
import Stream from './components/Stream'
import Map from './components/operators/Map'
import Filter from './components/operators/Filter'
import CombineLatest from './components/operators/CombineLatest'
import SwitchMap from './components/operators/SwitchMap'
import Concat from './components/operators/Concat'

function App() {

  return (
    <>
      <div className="container">
        <h1>RxJS Visualizer</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/map">map</Link></li>
            <li><Link to="/filter">filter</Link></li>
            <li><Link to="/combineLatest">combineLatest</Link></li>
            <li><Link to="/switchMap">switchMap</Link></li>
            <li><Link to="/concat">concat</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="map" element={<Map />} />
          <Route path="filter" element={<Filter />} />
          <Route path='combineLatest' element={<CombineLatest />} />
          <Route path='switchMap' element={<SwitchMap />} />
          <Route path='concat' element={<Concat />} />
        </Routes>
      </div>
    </>
  )
}

export default App
