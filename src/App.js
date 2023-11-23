import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./Pages/Catalog/Catalog";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
