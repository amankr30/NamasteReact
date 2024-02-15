import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import {useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);

  if (resinfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    areaname,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
    nearestOutletNudge,
  } = resinfo?.data?.cards[0]?.card?.card?.info;

  const deliveryTime =
    nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla?.deliveryTime;

  const menucard =
    resinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  // console.log(menucard);

  return (
    <div className="container">
      <div className="first">
        <div className="left">
          <div className="resname">
            <h2>{name}</h2>
          </div>
          <div className="cousines">
            <p>{cuisines.join(", ")}</p>
          </div>
          <div className="address">{areaname}</div>
          <div className="dlvtime-price">
            <span>{deliveryTime} min</span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
        <div className="right">
          <span>⭐{avgRatingString}</span>
          <hr />
          <span>{totalRatingsString}</span>
        </div>
      </div>

      <hr />

      <div className="filter-btn">
        <span>Veg Only</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      <hr />

      <div className="recommended">
        {menucard.map((item) => (
          <div className="fooditem" key={item.card.info.id}>
            <h3>{item.card.info.name}</h3>
            <p>Rs{item.card.info.price / 100}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
