import React,{useReducer, useEffect} from 'react';
import { ContextProvider } from './store/Store';
import reducer from "./store/reducer";
import initialData from "./store/initialGameState";
import AnimatedInteger from './components/AnimatedInteger';
import AnimatedIntegerTester from './components/AnimatedIntegerTester';
import {getEntity} from "./store/game-logic/turn"
function App() {
  const [gameState,dispatch]=useReducer(reducer,initialData)
  // useEffect(()=>{
  //   setInterval(()=>{dispatch({type:"TURN",payload:Math.floor(Math.random()*100-50)})},2000)
  // },[])
  return (
    <ContextProvider value={{dispatch,gameState}}>
     <div className="App">
       <AnimatedInteger number={gameState.turn} changeColor={true} showDelta={true} />
       <button onClick={()=>dispatch({type:"TURN"})}>Turn 1</button>
    
       <button onClick={()=>dispatch({type:"TURN",payload:100})}>Turn 100</button>
       <AnimatedIntegerTester />
       
       <span>Energy: <AnimatedInteger number={getEntity(gameState,'player').stats.energy[0]} changeColor={true} showDelta={true}/> </span>
       <span>Hp: <AnimatedInteger number={getEntity(gameState,'player').stats.hp[0]} changeColor={true} showDelta={true}/> </span>
       <div>Satiety: <AnimatedInteger number={getEntity(gameState,'player').stats.satiety[0]} changeColor={true} showDelta={true}/> </div>
       
       <button onClick={()=>dispatch({type:"TIRE_PLAYER"})}>Tire</button>
       <button onClick={()=>dispatch({type:"EAT"})}>Eat</button>

     </div>
    </ContextProvider>
  );
}

export default App;
