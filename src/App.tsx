import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Refund from "@/pages/Refund";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function AppContent() {
  const location = useLocation();
  const authRoutes = ["/login", "/register"];
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!isAuthRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
