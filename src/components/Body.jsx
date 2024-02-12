import { useEffect, useState } from "react";
import FoodCard from "./Foodcard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofres, setListOfRes] = useState([]);
  const [filteredres, setfilteredres] = useState([]);
  const [searchfood, setSearchFood] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6992244&lng=88.3788627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
   
    //optional Chaining
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredres(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name)
    // console.log(listofres);

  };


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
              res?.info?.name
                ?.toLowerCase()
                .includes(searchfood.toLowerCase())

                
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
          <FoodCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
