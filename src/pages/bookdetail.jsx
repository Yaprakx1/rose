import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

function Bookdetail() {
    const params =useParams()
    const[bookData,setBookData]=useState(null)
    useEffect(()=>{
    axios.get(`http://localhost:3030/books/${params.bookId}`).then((res)=>setBookData(res.data))

    },[])

    if(!bookData) return 'yükleniyor...'
  return (
    <div className='detail-page'>
        <div className='book-detail'>
            <img src={bookData.image}alt="" />
            <div className='right'>
            <h1>{bookData.title}</h1>
            <h3>{bookData.author}</h3>
            <p>{bookData.year}</p>
            <p>Açıklama:{bookData.description}</p>
            </div>
           
        </div>
      
    </div>
  )
}

export default Bookdetail;
