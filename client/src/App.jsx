import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import CustomerForm from "./components/CustomerForm";
import Invoice from "./components/Invoice";

export default function App() {
  return (
    <div className="p-4 space-y-4">
      <Invoice />
      <ProductForm onSaved={() => window.location.reload()} />
      <ProductList />
      <CustomerForm />
    </div>
  );
}
