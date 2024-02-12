import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <section className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div className="descriptionbox_nav">Description</div>
        <div className="descriptionbox_nav">Reviews</div>
      </div>
      <div className="descriptionbox_description">
        <p>
          "Welcome to our online store, where shopping becomes an experience and
          finding the perfect products is a delight. Discover a curated
          collection of high-quality items that blend style, functionality, and
          affordability. From fashion-forward apparel to innovative gadgets, our
          diverse range caters to every taste and need. We take pride in
          offering a seamless shopping experience, with user-friendly navigation
          and detailed product information.
        </p>
        <p>
          Whether you're upgrading your wardrobe, enhancing your home, or
          searching for the perfect gift, our carefully selected products
          reflect the latest trends and enduring classics. Explore our site, and
          embark on a journey of discovering exceptional products that elevate
          your lifestyle. Happy shopping!"
        </p>
      </div>
    </section>
  );
}

export default DescriptionBox;
