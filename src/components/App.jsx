import { useEffect } from "react";
import { useState } from "react";
import CrazyCircles from "./backgrounds/CrazyCircles";
import MyNavbar from "./navbar/Navbar";
import Mainpage from "./pages/Mainpage";
import Signature from "./signature/signature";
import { motion } from "framer-motion";

function App(props) {
  const [background, setBackground] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  let bg_component;

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 3001);
  //   }, []);

  if (background === "crazy_circles") {
    bg_component = <CrazyCircles></CrazyCircles>;
  } else {
    bg_component = "";
  }
  return (
    // TODO change darkMode to a context so we don't pass as props to every component
    <div className={darkMode ? "dark app" : "app"}>
      {loading ? (
        <Signature />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-screen"
        >
          <MyNavbar
            setBackground={setBackground}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          ></MyNavbar>
          <Mainpage darkMode={darkMode} />
          {bg_component}
        </motion.div>
      )}
    </div>
  );
}

export default App;
