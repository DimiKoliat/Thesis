import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";

function Header() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/home" element={<HomePage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/about" element={<AboutPage />}/>
            </Routes>
        </Router>
    )
}
export default Header;