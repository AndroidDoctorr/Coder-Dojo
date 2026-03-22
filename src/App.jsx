import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import BonusTracks from './pages/BonusTracks/BonusTracks'
import TrackPage from './pages/TrackPage/TrackPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bonus-tracks" element={<BonusTracks />} />
          <Route path="bonus-tracks/:trackId" element={<TrackPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
