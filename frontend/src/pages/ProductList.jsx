import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts, STATUS_LABELS } from "../api";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const visible = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (status === "all" || p.status === status)
  );

  if (loading) return <p>Cargando…</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
      <div className="filters">
        <input
          placeholder="Buscar por nombre…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">Todos</option>
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {visible.length === 0 ? (
        <p>Sin resultados.</p>
      ) : (
        <div className="grid">
          {visible.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </>
  );
}