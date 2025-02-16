import { Link } from "react-router-dom";

export default function ProductPage() {
  const PRODUCTS = [
    { id: "p1", title: "product 1" },
    { id: "p2", title: "product 2" },
    { id: "p3", title: "product 3" },
  ];
  return (
    <>
      <h1> The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={product.id}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to = '..'> Back to Home</Link>
    </>
  );
}
