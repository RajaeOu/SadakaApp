import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Annonces from './components/Annonces'
import Users from './components/Users'
import NewsLetter from './components/NewsLetter'
import Carte from "./components/Carte"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="annonces" element={<Annonces />} />
                    <Route path="utilisateur" element={<Users />} />
                    <Route path="newsletter" element={<NewsLetter />} />
                    <Route path="carte" element={<Carte />} />
                </Route>
                {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
        </Router>
    )
}

export default App
