import React from 'react'
import { useProductContext } from '../context/ProductContext'


const ProductList = () => {

    const {state , addToCart} = useProductContext()

    console.log(state.products)
  return (
       <div className="w-full flex flex-col mt-10 justify-center items-center mb-10">
       <h1 className="text-white text-4xl font-serif">Medicine List</h1> 
    {
          state.products?.map((product,index)=>{
            return   <div className="bg-white flex w-9/12  rounded-lg p-1 mt-4 items-center">
            <p className=" text-black text-3xl m-2 ">{index+1}.</p>
            <p className="text-black font-serif text-2xl m-2 w-4/12  ">{product.name}</p>
            <p className="text-black font-serif text-2xl m-2 w-4/12 ">{product.description}</p>
            <p className="text-black font-sans font-normal text-2xl m-2 w-3/12 text-left">{product.price} Rs</p>
            {product.quantity > 0 &&<button className=" w-2/12 p-2 ml-5 bg-black text-white font-serif text-lg rounded-lg border-2 border-black hover:bg-white hover:text-black  " onClick={()=>{addToCart(product)}}>Order({product.quantity})</button>}
           </div>
        })
    }
     </div>
  )
}

export default ProductList