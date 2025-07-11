import Home from './Pages/Home.jsx'
import Explore from './Pages/Explore.jsx'
import Create from './Pages/Create.jsx'
import MyCapsules from './Pages/MyCapsules.jsx'
import TermsAndConditions from './Pages/Legal/TermsAndConditions.jsx'
import NotFound from './Pages/NotFound.jsx'
import ContactUs from './Pages/Support/ContactUs.jsx'

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/explore', element: <Explore /> },
    { path: '/create', element: <Create /> },
    { path: '/my-capsules', element: <MyCapsules /> },
    { path: '/terms', element: <TermsAndConditions /> },
    { path: '/contact', element: <ContactUs /> },
    { path: '*', element: <NotFound /> },
]