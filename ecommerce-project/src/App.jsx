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

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="/checkout"
        element={<CheckOutPage cart={cart} loadCart={loadCart} />}
      />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route
        path="/tracking/:orderId/:productId"
        element={<Tracking cart={cart} />}
      />
      <Route path="*" element={<ErrorPage cart={cart} />} />
    </Routes>
  );
}

export default App;
