import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'

/**
 * Layout imports
 */
import Navbar from './layout/navbar'

/**
 * Pages imports
 */
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Create from './Pages/Create'
import MyCapsules from './Pages/MyCapsules'
import TermsAndConditions from './Pages/TermsAndConditions'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-[100vh] justify-center w-full items-center">
        <Navbar />
        <main className="main-content ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<Create />} />
            <Route path="/my-capsules" element={<MyCapsules />} />
            <Route path="/Terms-and-conditions" element={<TermsAndConditions />} />

          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App