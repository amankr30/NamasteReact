import { CDN_URL } from "../utils/constants";

const FoodCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      areaName,
      avgRating,
      costForTwo,
      sla,
      
    } = resData?.info;
  
    const {deliveryTime}=sla;
  
    return (
      <div className="foodcard">
        <div className="image">
          <img
            src={
              CDN_URL+
              cloudinaryImageId
            }
          ></img>
        </div>
        <div className="details">
          <div className="foodaddress">
            <h4 className="restname">{name}</h4>
            <p className="cuisines">{cuisines.join(",")}</p>
            <p className="location"> {areaName}</p>
          </div>
  
          <div className="rating-price-dlvtime">
            <p className="rating">{avgRating} ⭐</p>
            <p className="price">{costForTwo}</p>
            <p className="dlvtime">{deliveryTime} mins</p>
          </div>
        </div>
      </div>
    );
  };

  export default FoodCard;