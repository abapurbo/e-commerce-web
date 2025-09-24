import React from 'react'
import Banner from '../components/Banner/Banner'
import ProductCard from '../features/products/productCard'

function Home() {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

       <div>
        <ProductCard></ProductCard>
       </div>
    </div>
  )
}

export default Home