import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
    const {resData}=props;
    const {name,cuisines,costForTwo,avgRating,id}=resData
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + resData.cloudinaryImageId}
          alt="Meghana Foods"
        />
        <div className="res-details">
          <h3>{name}</h3>
          <p className="cuisine">{cuisines.join(", ")}</p>
          <span className="cost">{costForTwo}</span>
          <div className="rating-time">
            <span className="rating">{avgRating} stars</span>
            <span className="delivery-time">10 minutes</span>
          </div>
          <Link to={"/restaurants/"+id}><button className="order-now">Order Now</button></Link>
        </div>
      </div>
    );
  };
 export const withRestaurantCardPromoted=(RestaurantCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }
  export default RestaurantCard;