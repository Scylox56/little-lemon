import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import BookingPage from "./pages/BookingPage";
import MenuItemDetailPage from "./pages/MenuItemDetailPage";

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/menu/:id" element={<MenuItemDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
