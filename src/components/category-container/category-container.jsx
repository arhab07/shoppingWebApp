import CategoryItems from "../category-item/categories-item";

const  CategoryContainer = ({categories}) => {
    return (
      <div className="categories-container">
  
      {categories.map((category)=> {
        return(
            <CategoryItems category={category} key={category.id} />
        )
      }
     ) }
        
      </div>
    );
  }
  
  export default CategoryContainer;
  