import { createContext, useContext, useReducer } from "react";

const Context = createContext({});

export const useContextValue = () => useContext(Context);

const ContextProvider = ({ reducer, initialstate, children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const values = { state, dispatch };
  return (
    <>
      <Context.Provider value={values}>{children}</Context.Provider>
    </>
  );
};
export default ContextProvider;
