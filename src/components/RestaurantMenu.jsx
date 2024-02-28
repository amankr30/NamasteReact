import useRestaurantMenu from "../utils/useRestaurantMenu";
import FoodCategory from "./FoodCategory";
import FoodLists from "./FoodLists";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [expandItems, setExpandItems] = useState(null);

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

  console.log(resinfo?.data?.cards[0]?.card?.card?.info)

  const deliveryTime =
    nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla?.deliveryTime;

  const menucard =
    resinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;
  // console.log(menucard);

  const categories =
    resinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="container ">
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

      <div className="foodcategories mx-auto ">
        {categories.map((item, index) => (
          <FoodCategory
            key={item?.card?.card?.title}
            data={item?.card?.card}
            showItems={index === expandItems ? true : false}
            setExpandItems={() => setExpandItems(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
