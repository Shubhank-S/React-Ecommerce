import BreadCrumbArrow from "../../assets/breadcrum_arrow.png";
import "./BreadCrumbs.css";

function BreadCrumbs({ product }) {
  console.log(product);
  return (
    <section className="breadcrumb">
      HOME <img src={BreadCrumbArrow} alt="No Bread Crumb Arrow" />
      SHOP <img src={BreadCrumbArrow} alt="No Bread Crumb Arrow" />
      {product.category}
      <img src={BreadCrumbArrow} alt="No Bread Crumb Arrow" />
      {product.name}
    </section>
  );
}

export default BreadCrumbs;
