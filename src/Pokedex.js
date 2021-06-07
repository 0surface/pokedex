import React from "react";
import Pokecard from "./Pokecard";
import PokedexScore from "./PokedexScore";

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokedex = (props) => {
  return (
    <div>
      <br />
      <div className="Pokedex">
        <h4 className="Pokedex-expereince">Total Experience = {props.totalExp}</h4>
        <div className="Pokedex-cards">
          {props.pokemon.map((p) => (
            <Pokecard
              key={p.id}
              imgId={padToThree(p.id)}
              name={p.name}
              type={p.type}
              // imgSrcUrl={imgSrcUrl}
              base_experience={p.base_experience}
            />
          ))}
        </div>
        <PokedexScore isWinner={props.isWinner} />
      </div>
    </div>
  );
};

export default Pokedex;
