import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import NavbarHero from "./components/NavbarHero.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import CareerPage from "./pages/CareerPage.jsx";
import TestimonialPage from "./pages/TestimonialPage.jsx";
import CountriesPage from "./pages/CountriesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminLogin from "./pages/AdminLogin";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const isHome = location.pathname === "/";

  return (
    <>
      {!isAdmin && <Navbar />}
      {!isAdmin && <NavbarHero />}

      {/* On home, hero handles its own top padding. Other pages need navbar offset */}
      <div style={{ paddingTop: !isAdmin && !isHome ? "72px" : "0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminPage />
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </div>

      {!isAdmin && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
