import Globe from "react-globe.gl";
import React from "react";
import * as d3 from "d3";
import { useState, useMemo, useEffect } from "react";
import * as ReactDOMServer from "react-dom/server";
import { country_data } from "../utils/data/coutries.js";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { typography } from "@mui/system";

function PolygonLabel({ properties: d }) {
  let lbl = (
    <p className="text-slate-100 bg-gray-700 bg-opacity-60 rounded-sm p-1">{`${d.ADMIN} (${d.ISO_A2})`}</p>
  );
  return ReactDOMServer.renderToStaticMarkup(lbl);
}

function MusicGlobe() {
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();
  const [clickD, setClickD] = useState();

  useEffect(() => {
    // load data
    setCountries(country_data);
  }, []);

  const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);

  // GDP per capita (avoiding countries with small pop)
  const getVal = (feat) =>
    feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

  const maxVal = useMemo(
    () => Math.max(...countries.features.map(getVal)),
    [countries]
  );
  colorScale.domain([0, maxVal]);
  // ===================
  // music card contents
  // ===================
  const card = (
    <React.Fragment>
      <CardContent>
        {clickD ? (
          <Typography variant="h5">{clickD.properties.ADMIN} </Typography>
        ) : (
          <Typography variant="h5">
            {"I will show trending music in every country, just select one!"}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Listen on Spotify
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <>
      <Card className="bg-slate-100 bg-opacity-50 z-10" variant="outlined">
        {card}
      </Card>
      <Globe
        className="z-0"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        polygonsData={countries.features.filter(
          // exclude antartica
          (d) => d.properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
        polygonCapColor={(d) =>
          d === hoverD ? "steelblue" : colorScale(getVal(d))
        }
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonStrokeColor={() => "#111"}
        polygonLabel={PolygonLabel}
        onPolygonHover={setHoverD}
        onPolygonClick={setClickD}
        polygonsTransitionDuration={300}
      />
    </>
  );
}
export default MusicGlobe;
