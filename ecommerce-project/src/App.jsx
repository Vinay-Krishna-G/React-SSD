import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { Route, Routes } from "react-router";
import { CheckOutPage } from "./pages/checkout/CheckoutPage";
import "./App.css";
import { Orders } from "./pages/orders/Orders";
import { Tracking } from "./pages/Tracking";
import { ErrorPage } from "./pages/ErrorPage";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    fetchAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckOutPage cart={cart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
