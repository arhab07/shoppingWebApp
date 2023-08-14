import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import "./category-preview.styles.scss"
const CategoryPreview = ({title1 , product3}) => {
  return (
        <div className='category-preview-container '>
            <h2><Link className='title' to={title1}>{title1.toUpperCase()}</Link></h2>
            <div className='preview'>
                {product3.filter((_,idx) => idx < 4) 
                .map((product)=> {
                    return(
                        <ProductCard key={product.id} products={product} />
                    )
                })
                 }
            </div>
        </div>

  )
}

export default CategoryPreview