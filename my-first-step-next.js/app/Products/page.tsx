import React, { useEffect, useState } from 'react'



// interface Product {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     image: string;
//   }

const page = () => {
    const [data, setData] = useState();
    
  useEffect(() => {
    // Fetching API For Products Data
    const data= fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => {
            setData(res.data);
        })
        
        .catch((err) => {
            console.log(err);
        });
}, []);


  return (
    <>
    <h1>page</h1>
    </>
  )
}

export default page