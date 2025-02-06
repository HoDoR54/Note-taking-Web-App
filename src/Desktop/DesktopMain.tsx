import ControlsSec from "../components/ControlSec";
import NoteDisplaySec from "../components/NoteDisplaySection";
import { PreviewSec } from "../components/PreviewSec";
import Header from "../components/Header";
import DesktopLayout from "./DesktopLayout";
import { useCurrentNote } from "../Contexts/CurrentNoteContext";

// Component Responsibility: to render the main app components for the desktop screen

const DesktopMain = () => {
  const { currentNote } = useCurrentNote();

  return (
    <DesktopLayout>
      <section className="h-screen w-full flex flex-col">
        <Header />
        <section className="z-20 grid grid-cols-12 px-1 h-[calc(100vh-4rem)] w-full">
          <PreviewSec />
          <NoteDisplaySec />
          {currentNote && <ControlsSec />}
        </section>
      </section>
    </DesktopLayout>
  );
};

export default DesktopMain;
