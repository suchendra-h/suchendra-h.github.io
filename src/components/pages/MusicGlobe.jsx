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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { typography } from "@mui/system";

function PolygonLabel({ properties: d }) {
  let lbl = (
    <p className="text-slate-100 bg-gray-700 bg-opacity-60 rounded-sm p-1">{`${d.ADMIN} (${d.ISO_A2})`}</p>
  );
  return ReactDOMServer.renderToStaticMarkup(lbl);
}

function SongsTable(props) {
  if (props.data) {
  }
}

function MusicGlobe() {
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();
  const [clickD, setClickD] = useState();
  const [songsData, setSongsData] = useState();

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
  // what happens when a country is clicked
  function handleClick(d) {
    setClickD(d);
    let aKey = process.env.REACT_APP_LASTFM_API_KEY;
    let url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${d.properties.BRK_NAME}&api_key=${aKey}&format=json&limit=10`;

    // fetch 10 most popular songs for the country.
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.message ? setSongsData(null) : setSongsData(data.tracks.track);
      });
    console.log(songsData);
  }
  // ===================
  // music card contents
  // ===================
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const card = (
    <React.Fragment>
      <CardContent>
        {clickD ? (
          <>
            <Typography variant="h5">{clickD.properties.ADMIN} </Typography>
            {songsData ? (
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Song Name</TableCell>
                      <TableCell align="right">Artist</TableCell>
                      <TableCell align="right">Listeners</TableCell>
                      <TableCell align="right">Link</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {songsData.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.artist.name}</TableCell>
                        <TableCell align="right">{row.listeners}</TableCell>
                        <TableCell align="right">
                          <a href={`${row.url}`}>{row.url}</a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography variant="h5">
                {"Could not find the songs' information for this country"}
              </Typography>
            )}
          </>
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
        onPolygonClick={handleClick}
        polygonsTransitionDuration={300}
      />
    </>
  );
}
export default MusicGlobe;
