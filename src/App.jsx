import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>This is Home Page</h1>} />
          <Route path="/men" element={<h1>This is men Page</h1>} />
          <Route path="/woman" element={<h1>This is woman Page</h1>} />
          <Route path="/kids" element={<h1>This is kids Page</h1>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
