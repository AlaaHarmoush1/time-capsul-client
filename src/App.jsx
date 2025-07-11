import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import './styles/utilities.css'

/**
 * Layout imports
 */
import Navbar from './component/layout/Navbar.jsx'
import Footer from './component/layout/Footer.jsx'

/**
 * Pages imports
 */
import { routes } from './routes.jsx'


// TODO: USE Layout Not Direclty Navbar and Footer

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-gray-100">
        <Navbar />
        <main className="pt-c">
          <Routes>
            {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  )
}

export default App