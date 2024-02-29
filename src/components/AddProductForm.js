import React, { useState,useEffect} from 'react';
import { useProductContext } from '../context/ProductContext';
import axios from 'axios'

const AddProductForm = () => {
  const {addProduct,state,setProducts} = useProductContext()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });
  const [error,setIsError] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsError(false)
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
         console.log(state)
     useEffect(()=>{

               const fetchProducts = async ()=>{
                try {
                     const data = await axios.get('https://crudcrud.com/api/096fcbacd92f4da297121975a31099d0/products')

                     const response = await data.data
                     setProducts(response)
                }
                catch(error){
                      console.log(error)
                }
               }

               fetchProducts()
           
     },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,description,price,quantity} = formData
    if(name.length === 0 || description.length === 0 || price.length === 0 || quantity.length === 0 ){
          setIsError(true)
          return
    }
    const newProduct = {
      id: Date.now(),
      ...formData,
    };
    try{
      const data = await axios.post('https://crudcrud.com/api/096fcbacd92f4da297121975a31099d0/products',formData)
      addProduct(newProduct);
      setFormData({
        name: '',
        description: '',
        price:'',
        quantity: '',
      });
    }
    catch(error){
          console.log(error)
    }
   
  };

  return (
    <div className="bg-white w-10/12 rounded-lg  mt-10 flex flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className="flex w-full p-2 m-1 items-center">
        <div className="flex flex-col w-2/12">
        <label htmlFor='name' className="m-2 font-serif font-medium text-xl">Medicine Name</label>
        <input type="text"  name='name' value={formData.name} onChange={(e)=>{handleChange(e)}}
        className="border-2 rounded-lg border-black text-lg p-2 m-2 font-sans font-medium"></input> 
        </div>
        <div className="flex flex-col w-2/12 ">
        <label htmlFor='description'  className="m-2 font-serif font-medium text-xl">Description</label>
        <input type="text"  name="description" value={formData.description} onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-sans font-medium"></input>
        </div>
        <div className="flex flex-col w-2/12">
        <label htmlFor='price'  className="m-2 font-serif font-medium text-xl">Price</label>
        <input type="number"  name="price" value={formData.price}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <div className="flex flex-col w-2/12">
        <label htmlFor='quantity'  className="m-2 font-serif font-medium text-xl">Available Quantity </label>
        <input type="number"  name="quantity" value={formData.small}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
      
        <button type="submit" className="bg-black text-white font-serif p-3 m-2 text-xl ml-10 items-center h-fit  border-2 rounded-lg hover:bg-white hover:text-black hover:border-black">Add Product</button>
    </form>
    {error && <p className="font-serif font-medium text-red-700 text-3xl">Please enter the correct details</p>}
</div>
  );
};

export default AddProductForm;
