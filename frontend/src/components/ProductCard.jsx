import { Link } from "react-router";
import { API, STATUS_LABELS, yen } from "../api";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      {product.thumb && <img src={API + product.thumb.url} alt={product.title} />}
      <span className={`status ${product.status}`}>{STATUS_LABELS[product.status]}</span>
      <h3>{product.title}</h3>
      <p className="meta">{product.manufacturer} · {product.scale}</p>
      <p className="price">{yen(product.price_jpy)}</p>
    </Link>
  );
}