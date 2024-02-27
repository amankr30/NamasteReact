import { useEffect, useState, useContext } from "react";
import FoodCard, { PromotedlLabel } from "./Foodcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchfood, setSearchFood] = useState("");

  const FoodcardPromoted = PromotedlLabel(FoodCard);

  const [listofres, setListOfRes] = useState([]);
  const [filteredres, setfilteredres] = useState([]);

  const { setUserName, loggedInUser } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6932429&lng=88.37925919999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //optional Chaining
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name)
    // console.log(listofres);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection
      </h1>
    );
  }

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for food and resturants"
          value={searchfood}
          onChange={(e) => {
            setSearchFood(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            console.log(listofres);
            const filteredfood = listofres.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchfood.toLowerCase())
            );

            // console.log(filteredfood);
            setfilteredres(filteredfood);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            // console.log("clicked")
            const filterRes = listofres.filter(
              (res) => res.info.avgRating >= 4.8
            );

            setListOfRes(filterRes);
          }}
        >
          Filter With Highest Rating
        </button>
        <input
          className="p-1"
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="res-container">
        {filteredres.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurant/" + restaurants.info.id}
          >
            {restaurants.info.promoted ? (
              <FoodcardPromoted resData={restaurants} />
            ) : (
              <FoodCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
