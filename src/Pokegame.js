import React from "react";
import utils from "./utils";
import Pokedex from "./Pokedex";
import data from "./Pokedata";

const Pokegame = () => {
  let [deck1, deck2] = utils.split(utils.shuffle(data));
  let exp1 = utils.getExp(deck1);
  let exp2 = utils.getExp(deck2);

  return (
    <div className="Pokegame">
      <Pokedex key={1} pokemon={deck1} deck={"A"} totalExp={exp1} isWinner={exp1 > exp2} />
      <Pokedex key={2} pokemon={deck2} deck={"B"} totalExp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
};

export default Pokegame;
