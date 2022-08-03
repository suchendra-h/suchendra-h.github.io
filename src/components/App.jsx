import { useState } from "react";
import CrazyCircles from "./backgrounds/CrazyCircles";
import Navigation from "./navbar/Navbar";

function App(props) {
  const [background, setBackground] = useState("");
  let tmp;
  if (background === "crazy_circles") {
    tmp = <CrazyCircles></CrazyCircles>;
  } else {
    tmp = "";
  }
  return (
    <>
      <Navigation setBackground={setBackground}></Navigation>

      {tmp}
    </>
  );
}

export default App;
