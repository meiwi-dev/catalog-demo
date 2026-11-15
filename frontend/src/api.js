/* Configuración de la API */
export const API = "http://localhost:8000";

/* Define los estados posibles para el campo status */
export const STATUS_LABELS = {
  preorder: "Preventa",
  in_stock: "En stock",
  sold_out: "Agotado",
};

/* Recibe un número y lo formatea como una string en formato moneda japonesa. Ej: yen(1000) => "¥1,000" */
export const yen = (n) => `¥${n.toLocaleString("ja-JP")}`;

/* Función para obtener todos los productos */
export async function getProducts() {
  const res = await fetch(`${API}/api/v2/pages/?type=catalog.ProductPage&fields=*`); /* Se hace la petición a la API de Wagtail para obtener todas las páginas de tipo ProductPage y se incluyen todos los campos. */
  if (!res.ok) throw new Error("No se pudo cargar el catálogo"); 
  const data = await res.json();
  return data.items;
}

/* Función para obtener un producto específico por ID*/
export async function getProduct(id) {
  const res = await fetch(`${API}/api/v2/pages/${id}/`); /* Se hace la petición a la API de Wagtail para obtener la página específica. */
  if (!res.ok) throw new Error("Producto no encontrado");
  return res.json();
}