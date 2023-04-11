import React, { useEffect, useState } from 'react'
import axios from "axios"


const CommentsComp = () => {


    const time = new Date().toLocaleTimeString();
    const [pin, setPin] = useState([]);


    const json = [
        {
            id: "1",
            name: "box1"
        },
        {
            id: "2",
            name: "box2"
        },
        {
            id: "3",
            name: "box3"
        },
        {
            id: "4",
            name: "box4"
        },
        {
            id: "5",
            name: "box5"
        }
    ]

    //getdata   

    const getPinData = async () => {

        try {

            const resData = await axios.get("http://localhost:5000/api/commetsget")
            console.log(resData);
            setPin(resData.data)


        } catch (error) {

            console.log(error)
        }


    }

    useEffect(() => {
        getPinData()
    }, [])


    return (
        <>
            <div className="pinsData">
                {pin.map((res, key) => {
                    return (
                        <>
                            <div className="splitdata">
                               <div className="textshow">
                               <h6 className="pinsHover" key={key.id}>{res.usercomments}</h6><span>AK</span>
                               </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className='box' >
                {
                    json.map((x, key) => {
                        return (
                            <div className='foot-5 btn ' data-bs-toggle="modal" data-bs-target="#exampleModal" key={key.id}>
                                <h6 className='time'>{time}</h6>

                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}

export default CommentsComp