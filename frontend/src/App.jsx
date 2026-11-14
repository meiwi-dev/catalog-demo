import { Routes, Route, Link } from "react-router";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <div className="container">
      <header>
        <Link to="/"><h1>Catálogo Demo</h1></Link>
      </header>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}