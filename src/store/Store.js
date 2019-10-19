import {useContext,createContext} from "react";

const Context=createContext();
const ContextProvider=Context.Provider;

const useStore=()=>useContext(Context)

export {useStore,ContextProvider};