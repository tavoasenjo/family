import { createContext, useState } from "react";
import famData from '../data/data';

const FamilyContext = createContext();

export const FamProvider = ({children}) => {

  // STATE
  const [family] = useState(famData);
  return (
    <FamilyContext.Provider value={{ family }}>
      {children}    
    </FamilyContext.Provider>
  ) 
}

export default FamilyContext;