import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Homepage } from "./pages/HomePage/Homepage";
import { Products } from "./pages/Products/Products";
import { ProductsProcess } from "./pages/Products/ProductsProcess";
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

    //Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/products":
        title = "";
        metaDescription = "";
        break;
      case "/productsprocess":
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

      <Route path="/homepage" element={<Homepage />} />

      <Route path="/products" element={<Products />} />

      <Route path="/productsprocess" element={<ProductsProcess />} />
    </Routes>
  );
}
export default App;
