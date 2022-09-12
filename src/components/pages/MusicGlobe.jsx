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
    <p className="text-slate-100 bg-gray-700 bg-opacity-60 rounded-sm p-1 left-0">{`${d.ADMIN} (${d.ISO_A2})`}</p>
  );
  return ReactDOMServer.renderToStaticMarkup(lbl);
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

  const card = (
    <React.Fragment>
      <CardContent>
        {clickD ? (
          <>
            <Typography variant="h5">{clickD.properties.ADMIN} </Typography>
            {songsData ? (
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 400 }}
                  className="overflow-x-auto text-ellipsis overflow-hidden"
                  size="small"
                  padding="none"
                  aria-label="Top hits"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        size="small"
                        className="w-16 text-ellipsis overflow-hidden"
                      >
                        Song Name
                      </TableCell>
                      <TableCell align="left" size="small" className="w-12">
                        Artist
                      </TableCell>
                      <TableCell align="left" size="small" className="w-10">
                        Listeners
                      </TableCell>
                      <TableCell align="left">Link</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* songs data needs to be sorted */}
                    {songsData.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        className="p-0"
                      >
                        <TableCell
                          scope="row"
                          className="text-ellipsis overflow-hidden"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.artist.name}</TableCell>
                        <TableCell align="left">{row.listeners}</TableCell>
                        <TableCell align="left">
                          <a href={`${row.url}`}>LastFM</a>
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
      <Card
        className="bg-slate-100 bg-opacity-50 z-10 absolute top-12 right-0 w-[400px]"
        variant="outlined"
      >
        {card}
      </Card>
      <Globe
        className="z-0 absolute left-0"
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
