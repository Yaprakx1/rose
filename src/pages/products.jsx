import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/productCard';


function Products() {
  const [bookState,setBookState]=useState()
 useEffect(()=>{
  axios.get("http://localhost:3030/books").then((res)=>{setBookState(res.data)})
  
 },[]);
   if(!bookState) return 'yükleniyor...'
  return (
    <div>
      <h3>Ürünlerimiz</h3>
    <div className='cards-conteiner'>
      
      
      {
        bookState.map((book)=><div>
          <ProductCard key={book.id} book={book}/> 
        </div>)
      }
    </div>
    </div>
  )
}

export default Products;
