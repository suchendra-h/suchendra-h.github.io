import { useEffect } from "react";
import { useState } from "react";
import CrazyCircles from "./backgrounds/CrazyCircles";
import MyNavbar from "./navbar/Navbar";
import Mainpage from "./pages/Mainpage";
import Signature from "./signature/signature";

function App(props) {
  const [background, setBackground] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  let bg_component;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (background === "crazy_circles") {
    bg_component = <CrazyCircles></CrazyCircles>;
  } else {
    bg_component = "";
  }
  return (
    <div className={darkMode ? "dark app" : "app"}>
      {loading ? (
        <Signature />
      ) : (
        <>
          <MyNavbar
            setBackground={setBackground}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          ></MyNavbar>
          <Mainpage />
          {bg_component}
        </>
      )}
    </div>
  );
}

export default App;
