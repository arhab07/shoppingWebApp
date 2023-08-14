import {  useContext  , Fragment} from "react"
import { CategoriesContext } from "../../context/products"
import CategoryPreview from "../../components/category-preview/category-preview.component"

const CategoriesPreview = () => {

    const {categoriesMap} = useContext(CategoriesContext)
    return(
      <>

        {
          Object.keys(categoriesMap).map((title) => {
            const product = categoriesMap[title]
            return(
              <CategoryPreview key={title} title1={title} product3={product} />
            )
          }
          )
        }
      
      </>
    )
  }

  export default CategoriesPreview