import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPAge";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <header>
        <Link to="/"> home</Link>
        <Link to="/about"> About</Link>
        <Link to="/product/87659876897"> Product</Link>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <footer>footer</footer>
    </Router>
  );
}

export default App;
