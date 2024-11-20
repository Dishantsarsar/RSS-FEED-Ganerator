"use client";
import React from "react";

export const ContentContext = React.createContext();

const initialState = { content: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, content: action.payload };
    case "REMOVE_DATA":
      return { ...state, content: "" };
    case "SET_BLOG":
      return { ...state, content: action.payload };
    case "SET_TWEET":
      return { ...state, content: action.payload };
    case "SET_LINKEDIN_POST":
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export const ContentProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ContentContext.Provider value={{ state, dispatch }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useMyContext = () => React.useContext(ContentContext);
