import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const Home = () => {
  const productList = [
    {name: "Head phone",price: 1200,imgSrc: img1,id: "asdhajsdbhjabhsjdfsdfv"},
    {name: "Watch",price: 4900,imgSrc: img2,id: "sdjfdlaajsdbhjahgbhsjdfdfv"},
    {name: "OnePlus",price: 31000,imgSrc: img3,id: "sdjfdlaajsdbhsjdfdfv"},
    {name: "Shoes",price: 800,imgSrc: img4,id: "sdjfdlaajsdbhsjdvbnjfdfv"},
    {name: "I-pad",price: 26000,imgSrc: img5,id: "sdjfdlaajsdbhwrebsjdfdfv"},
    {name: "Shirt",price: 2000,imgSrc: img6,id: "sdjfdlaajsdbsadhsjdfdfv"},
    {name: "Watch",price: 4900,imgSrc: img2,id: "sdjfdlaajsdbhjahgbhsjdfdfv"},
    {name: "Shoes",price: 800,imgSrc: img4,id: "sdjfdlaajsdbhsjdvbnjfdfv"},
    {name: "I-pad",price: 26000,imgSrc: img5,id: "sdjfdlaajsdbhwrebsjdfdfv"},
    {name: "Shirt",price: 2000,imgSrc: img6,id: "sdjfdlaajsdbsadhsjdfdfv"},

  ];

  const dispatch = useDispatch();

  const addToCartHandler=(data)=>{
     dispatch(
      {
        type:"addToCart",
        payload: data
      })
      dispatch({type:"calculateTotal"})
     toast.success('Item Added')
     
    
  }



  return (
    <div className="w-full h-screen  ">
     <div className=" flex  items-center h-full gap-4 flex-wrap w-[90%] mx-auto my-10 " >
        {
          productList.map(({name,price,imgSrc,id},index)=>(
           
            <div key={index} className=' flex flex-col justify-center items-center shadow-2xl p-2'>
              <div className="text-center">
                  <img src={imgSrc} className='w-[200px] h-[200px] object-center' alt="item" />
                  <h2 className="text-xl font-semibold">{name}</h2>
                  <h2 className="text-md font-medium p-2">₹{price}</h2>
              </div>
              <button onClick={()=>{addToCartHandler({name,price,id,quantity:1,imgSrc})}} className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-400 ">Add to Cart</button>
              
            </div>
          )

          )
        }
     </div>
    </div>
  );
};

export default Home;
