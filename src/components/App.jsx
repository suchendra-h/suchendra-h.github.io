import { useState } from "react";
import CrazyCircles from "./backgrounds/CrazyCircles";
import MyNavbar from "./navbar/Navbar";
import Mainpage from "./pages/Mainpage";

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
      <MyNavbar setBackground={setBackground}></MyNavbar>
      <Mainpage />
      {tmp}
    </>
  );
}

export default App;
