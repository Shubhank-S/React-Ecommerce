import BreadCrumbArrow from "../../assets/breadcrum_arrow.png";
import "./BreadCrumbs.css";

function BreadCrumbs({ product }) {
  //   console.log(product);
  return (
    <section className="breadcrumb">
      Home <img src={BreadCrumbArrow} alt="No Bread Crumb Arrow" />
      Shop <img src={BreadCrumbArrow} alt="No Bread Crumb Arrow" />
      {/* {product.category} */}
    </section>
  );
}

export default BreadCrumbs;
