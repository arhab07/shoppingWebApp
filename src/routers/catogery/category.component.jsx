import React , {useContext , useState , useEffect} from 'react'
import { CategoriesContext } from '../../context/products'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'

const Category = () => {
    const { category } = useParams()
    const {categoriesMap} =  useContext(CategoriesContext)
    console.log("1",categoriesMap)
    console.log("2",category)
    const [product , setProduct] = useState(categoriesMap[category])
    console.log("3" , product)
    useEffect(()=>{
        setProduct(categoriesMap[category])
    },[category,categoriesMap])
  return (
    <>

    <h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
      {product &&
        product.map((product) => (
          <ProductCard key={product.id}  products={product} />
        ))}
    </div>
    </>
  )
}

export default Category