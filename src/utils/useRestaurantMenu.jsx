import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resinfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    // console.log(json)
    setResInfo(json);
  };
  return resinfo;
};

export default useRestaurantMenu;
