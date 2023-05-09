import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductCard({book}) {
  const navigate =useNavigate();
 const  handleClick=()=>{
    navigate(`/books/${book.id}`);
   };

    
  return (
    <div className='card' onClick={handleClick}>
        <img src={book.image} alt="" />

        <h1>  {book.title}</h1>
        <p>{book.author}</p>
    
    </div>
  )
}

export default ProductCard;
