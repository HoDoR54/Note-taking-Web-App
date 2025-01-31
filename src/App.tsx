import { useState, useEffect, useContext } from "react";
import MobileView from "./Mobile/MobileView";
import { useHotkeys } from "react-hotkeys-hook";
import DesktopMain from "./Desktop/DesktopMain";
import { NewNoteContext } from "./Contexts/NewFormContext";

const App = () => {
  const [view, setView] = useState("desktop");
  const newNoteContext = useContext(NewNoteContext);

  if (!newNoteContext) {
    throw new Error("the app must be nested within a context provider!");
  }

  const { toggleForm } = newNoteContext;

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

  useHotkeys("ctrl+alt+n", (event) => {
    event.preventDefault();
    toggleForm(true);
  });

  return (
    <section>
      {view === "desktop" && <DesktopMain />}
      {view === "mobile" && <MobileView />}
    </section>
  );
};

export default App;
