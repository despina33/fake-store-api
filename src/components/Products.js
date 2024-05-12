import React from 'react'
import '../App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Products = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    
    axios ({
      method: "GET",
      url: "https://fakestoreapi.com/products"
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(e => console.log(e))
    
  }, [])


  return (
    <div className='products-container'>
      

      {data.map((product) => (
        <div key={product.id} className='card'>
          <div><img src={product.image} alt="#" /></div>
          <div className='card-description'>
            <h6>{product.title}</h6>
            <h6>{`Price: $${product.price}`}</h6>
            <h6>{`Description: ${product.description.length > 20 ? product.description.substring(0, 50).concat("...") : product.description}`}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;