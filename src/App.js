import { useState } from "react";
import "./App.css";
import { Like, Manual2, GasStation, People, IsntLike } from "./assets/images";

import products from "./mock-data/products";
import Loading from "./common/loader";
import Product from "./Product";

function App() {
  const [totalProducts, setTotalProducts] = useState(products.slice(0, 4));
  const [isFetching, setIsFetching] = useState(false);

  const handleViewAll = () => {
    setIsFetching(true);
    const timerId = setTimeout(() => {
      setTotalProducts(products);
      setIsFetching(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  };

  return (
    <>
      <div className="contain">
        <div className="titleCar">
          <div className="titleCarLeft">Popular Car</div>
          <button className="titleCarRight" onClick={handleViewAll}>
            View All
          </button>
        </div>
        <div className="cardCarContain">
          {totalProducts.map((product) => (
            <Product product={product} />
          ))}
          <Loading isLoading={isFetching} />
        </div>
      </div>
    </>
  );
}

export default App;
