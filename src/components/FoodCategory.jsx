import React, { useState } from "react";
import FoodLists from "./FoodLists";

const FoodCategory = ({ data, index, showItems ,setExpandItems }) => {
  const onClickHandler = () => {
   setExpandItems();
   
  };

 

  return (
    <div className="my-3">
      <div className="bg-slate-200 py-2 px-5 rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={onClickHandler}>
          <span className="text-lg font-bold mb-3">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>❣️</span>
        </div>
        
        {showItems && <FoodLists items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default FoodCategory;
