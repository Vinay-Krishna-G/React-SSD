import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router";
import { CheckOutPage } from "./pages/checkout/CheckoutPage";
import "./App.css";
import { Orders } from "./pages/Orders";
import { Tracking } from "./pages/Tracking";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
