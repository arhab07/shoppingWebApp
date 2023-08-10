import {  useContext } from "react"
import { ProductContext } from "../../context/products"
import ProductCard from "../../components/product-card/product-card.component"
import "./shop.scss"
const Shop = () => {

    const {products} = useContext(ProductContext)
    return(
      <div className="products-container">
     {products.map((products) =>{
        return(
            <ProductCard key={products.id} products={products} />
        )
     })}
      </div>
    )
  }

  export default Shop