import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withRestaurantCardPromoted } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {setUserName}=useContext(UserContext);
  console.log("raj", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardPromoted = withRestaurantCardPromoted(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const filterByRating = () => {
    const filteredRest = listOfRestaurants.filter(
      (filteredRes) => filteredRes.info.avgRating > 4.5
    );
    setFilteredRestaurants(filteredRest);
  };

  const filterBySearch = () => {
    const filteredRest = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRest);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>"Looks Like You're Offline. Please check your internet connection."</h1>
    );

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 bg-green-100 m-4" onClick={filterBySearch}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterByRating}>
          Top Rated Restaurants
        </button>
        <label>Username: </label>
        <input className="border border-black p-2" onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res, index) => (
          res.info.avgRating === 4.5 ? (
            <RestaurantCardPromoted key={res.info.id} resData={res.info} />
          ) : (
            <RestaurantCard key={res.info.id} resData={res.info} />
          )
        ))}
      </div>
    </div>
  );
};

export default Body;
