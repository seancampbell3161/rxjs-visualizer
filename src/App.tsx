import './App.css'
import { Link, Route, Routes } from 'react-router'
import Map from './components/operators/Map'
import Filter from './components/operators/Filter'
import CombineLatest from './components/operators/CombineLatest'
import SwitchMap from './components/operators/SwitchMap'
import Concat from './components/operators/Concat'
import ConcatMap from './components/operators/ConcatMap'
import DebounceTime from './components/operators/DebounceTime'
import DistinctUntilChanged from './components/operators/DistinctUntilChanged'
import Take from './components/operators/Take'
import Merge from './components/operators/Merge'
import Scan from './components/operators/Scan'
import Zip from './components/operators/Zip'
import MergeMap from './components/operators/MergeMap'
import StartWith from './components/operators/StartWith'

function App() {

  return (
    <>
      <div className="container">
        <h1>RxJS Visualizer</h1>

        <div className="layout">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/map">map</Link></li>
              <li><Link to="/filter">filter</Link></li>
              <li><Link to="/take">take</Link></li>
              <li><Link to="/startWith">startWith</Link></li>
              <li><Link to="/scan">scan</Link></li>
              <li><Link to="/debounceTime">debounceTime</Link></li>
              <li><Link to="/distinctUntilChanged">distinctUntilChanged</Link></li>
              <li><Link to="/merge">merge</Link></li>
              <li><Link to="/zip">zip</Link></li>
              <li><Link to="/combineLatest">combineLatest</Link></li>
              <li><Link to="/concat">concat</Link></li>
              <li><Link to="/mergeMap">mergeMap</Link></li>
              <li><Link to="/switchMap">switchMap</Link></li>
              <li><Link to="/concatMap">concatMap</Link></li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path="map" element={<Map />} />
              <Route path="filter" element={<Filter />} />
              <Route path="take" element={<Take />} />
              <Route path="startWith" element={<StartWith />} />
              <Route path="scan" element={<Scan />} />
              <Route path="debounceTime" element={<DebounceTime />} />
              <Route path="distinctUntilChanged" element={<DistinctUntilChanged />} />
              <Route path="merge" element={<Merge />} />
              <Route path="zip" element={<Zip />} />
              <Route path="combineLatest" element={<CombineLatest />} />
              <Route path="concat" element={<Concat />} />
              <Route path="mergeMap" element={<MergeMap />} />
              <Route path="switchMap" element={<SwitchMap />} />
              <Route path="concatMap" element={<ConcatMap />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
