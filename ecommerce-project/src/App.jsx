import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router";
import { CheckOutPage } from "./pages/checkout/CheckoutPage";
import "./App.css";
import { Orders } from "./pages/Orders";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
