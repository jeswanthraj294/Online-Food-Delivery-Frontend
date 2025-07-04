import ItemList from "./ItemList";

const RestaurantCategory = ({category,showItems,onSetIndex}) => {
    const handleClick=()=>{
        onSetIndex();
    }

    return ( 
        <div className="menu-category mb-4">
        <div
          className="w-full mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>{category.card.card.title} ({category.card.card.itemCards.length})</span>
          <span>⬇️</span>
        </div>
     { showItems && <ItemList category={category} />}
      </div>
     );
}
 
export default RestaurantCategory;