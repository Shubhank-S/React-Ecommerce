import { useParams } from "react-router-dom";
import useShopContext from "../../hooks/useShopContext";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import "./Product.css";

function Product() {
  const { all_product } = useShopContext();
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  // console.log(product);
  return (
    <section className="product">
      <BreadCrumbs product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </section>
  );
}

export default Product;
