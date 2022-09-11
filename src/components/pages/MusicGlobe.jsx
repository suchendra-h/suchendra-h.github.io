import Globe from "react-globe.gl";
import { gData } from "../utils/globeUtils";

function MusicGlobe() {
  return (
    <>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={gData}
        pointAltitude="size"
        pointColor="color"
      />
    </>
  );
}
export default MusicGlobe;
