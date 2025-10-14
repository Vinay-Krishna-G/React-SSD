import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router";
import { CheckOutPage } from "./pages/CheckoutPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
    </Routes>
  );
}

export default App;
