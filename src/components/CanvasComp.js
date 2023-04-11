import { useEffect, useRef, useState } from "react";
import DrawComp from "./DrawComp";
import {RxCrossCircled} from "react-icons/rx"
import {IoMdCheckmarkCircleOutline} from "react-icons/io"
import axios from "axios"


const comData = {
	usercomments : ""
}


function Canvas() {
	const canvasRef = useRef(null);
	const ctxRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [lineWidth, setLineWidth] = useState(5);
	const [lineColor, setLineColor] = useState("black");
	const [data,setData] =useState(comData);
	
	


// draw	

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.strokeStyle = lineColor;
		ctx.lineWidth = lineWidth;
		ctxRef.current = ctx;
	}, [lineColor, lineWidth]);


	const startDrawing = (e) => {
		ctxRef.current.beginPath();
		ctxRef.current.moveTo(
			e.nativeEvent.offsetX,
			e.nativeEvent.offsetY
		);
		setIsDrawing(true);
	};

	const endDrawing = () => {
		ctxRef.current.closePath();
		setIsDrawing(false);
	};

	const draw = (e) => {
		if (!isDrawing) {
			return;
		}
		ctxRef.current.lineTo(
			e.nativeEvent.offsetX,
			e.nativeEvent.offsetY
		);

		ctxRef.current.stroke();
	};


// postdata

    const handleChange = ({target:{name,value}})=>{
		setData({...data,[name]:value})

	}
 
	const handlesubmit = async (evt)=>{
		evt.preventDefault();
		try {
			  const url= "http://localhost:5000/api/commets";
			  await axios.post(url,data);
			  setData(comData)
   
		   
		} catch (error) {
		    console.log(error)
		   
		}
	   
   }




	return (
		<div className="App">
			<div className="draw-area">
				<DrawComp
					setLineColor={setLineColor}
					setLineWidth={setLineWidth}
				/>
				<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered ">
						<div className="modal-content">
							<div className="modal-header bg-black">
								<h1 className="modal-title fs-5" id="exampleModalLabel">WRITE REMARK</h1>
								<input type="text" 
								className="form-control" 
								name="usercomments"								
                                onChange={handleChange}
								value={data.comments}
								/> 
								<IoMdCheckmarkCircleOutline className="save" size={60} onClick={handlesubmit}/>
								<br/>
								<RxCrossCircled  data-bs-dismiss="modal" size={60} className="close"/>								
							</div>
						</div>
					</div>
				</div>
				<canvas
					onMouseDown={startDrawing}
					onMouseUp={endDrawing}
					onMouseMove={draw}
					ref={canvasRef}
					width={`1280px`}
					height={`720px`}
					className="canvas_1"
					data-bs-toggle="modal" data-bs-target="#exampleModal"
				/>
			</div>
		</div>
	);
}

export default Canvas;
