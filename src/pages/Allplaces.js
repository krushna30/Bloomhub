import React, { useContext } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import useDocTitle from "../hooks/useDocTitle";
import FilterBar from "../components/filters/FilterBar";
import ProductCard from "../components/product/ProductCard";
import Services from "../components/common/Services";
import filtersContext from "../contexts/filters/filtersContext";
import EmptyView from "../components/common/EmptyView";
import LocCard from "../components/product/LocCard";
const AllPlaces = () => {
  useDocTitle("All Products");

  const { allProducts } = useContext(filtersContext);
  const { demo } = useContext(filtersContext);
  console.log("insisde all prod");
  console.log(allProducts);
  console.log("insisde all demo prod");
  console.log(demo);
  return (
    <>
      <section id="all_products" className="section">
        <FilterBar />
        <div className="container">
          {demo.length ? (
            <div className="wrapper products_wrapper">
              {demo.map((item) => (
                <LocCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <EmptyView icon={<BsExclamationCircle />} msg="No Results Found" />
          )}
        </div>

        {/* <div className="container">
          {allProducts.length ? (
            <div className="wrapper products_wrapper">
              {allProducts.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <EmptyView icon={<BsExclamationCircle />} msg="No Results Found" />
          )}
        </div> */}
      </section>

      <Services />
    </>
  );
};

export default AllPlaces;
