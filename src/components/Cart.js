import React,{useState} from 'react'
import { useProductContext } from '../context/ProductContext'
import { FaShoppingCart } from "react-icons/fa";
import Modal from 'react-modal'
const Cart = () => {

    const {state,order,cancelOrder} =  useProductContext()
     const [isModalOpen,setIsModalOpen] = useState(false)

     const openModal = ()=>{
        setIsModalOpen(true)
     }

     const closeModal = ()=>{
          setIsModalOpen(false)
     }

     

  return (
      <>
      <button onClick={openModal} className="text-5xl mt-8 mr-10 pr-2 pl-2 pt-1 pb-1 rounded-full bg-black  text-white items-center justify-center  flex">
        <FaShoppingCart /> <span className="mb-8 text-2xl font-bold">{state.cart.length}</span>
      </button>
      <Modal isOpen={isModalOpen}   className="flex  justify-center items-center h-screen w-full">
      <div className="bg-black rounded-lg w-3/6 h-5/6  flex flex-col  items-center no-scrollbar ">
         <div className="flex justify-between w-full p-4">
    <h1 className="text-white text-4xl m-4 font-normal font-serif ">Cart Items</h1>
    <button className="text-white" onClick={()=>closeModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          </div>
           <div className="flex w-full bg-white text-black ">
                     <p className="w-2/12 text-[27px] font-sans font-normal ml-2 ">Sl.No</p>
                    <p className=" w-3/12 text-[27px] font-serif font-normal ">Name</p>
                    <p className=" w-2/12 text-[27px] font-serif font-normal">Price</p>
                    <p className="w-2/12 text-[27px] font-serif font-normal ">Quantity</p>
           </div>
          <div className="w-full h-full overflow-hidden overflow-y-auto p-2 no-scrollbar">
              {
                state.cart.map((product,index)=>{
                    return  <div key={index} className="flex items-center mt-5">
                    <p className="text-white w-2/12 text-[27px] font-sans font-normal  ">{index+1}.</p>
                    <p className="text-white w-3/12 text-[27px] font-serif font-normal ">{product.name}</p>
                    <p className="text-white w-2/12 text-[27px] font-sans font-normal text-center ">{product.price}</p>
                    <p className="text-white w-2/12 text-[27px] font-serif font-normal text-center ">{product.quantity}</p>

                </div>
                })
              }
          </div>
          <div className="text-3xl  bg-white w-full h-18 p-2 flex justify-between pl-10 pr-16">
          <p className=" font-serif text-left ">Total Cost of the products </p>
          <p classname="font-sans font-extrabold">{state.totalPrice} Rs</p>
          </div>
          <hr></hr>
           <div className="text-2xl font-serif pt-5 bg-black w-full rounded-b-lg h-18 p-2 flex justify-center gap-10">
            <button className="p-1 border-2 text-white border-white rounded-lg hover:bg-white hover:text-black" onClick={()=>{order();closeModal()}}>Order Now</button>
            <button className="p-1 border-2 text-white border-white rounded-lg hover:bg-white hover:text-black" onClick={()=>{cancelOrder();closeModal()}}>Cancel Order</button>
           </div>
    </div>
      </Modal>
      </>
  )
}

export default Cart
