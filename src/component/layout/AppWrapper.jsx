import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import AppToaster from '../../Services/AppToaster'
import { routes } from '../../routes'


const AppWrapper = () => {
  const location = useLocation()

  const authRoutes = ['/login', '/Login', '/signup','/Signup','/forgot-password', '/reset-password', '/*']
  const isAuthRoute = authRoutes.includes(location.pathname)

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      {!isAuthRoute && <Navbar />}
      <main className="pt-c flex-grow">
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <AppToaster />
      {!isAuthRoute && <Footer />}
    </div>
  )
}

export default AppWrapper