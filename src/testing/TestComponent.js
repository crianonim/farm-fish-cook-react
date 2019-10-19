import React from "react";
import { useStore } from "../store/Store";

export default ()=>{
    const {gameState,dispatch}=useStore();
    return (<div>
        {gameState.turn}
        <button onClick={()=>dispatch({type:"TURN"})}>Next</button>
    </div>)
}