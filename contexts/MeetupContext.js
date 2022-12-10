import React, { useReducer, useContext } from "react";

import { meetupReducer, INITIAL_STATE } from "./MeetupReducer";

const MeetupContext = React.createContext();

export const MeetupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(meetupReducer, INITIAL_STATE);

  return (
    <MeetupContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MeetupContext.Provider>
  );
};

export const useMeetupContext = () => {
  return useContext(MeetupContext);
};
