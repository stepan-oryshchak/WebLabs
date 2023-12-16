import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./Pages/ProductDetailPage/ProductDetailPage";
import Checkout from "./Pages/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./Pages/Catalog/Catalog";
import store from './Pages/Cart/store';
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Catalog/:id" element={<ProductDetailPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
