import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Profile, { profileLoader } from './pages/profiles/Profile'
import ProfileDetails, { profileDetailsLoader } from './pages/profiles/ProfileDetails'
import ProfileError from './pages/profiles/ProfileError'

import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProfileLayout from './layouts/ProfileLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="profiles" element={<ProfileLayout />} errorElement={<ProfileError/>}>
                <Route index element={<Profile />} loader={profileLoader} />
                <Route path=':id' element={<ProfileDetails/>} loader={profileDetailsLoader} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />,
//     },
//     {
//         path: '/about',
//         element: <About />,
//     },
// ])

function App() {
    return <RouterProvider router={router} />
}

export default App
