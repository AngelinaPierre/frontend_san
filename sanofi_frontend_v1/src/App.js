import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Login } from "./pages/login/Login";
import { HomePage } from "./pages/homepage/HomePage";
import { Products } from "./pages/products/Products";
import { Equipments } from "./pages/equipments/Equipments";
import { Users } from "./pages/users/Users";
import { Stock } from "./pages/stock/Stock";
import { ProductsProcess } from "./pages/products/ProductsProcess";
import { ProdutoCronograma } from "./pages/products/ProdutoCronograma";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/products":
        title = "";
        metaDescription = "";
        break;
      case "/equipments":
        title = "";
        metaDescription = "";
        break;
      case "/users":
        title = "";
        metaDescription = "";
        break;
      case "/stock":
        title = "";
        metaDescription = "";
        break;
      case "/productsprocess":
        title = "";
        metaDescription = "";
        break;
      case "/produtocronograma":
        title = "";
        metaDescription = "";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home-page" element={<HomePage />} />

      <Route path="/products" element={<Products />} />

      <Route path="/equipments" element={<Equipments />} />

      <Route path="/users" element={<Users />} />

      <Route path="/stock" element={<Stock />} />

      <Route path="/productsprocess" element={<ProductsProcess />} />

      <Route path="/produtocronograma" element={<ProdutoCronograma />} />
    </Routes>
  );
}
export default App;
