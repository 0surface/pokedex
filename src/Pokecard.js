import React from "react";
const BASE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = (props) => {
  let _id = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${props.imgId}.png`;
  return (
    <div className="Pokecard">
      <div>{props.imgId}</div>
      <div className="Pokecard-title">{props.name}</div>
      <div className="Pokecard-image">
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${props.imgId}.png`} alt={props.name}></img>
      </div>
      <div className="Pokecard-data">Type:{props.type}</div>
      <div className="Pokecard-data">EXP:{props.base_experience}</div>
    </div>
  );
};

export default Pokecard;
