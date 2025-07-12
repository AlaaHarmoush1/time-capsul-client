import Home from './Pages/Home.jsx'
import PublicWall from './Pages/PublicWall.jsx'
import MyCapsules from './Pages/MyCapsules.jsx'
import TermsAndConditions from './Pages/Legal/TermsAndConditions.jsx'
import NotFound from './Pages/NotFound.jsx'
import ContactUs from './Pages/Support/ContactUs.jsx'
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy.jsx'
import LegalNotice from './Pages/Legal/LegalNotice.jsx'

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/public-wall', element: <PublicWall /> },
    { path: '/my-capsules', element: <MyCapsules /> },
    { path: '/terms', element: <TermsAndConditions /> },
    { path: '/contact', element: <ContactUs /> },
    { path: '/privacy', element: <PrivacyPolicy /> },
    { path: '/legal', element: <LegalNotice /> },
    { path: '*', element: <NotFound /> },
]