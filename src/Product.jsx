import { useState } from "react";
import { GasStation, IsntLike, Like, Manual2, People } from "./assets/images";

function Product({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleIsLike = () => {
    setIsLiked((prevState) => !prevState);
  };
  const handleRentCar = () => {
    //To do login here
  };

  return (
    <div className="cardCarChild">
      <div className="cardCarChildTopContain">
        <div className="cardCarChildTop">
          <h3> {product.name}</h3>
          <div className="CarChildTitle1">{product.category}</div>
        </div>
        <button className="iconCard" onClick={handleIsLike}>
          {isLiked ? (
            <img src={Like} alt="waiting img" />
          ) : (
            <img src={IsntLike} alt="waiting img" />
          )}
        </button>
      </div>
      <div className="imageBody">
        <img className="imgg" src={product.image} alt="waiting img" />
      </div>
      <div className="footer">
        <div className="footerTop">
          <div className="ftc">
            <div className="ftcIMG">
              <img src={GasStation} alt="" />
            </div>
            <div className="ftcTitle">{product.gas}</div>
          </div>
          <div className="ftc">
            <div className="ftcIMG">
              <img src={Manual2} alt="waiting img" />
            </div>
            <div className="ftcTitle">{product.type}</div>
          </div>
          <div className="ftc">
            <div className="ftcIMG">
              <img src={People} alt="waiting img" />
            </div>
            <div className="ftcTitle">{product.person}/People</div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerBottomPrice">
            <h1 className="fbpPrice">$99.0/</h1>
            <div className="fbpDay">day</div>
          </div>
          <div className="footerBottomRentNow" onClick={handleRentCar}>
            Rent Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
