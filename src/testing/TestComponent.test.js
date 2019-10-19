import React from "react"
import {render,fireEvent} from "./render";
import TestComponent from "./TestComponent";

let dispatch
beforeEach(()=>{
    dispatch=jest.fn();
})

it("works",()=>{
   const {getByText}= render(<TestComponent/>,{turn:100},dispatch)
   getByText("100")
   const button=getByText("Next");
   fireEvent.click(button);
   expect(dispatch).toHaveBeenCalledWith({type:"TURN"});
   expect(dispatch).toHaveBeenCalledTimes(1);
})

