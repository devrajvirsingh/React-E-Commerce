import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/pages/Shop";
import ShopCategories from "./components/pages/ShopCategories";
import Cart from "./components/pages/Cart";
import Product from "./components/pages/Product";
import LoginSignup from "./components/pages/LoginSignup";
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategories banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategories banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategories banner={kids_banner} category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
