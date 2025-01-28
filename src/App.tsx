import { useState, useEffect } from "react";
import DesktopView from "./Desktop/DesktopView";
import MobileView from "./Mobile/MobileView";

const App = () => {
  const [view, setView] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setView("desktop");
      } else if (width >= 768) {
        setView("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      {view === "desktop" && <DesktopView />}
      {view === "mobile" && <MobileView />}
    </section>
  );
};

export default App;
