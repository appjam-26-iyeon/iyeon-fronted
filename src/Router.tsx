import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CalenderPage from "./pages/CalenderPage";
import CoupleMatchingPage from "./pages/CoupleMatchingPage";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/home" element={<CalenderPage />} />
                <Route path="/CoupleMatching" element={<CoupleMatchingPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router