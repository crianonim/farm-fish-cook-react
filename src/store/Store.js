import {useContext,createContext} from "react";

const Context=createContext();
const ContextProvider=Context.Provider;

const useStore=()=>useContext(ContextProvider)

export {useStore,ContextProvider};