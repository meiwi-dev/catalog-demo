import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { API, getProduct, STATUS_LABELS, yen } from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProduct(id).then(setProduct).catch((e) => setError(e.message));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!product) return <p>Cargando…</p>;

  return (
    <article className="detail">
      <Link to="/">← Volver al catálogo</Link>
      {product.thumb && <img src={API + product.thumb.url} alt={product.title} />}
      <span className={`status ${product.status}`}>{STATUS_LABELS[product.status]}</span>
      <h2>{product.title}</h2>
      <p className="meta">{product.manufacturer} · {product.scale}</p>
      <p className="price">{yen(product.price_jpy)}</p>
      <p>{product.description}</p>
    </article>
  );
}