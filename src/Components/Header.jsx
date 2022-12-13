import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"

const Header = () => {

  const { cartitem } = useSelector(state=>state.first)


  return (
    
    <div className='bg-gray-800 px-6 text-white text-lg font-medium py-3 flex justify-between items-center'>
        <Link to='/' className='bg-orange-500 hover:bg-orange-400  py-2 px-4 uppercase font-medium rounded-lg' >Home</Link>
        <Link to='/cart' className='bg-orange-500  hover:bg-orange-400 py-2 px-4 uppercase font-medium rounded-lg relative'> Cart 
        <span className='w-[20px] h-[20px] rounded-full bg-white flex justify-center items-center font-bold text-md top-[-5px] right-[-9px] absolute text-black' >{cartitem.length}</span>
        </Link>
        
    </div>
  )
}

export default Header