import React from "react";
import {render as tlr,fireEvent} from "@testing-library/react";
import initialGameState from "../store/initialGameState"
import {ContextProvider} from "../store/Store"

export const render = (component, gameState=initialGameState,dispatch=jest.fn())=>{
    return tlr(<ContextProvider value={{gameState,dispatch}}>{component}</ContextProvider>)
}
export {fireEvent}
