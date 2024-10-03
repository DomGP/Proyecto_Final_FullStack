import React, { useContext } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import { GameContext } from "../context/GameContext";
const HomePage = () => {
  const { games } = useContext(GameContext);

  return (
    <div>
      <div className="banner py-5">
        <Banner />
      </div>
      <div className="cardGame">
        <Carousel productos={games} />
      </div>
    </div>
  );
};

export default HomePage;
