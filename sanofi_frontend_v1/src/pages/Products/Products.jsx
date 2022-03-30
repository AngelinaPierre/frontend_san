import { MenuSidebar } from "../../components/MenuSidebar/MenuSidebar";
import { ProductContent } from "./ProductContent";
import { SystemBar } from "../../components/SystemBar/SystemBar";
import { AppBar } from "../../components/AppBar/AppBar";
import styles from "./css/Products.module.css";

export const Products = () => {
  return (
    <div className={styles.productsDiv}>
      <MenuSidebar icon="-icon8.svg" icon1="-icon9.svg" />
      <ProductContent />
      <SystemBar />
      <AppBar pageTitle="Produtos" trailingIcons="trailing-icons1.svg" />
    </div>
  );
};
