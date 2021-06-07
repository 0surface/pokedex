import React from "react";

const PokedexScore = (props) => {
  return (
    <>
      <div className="Pokedex-score">
        {props.isWinner ? <p className="Pokedex-winner">THIS HAND WINS!</p> : <p className="Pokedex-loser">THIS HAND LOST!</p>}
      </div>
    </>
  );
};
export default PokedexScore;
