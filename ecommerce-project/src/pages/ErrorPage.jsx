import { Header } from "../components/Header";
import "./ErrorPage.css";

export function ErrorPage() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="heading1">404</h1>

        <h3 className="heading2">Page not found</h3>
      </div>
    </>
  );
}
