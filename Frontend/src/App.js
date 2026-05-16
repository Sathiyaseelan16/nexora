import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useEffect, useState } from "react";

import Home from "./Home";
import News from "./News";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Auth from "./Auth";
import Navbar from "./Navbar";

import AdminDashboard from "./AdminDashboard";
import AdminProtectedRoute from "./AdminProtectedRoute";

import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

import Footer from "./components/Footer";

import ProtectedRoute from "./ProtectedRoute";

import NewsDetails from "./NewDetails";
import GalleryDetails from "./GalleryDetails";

import WebDesign from "./pages/WebDesign";
import Development from "./pages/Development";
import Security from "./pages/Security";
import Support from "./pages/Support";

function App() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (token) {

      setIsLoggedIn(true);

    }

  }, []);

  return (

    <BrowserRouter>

      {isLoggedIn && 
      <Navbar
       isLoggedIn={isLoggedIn}
       setIsLoggedIn={setIsLoggedIn}
      />}

      <Routes>

        <Route
          path="/auth"
          element={
            <Auth
              setIsLoggedIn={
                setIsLoggedIn
              }
            />
          }
        />

        <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        }
        />

        <Route 
        path="/forgot-password"
        element={<ForgotPassword />}
        />

        <Route
        path="/reset-password/:token"
        element={<ResetPassword />}
        />

        {/* HOME */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* NEWS */}
        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          }
        />

        {/* GALLERY */}
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/news/:id"
          element={
            <ProtectedRoute>
              <NewsDetails />
          </ProtectedRoute>
          }
        />

        <Route
        path="/gallery/:id"
        element={
          <ProtectedRoute>
            <GalleryDetails />
          </ProtectedRoute>
          }
        />

        <Route
        path="/web-design"
        element={
        <ProtectedRoute>
          <WebDesign />
        </ProtectedRoute>}
        />

        <Route
        path="/development"
        element={
        <ProtectedRoute>
          <Development />
        </ProtectedRoute>}
        />

        <Route
        path="/security"
        element={
          <ProtectedRoute>
          <Security />
        </ProtectedRoute>
        }
        />

        <Route
        path="/support"
        element={
          <ProtectedRoute>
          <Support />
        </ProtectedRoute>
        }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
