import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Home />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}
