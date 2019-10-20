import React, { useState, useRef } from "react";
import AnimatedNumber from "./AnimatedInteger";

export default ()=>{
    const[value,setValue]=useState(100);
    const inp=useRef()
    return (<div>
        <AnimatedNumber number={value} time={1000} shake={true} changeColor={true} showDelta={true}/>
        <input ref={inp} />
        <button onClick={()=>setValue(Number(inp.current.value))}>Press</button>
    </div>)
}