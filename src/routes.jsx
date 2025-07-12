/**
 * Main Pages
 */

import Home from './Pages/Home.jsx'
import PublicWall from './Pages/PublicWall.jsx'
import MyCapsules from './Pages/MyCapsules.jsx'

/**
 * Legal
 */
import TermsAndConditions from './Pages/Legal/TermsAndConditions.jsx'
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy.jsx'
import LegalNotice from './Pages/Legal/LegalNotice.jsx'


/**
 * Quick Links
 */
import About from './Pages/QuickLinks.jsx/About.jsx'
import News from './Pages/QuickLinks.jsx/News.jsx'


/**
 * Support
 */
import ContactUs from './Pages/Support/ContactUs.jsx'
import FAQ from './Pages/Support/FAQ.jsx'
import Report from './Pages/Support/Report.jsx'


/**
 * Auth
 */
import Login from './Pages/Auth/Login.jsx'


/**
 * Not Found
 */
import NotFound from './Pages/NotFound.jsx'



export const routes = [
    { path: '/', element: <Home /> },
    { path: '/public-wall', element: <PublicWall /> },
    { path: '/my-capsules', element: <MyCapsules /> },
    { path: '/terms', element: <TermsAndConditions /> },
    { path: '/contact', element: <ContactUs /> },
    { path: '/privacy', element: <PrivacyPolicy /> },
    { path: '/legal', element: <LegalNotice /> },
    { path: '/about', element: <About /> },
    { path: '/news', element: <News /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/report', element: <Report /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> },
]