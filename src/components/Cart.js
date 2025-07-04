import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
const dispatch=useDispatch();
const handleClearCart=()=>{ 
    dispatch(clearCart());
}
  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
            >
              <div className="flex items-center">
                {item.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.imageId}`}
                    alt={item.name}
                    className="item-image w-16 h-16 object-cover rounded"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm font-medium text-green-600">
                    {item.isVeg ? "Veg" : "Non-Veg"}
                  </p>
                  <p className="text-sm text-yellow-600">
                    {item.ratings.aggregatedRating.rating} ⭐ (
                    {item.ratings.aggregatedRating.ratingCount})
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">
                  ₹{(item.price / 100).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
