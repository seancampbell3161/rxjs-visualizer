import './App.css'
import { Link, Route, Router, Routes } from 'react-router'
import Stream from './components/Stream'
import Map from './components/operators/Map'
import Filter from './components/operators/Filter'
import CombineLatest from './components/operators/CombineLatest'

function App() {

  return (
    <>
      <div className="container">
        <h1>RxJS Visualizer</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/filter">Filter</Link></li>
            <li><Link to="/combineLatest">CombineLatest</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="map" element={<Map />} />
          <Route path="filter" element={<Filter />} />
          <Route path='combineLatest' element={<CombineLatest />} />
        </Routes>
      </div>
    </>
  )
}

export default App
