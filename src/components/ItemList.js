import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({category}) => {
  const dispatch=useDispatch();
  const handleAddItemToCart=(item)=>{
dispatch(addItem(item));
  }
    return ( 
        <div>
            {true && (
          <ul className="item-list mt-2">
            {category.card.card.itemCards.map((item) => (
              <li key={item.card.info.id} className="menu-item flex justify-between items-center py-2 border-b">
                <div className="item-details">
                  <h3 className="item-name text-lg font-medium">{item.card.info.name}</h3>
                  <p className="item-price text-gray-700">
                    ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                  </p>
                  <p className="item-description text-gray-500">{item.card.info.description}</p>
                  <button
                    className="add-button bg-blue-500 text-white px-3 py-1 mt-2 rounded hover:bg-blue-600"
                    onClick={() => handleAddItemToCart(item.card.info)}
                  >
                    Add
                  </button>
                </div>
                {item.card.info.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                    alt={item.card.info.name}
                    className="item-image w-16 h-16 object-cover rounded"
                  />
                )}
              </li>
            ))}
          </ul>
        )}
        </div>
     );
}
 
export default ItemList;