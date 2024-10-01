import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

import React from 'react'

const GamesProvider = ({children}) => {
  const [games, setGames] = useState([]);

  useEffect(() => {

  }, [])


  return (
    <GameContext.Provider value = {{games, setGames}}>
      {children}
    </GameContext.Provider>
  )
}

export default GamesProvider