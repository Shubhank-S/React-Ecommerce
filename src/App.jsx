import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";
import MenBanner from "./assets/banner_mens.png";
import WomanBanner from "./assets/banner_women.png";
import KidBanner from "./assets/banner_kids.png";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<ShopCategory category="men" banner={MenBanner} />}
          />
          <Route
            path="/womans"
            element={<ShopCategory category="women" banner={WomanBanner} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={KidBanner} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
