import React, { useState } from 'react'
import '../App.css';
import Sidebar from '../components/sidebar';
import { BsArrowLeftCircle } from "react-icons/bs"
import { HiChevronRight, HiOutlineInformationCircle } from "react-icons/hi"
import { TfiCommentAlt } from "react-icons/tfi"
import { MdDraw } from "react-icons/md"
import { VscSaveAll } from "react-icons/vsc"
import CommentsComp from '../components/CommentsComp';
import Canvas from '../components/CanvasComp';




const Home = () => {


const[showCom,setShowCom]=useState(true);


  
  return (
    <>
      <Sidebar />
      <div className='navbar'>
        <div className='page '>
          <div className='page-items'>
            <BsArrowLeftCircle size={23} /><span className='pa p-2'>Paper 1 <HiChevronRight /> Page 1</span>
          </div>
          <div className='page-icons p-2 '>
            <TfiCommentAlt size={25} 
            onClick={()=>setShowCom((prev)=>!prev)} 
            className="comment"
            />
            <MdDraw size={25}   
            className="comment" />
            <VscSaveAll size={25}  className="comment"/>
            <HiOutlineInformationCircle size={25}  className="comment" />
          </div>
        </div>
      </div>
      <Canvas/> 
      <div>
      {showCom === true ? <CommentsComp/>  : null}
      </div>
     
     
    </>

  )
}

export default Home