import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";
import TaskRoutes from "./routes/TaskRoutes.jsx";
import { TaskProvider } from "./components/context/TaskContext.jsx";
import SignInForm from "./pages/SignInForm.jsx";
import { AuthContextProvider } from "./components/context/AuthContext.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <TaskProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<SignInForm />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <AboutPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/task/*"
                element={
                  <ProtectedRoute>
                    <TaskRoutes />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TaskProvider>
      </AuthContextProvider>
    </>
  );
}
