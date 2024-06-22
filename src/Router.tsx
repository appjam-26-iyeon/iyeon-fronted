import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CalenderPage from "./pages/CalenderPage";
import CoupleMatchingPage from "./pages/CoupleMatchingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthenticationPage from "./pages/AuthenticationPage";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/home" element={<CalenderPage />} />
                <Route path="/CoupleMatching" element={<CoupleMatchingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="auth" element={<AuthenticationPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router