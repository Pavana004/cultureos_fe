import React from 'react'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai"
import { FaPenSquare } from "react-icons/fa"
import { RxEraser } from "react-icons/rx"






const DrawComp = ({ setLineColor,setLineWidth }) => {
    return (
        <div className='footer'>
            <div className='foot-1'>
                <AiOutlineLeftCircle size={30} />
                <AiOutlineRightCircle size={30} />
                <input 
                type='color' 
                className='color' 
                onChange={(e) => {
		        setLineColor(e.target.value)}} 
                />
                <FaPenSquare size={30} />
                <RxEraser size={30} />
            </div>
            <div className='foot-2'>
                <input 
                type='range' 
                name="vol" 
                min="10" 
                max="100" 
                className="ranges"
                onChange={(e) => {
                setLineWidth(e.target.value);
                }} 
                />
                <div className="foot-3">
                    <h6 className='h6_text'>Save</h6>
                    <h6 className='h6_text'>Cancel</h6>
                </div>


            </div>
        </div>
    )
}

export default DrawComp