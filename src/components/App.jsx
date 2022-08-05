import { useState } from "react";
import CrazyCircles from "./backgrounds/CrazyCircles";
import MyNavbar from "./navbar/Navbar";
import Mainpage from "./pages/Mainpage";

function App(props) {
  const [background, setBackground] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  let tmp;
  if (background === "crazy_circles") {
    tmp = <CrazyCircles></CrazyCircles>;
  } else {
    tmp = "";
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <MyNavbar
        setBackground={setBackground}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      ></MyNavbar>
      <Mainpage />
      {tmp}
    </div>
  );
}

export default App;
