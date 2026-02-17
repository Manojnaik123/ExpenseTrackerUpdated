"use client";

import { createContext, useContext, useState } from "react";

const TopMessageContext = createContext();

export const TopMessageProvider = ({ children }) => {
  const [topMessage, setTopMessage] = useState(null);

  const showMessage = (typeId, message) => {
    setTopMessage({
      typeId,
      message,
      id: Date.now(), // 🔥 forces re-trigger even if same message
    });
  };

  return (
    <TopMessageContext.Provider value={{ topMessage, showMessage }}>
      {children}
    </TopMessageContext.Provider>
  );
};

export const useTopMessage = () => useContext(TopMessageContext);