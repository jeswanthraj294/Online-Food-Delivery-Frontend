import { useState, useEffect } from "react";
const useRestauarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    if (!resId) return;
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`
    );
    const json = await data.json();
    console.log(json.data)
    setResInfo(json.data);
  };

  return resInfo;
};
export default useRestauarantMenu;
