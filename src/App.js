// App.js

import React,{useEffect} from 'react';
import AddProductForm from './components/AddProductForm'
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {

  // useEffect(()=>{

  // })

  return (
      <div className="bg-black w-full min-h-screen flex flex-col  items-center ">
        <div className="flex justify-center items-center gap-20  ">
        <h1 className='bg-white border-2 border-black font-serif p-2 rounded-lg text-3xl mt-10'>Medicine Shop</h1>
        <Cart />
        </div>
       <div className="w-full flex justify-center items-center">
       <AddProductForm />
       </div>
       <div className="w-full ">
       <ProductList />
       </div>
      </div>
  );
};

export default App;


