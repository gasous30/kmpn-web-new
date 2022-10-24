import React, { createContext, ReactNode } from "react";

const defaultState = {
  wordpressLink: "https://kmpn.ae.itb.ac.id",
};

export const WPContext = createContext(defaultState);

export const WPProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WPContext.Provider value={{ wordpressLink: "https://kmpn.ae.itb.ac.id" }}>
      {" "}
      {children}
    </WPContext.Provider>
  );
};
