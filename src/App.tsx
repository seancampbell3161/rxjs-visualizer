import './App.css'
import { Link, Outlet, Route, Routes } from 'react-router'
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
import Tap from './components/operators/Tap'
import Pairwise from './components/operators/Pairwise'
import Delay from './components/operators/Delay'
import ThrottleTime from './components/operators/ThrottleTime'
import ExhaustMap from './components/operators/ExhaustMap'
import WithLatestFrom from './components/operators/WithLatestFrom'
import CatchError from './components/operators/CatchError'
import Home from './components/Home'
import { OPERATOR_CATEGORIES } from './operators'

function OperatorLayout() {
  return (
    <div className="layout">
      <nav>
        <Link to="/" className="nav-home-link">Home</Link>
        {OPERATOR_CATEGORIES.map(category => (
          <div key={category.name} className="nav-category">
            <h3 className="nav-category-heading">{category.name}</h3>
            <ul>
              {category.operators.map(op => (
                <li key={op.path}><Link to={`/${op.path}`}>{op.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h1>RxJS Visualizer</h1>
      <Routes>
        <Route element={<OperatorLayout />}>
          <Route index element={<Home />} />
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
          <Route path="exhaustMap" element={<ExhaustMap />} />
          <Route path="tap" element={<Tap />} />
          <Route path="pairwise" element={<Pairwise />} />
          <Route path="delay" element={<Delay />} />
          <Route path="throttleTime" element={<ThrottleTime />} />
          <Route path="withLatestFrom" element={<WithLatestFrom />} />
          <Route path="catchError" element={<CatchError />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
