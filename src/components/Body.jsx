import { useEffect, useState } from "react";
import FoodCard from "./Foodcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  
  const [searchfood, setSearchFood] = useState("");
 
  
  const [listofres, setListOfRes] = useState([]);
  const [filteredres, setfilteredres] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5562163&lng=88.37238099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      </div>

      <div className="res-container">
        {filteredres.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurant/" + restaurants.info.id}
          >
            <FoodCard resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
