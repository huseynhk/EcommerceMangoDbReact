import { useState, createContext } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [values, setValues] = useState({
    keyword: "",
    results: [],
  });

  const contextValue = {
    values,
    setValues,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
