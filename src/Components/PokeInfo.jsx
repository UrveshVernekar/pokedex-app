import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function PokeInfo({ data }) {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
          {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" /> */}
          <img src={data.sprites.front_default} alt="" />
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name.charAt(0).toUpperCase() + poke.ability.name.slice(1)}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <h3>
                    {poke.stat.name.toUpperCase()} : {poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default PokeInfo;
