import React from 'react'
import '../App.css';
import { Link } from "react-router-dom"
import { BiHome } from "react-icons/bi"
import { MdOutlineNoteAdd, MdOutlineEventNote } from "react-icons/md"
import { TbReportMoney } from "react-icons/tb"
import { GrNotes } from "react-icons/gr"
import { AiOutlineHistory } from "react-icons/ai"
import {RxExit} from "react-icons/rx"


const Sidebar = () => {
    return (
        <div>
            <div className='empty'></div>
            <div className='sidebar'>
                <div className='list'>
                    <div>
                        <BiHome size={20} /><span> <Link className='textlist' to="/">Home</Link></span>

                        <hr />
                    </div>
                    <Link className='textlist' to="/">  <MdOutlineNoteAdd size={20} /> My Papers</Link>
                    <Link className='textlist' to="/">  <TbReportMoney size={20} /> Evaluation</Link>
                    <Link className='textlist' to="/">  <MdOutlineEventNote size={20} /> Re-evalution</Link>
                    <Link className='textlist' to="/">   <GrNotes size={20} /> Reports</Link>
                    <Link className='textlist' to="/">   <AiOutlineHistory size={20} />History</Link>

                </div>
                <div className='user'>
                    <h5>AK</h5>
                </div>
                <RxExit size={25} className='exit' />
            </div>
        </div>
    )
}

export default Sidebar