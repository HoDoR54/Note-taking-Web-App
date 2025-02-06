import { useState, useEffect } from "react";
import MobileView from "./Mobile/MobileView";
import { useHotkeys } from "react-hotkeys-hook";
import DesktopMain from "./Desktop/DesktopMain";
import { useNewNoteConext } from "./Contexts/NewFormContext";

const App = () => {
  const [view, setView] = useState("desktop");

  const { isCreatingNewNote, toggleForm } = useNewNoteConext();

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

  useHotkeys("/", (event) => {
    event.preventDefault();
    isCreatingNewNote && document.getElementById("ts-title-input")?.focus();
  });

  return (
    <section>
      {view === "desktop" && <DesktopMain />}
      {view === "mobile" && <MobileView />}
    </section>
  );
};

export default App;
