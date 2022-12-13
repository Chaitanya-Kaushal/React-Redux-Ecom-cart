import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {
  const {cartitem,subTotal,shipping,tax,total}= useSelector(state=>state.first);
  
  const dispatch = useDispatch();

  const increment=(id)=>{
    dispatch({type:"addToCart", payload:{id}})
    dispatch({type:"calculateTotal"})

  }
  const decrement=(id)=>{
    dispatch({type:"decrement", payload:id})
    dispatch({type:"calculateTotal"})
  }
  const remove=(id)=>{
    dispatch({type:"removeFromCart", payload:id})
    dispatch({type:"calculateTotal"})
  }

  

  return (
    <>

<div className="w-full h-screen grid grid-cols-1 md:grid-cols-[2fr,1fr]  ">
     <div className=" flex flex-col items-center h-full gap-4  w-[90%] mx-auto " >
        
        { cartitem.length > 0 ? (
          cartitem.map(({name,price,imgSrc,id,quantity},index)=>(
           
            <div key={index} className=' flex lg:flex-row flex-col md:px-4 p-6 md:w-[90%]  justify-between items-start lg:items-center  shadow-2xl px-4'>
              <div className="text-center flex flex-col lg:flex-row items-center">
                  <img src={imgSrc} className='w-[200px] h-[200px] object-center' alt="item" />
                  <div>
                  <h2 className="text-xl font-semibold p-2">{name}</h2>
                  <h2 className="text-md font-medium">₹{price}</h2>
                  </div>
              </div>
              <div className='gap-3 flex mt-4 md:flex-row items-center'>
              <button onClick={()=>increment(id)}  className="bg-orange-500 px-2 font-bold text-lg py-2 rounded-lg hover:bg-orange-400 ">+</button>
              <h2>{quantity}</h2>
              <button onClick={()=>decrement(id)} className="bg-orange-500 px-2 font-bold text-xl py-2 rounded-lg hover:bg-orange-400 ">-</button>
              <button onClick={()=>remove(id)} className="bg-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 ">Remove</button>
              </div>
              
            </div>
          )

          )):( <h2 className='text-3xl my-10 md:my-[30%] font-bold text-orange-600'> Your Cart is Empty</h2> )
        }
     </div>
     <div className='w-full h-screen sticky p-8 md:pr-24 flex flex-col md:justify-center items-end font-bold bg-gray-800 text-white rounded-l-xl m-2'>
      <h2>Subtotal:-₹{subTotal}</h2>
      <h2>Shipping:- ₹{shipping}</h2>
      <h2 className='border-b-2 '>Tax:-₹{tax}</h2>
      <h2>Total:- ₹{total}</h2>
     </div>
    </div>
    </>
  )
}

export default Cart