import { useEffect, useState } from "react";
import api from "../api/axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await api.get("/products");
      setProducts(res.data);
    };

    load();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="font-bold mb-2">Products</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
