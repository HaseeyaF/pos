import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Invoice() {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  const addItem = (p) => {
    setItems([...items, { productId: p.id, price: p.price, quantity: 1 }]);
  };

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const submitInvoice = async () => {
    await api.post("/invoices", {
      customerId: 1,
      items,
      total,
      paymentMethod: "CASH",
    });
    setItems([]);
  };

  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">Billing</h2>

      <div className="grid grid-cols-2 gap-2">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => addItem(p)}
            className="border p-2"
          >
            {p.name}
          </button>
        ))}
      </div>

      <h3 className="mt-4">Total: ₹{total}</h3>
      <button
        onClick={submitInvoice}
        className="bg-purple-600 text-white px-4 py-2 mt-2"
      >
        Complete Sale
      </button>
    </div>
  );
}
