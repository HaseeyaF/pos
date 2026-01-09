import { useState } from "react";
import api from "../api/axios";

export default function ProductForm({ onSaved }) {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    price: "",
    cost: "",
    quantity: "",
    category: "",
    unit: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    await api.post("/products", form);
    onSaved();
    setForm({});
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold mb-2">Add Product</h2>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          value={form[key]}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
        />
      ))}
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2">
        Save
      </button>
    </div>
  );
}
