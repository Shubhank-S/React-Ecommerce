import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
