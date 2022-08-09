import React from "react";
import bgimg from "../assets/Products/bgimg.png";
import tiktok from "../assets/Products/image.jpg";
import logo1 from "../assets/Products/users/b1.png";
import user1 from "../assets/Products/users/user-1.png";
import logo2 from "../assets/Products/users/logo1.png";
import user2 from "../assets/Products/users/user-24.png";
import logo3 from "../assets/Products/users/b3.png";
import user3 from "../assets/Products/users/user-3.png";
import TheProduct from "./TheProduct";

const Products = () => {
  return (
    <section  id="product" className="products-container">
      <div className="main-box">
        <img src={bgimg} alt="bgimage" />
      </div>
      <div className="products-box">
        <TheProduct
          logo={logo1}
          user={user1}
          name="Sophie Moore"
          position="Product Developer at Webflow"
          class="box-1"
          title="product-1"
        />
        <TheProduct
          logo={logo2}
          user={user2}
          name="Adam Smith"
          position="Web Designer at Airtable"
          class="box-2"
          title="product-2"
        />
        <TheProduct
          logo={logo3}
          user={user3}
          name="Mike Warren"
          position="Product Manager at Zapier"
          class="box-3"
          title="product-3"
        />
        <TheProduct
          logo={logo2}
          user={user2}
          name="Adam Smith"
          position="Web Designer at Airtable"
          class="box-4"
          title="product-4"
        />
        <div className="box-5">
          <img src={tiktok} alt="tik-tok screen" />
        </div>
      </div>
    </section>
  );
};

export default Products;
