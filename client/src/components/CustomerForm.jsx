import { useState } from "react";
import api from "../api/axios";

export default function CustomerForm() {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
  });

  const submit = async () => {
    await api.post("/customers", customer);
    setCustomer({});
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold mb-2">Add Customer</h2>
      <input
        placeholder="Name"
        value={customer.name}
        onChange={(e) =>
          setCustomer({ ...customer, name: e.target.value })
        }
        className="border p-2 mb-2 w-full"
      />
      <input
        placeholder="Phone"
        value={customer.phone}
        onChange={(e) =>
          setCustomer({ ...customer, phone: e.target.value })
        }
        className="border p-2 mb-2 w-full"
      />
      <button className="bg-green-600 text-white px-4 py-2" onClick={submit}>
        Save
      </button>
    </div>
  );
}
