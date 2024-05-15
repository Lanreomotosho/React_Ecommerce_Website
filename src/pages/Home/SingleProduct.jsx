import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export const SingleProduct = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([])
    // console.log(id)
    useEffect(() =>  {
        const fetchData = async () => {
          try{
            const response = await fetch("/products.json");
            const data = await response.json();
            const product = data.filter((p) => p.id == id);
           console.log(product)
           setProducts(product[0])
          setFilteredItems(data)
          } catch (error) {
            console.log("Error fetching data:", error)
          }
        }

        fetchData();
    }, [id])

    const {title, category, price, images, status} = products;
    
  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div className='p-3 max-w-7x1 m-auto'>
            <div className='mt-6 sm:mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                    <div>
                        <img src={images} alt="" className='w-full'/>
                    </div>

                    {/* product details */}
                    <div>
                        <h1 className='title'>{title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default SingleProduct
