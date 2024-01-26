import { useState } from "react";
import resLists from "../utils/mockdata";
import FoodCard from "./Foodcard";

const Body = () => {

  const [listofres,setListOfRes] = useState(resLists);
  
  return (
    <div className="body">
      <div className="search">
        {/* <input type="text" placeholder="Search for food and resturants"></input> */}
        <button onClick={()=>{
          const filterRes = listofres.filter((res)=>
            res.info.avgRating > 4
          );

          setListOfRes(filterRes);

        }}
          
        >
          Filter With Highest Rating
        </button>
      </div>

      <div className="res-container">
        {listofres.map((info, index) => (
          <FoodCard key={index} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
