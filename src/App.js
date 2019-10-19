import React,{useReducer} from 'react';
import { ContextProvider } from './store/Store';
import reducer from "./store/reducer";
import initialData from "./store/initialGameState";
function App() {
  const [gameState,dispatch]=useReducer(reducer,initialData)
  return (
    <ContextProvider value={{dispatch,gameState}}>
     <div className="App">
     </div>
    </ContextProvider>
  );
}

export default App;
