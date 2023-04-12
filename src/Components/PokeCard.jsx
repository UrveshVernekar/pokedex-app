import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function PokeCard({ pokemon, loading, infoPokemon }) {
  const theme = useTheme();

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              {/* <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
              </div> */}
              <div
                // className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <Card sx={{ display: "flex", backgroundColor: "#e69b70" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5" sx={{ fontWeight: '800' }}>
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: '600' }}
                      >
                        {item.id}
                      </Typography>
                    </CardContent>
                    {/* <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton aria-label="previous">
                      {theme.direction === "rtl" ? (
                        <SkipNextIcon />
                      ) : (
                        <SkipPreviousIcon />
                      )}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                      {theme.direction === "rtl" ? (
                        <SkipPreviousIcon />
                      ) : (
                        <SkipNextIcon />
                      )}
                    </IconButton>
                  </Box> */}
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={item.sprites.front_default}
                    alt="Live from space album cover"
                  />
                </Card>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default PokeCard;
