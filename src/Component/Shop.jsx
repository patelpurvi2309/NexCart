import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";
import Product from "./Product";

const Shop = () => {

  const [catdata, setcatdata] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");

  function secondData() {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
        setcatdata(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    secondData();
  }, []);

  return (
    <div className="container-fluid mt-3">

      {/* Mobile Category Dropdown */}
      <div className="d-lg-none mb-3">
        <select
          className="form-select"
          onChange={(e) => setSelectedCat(e.target.value)}
        >
          <option value="">Select Category</option>
          {catdata.map((item, index) => (
            <option key={index} value={item.slug || item}>
              {item.name || item}
            </option>
          ))}
        </select>
      </div>

      <div className="row">

        {/* Desktop Sidebar */}
        <div className="col-lg-3 d-none d-lg-block">
          <Category catdata={catdata} />
        </div>

        {/* Products Section */}
        <div className="col-12 col-lg-9">
          <Product selectedCat={selectedCat}/>
        </div>

      </div>

    </div>
  );
};

export default Shop;