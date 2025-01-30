import {
  PreviewSec,
  NoteDisplaySec,
  ControlsSec,
} from "../components/MainSecs";
import Header from "../components/Header";
import { useState } from "react";
import { noteType } from "../Data/notes";

// Component Responsibility: to render the main app components for the desktop screen

const DesktopMain = () => {
  const [currentNote, setCurrentNote] = useState<noteType | null>(() => {
    return null;
  });

  return (
    <section className="h-screen w-full flex flex-col">
      <Header />
      <section className="z-20 grid grid-cols-12 px-1 h-[calc(100vh-4rem)] w-full">
        <PreviewSec setCurrentNote={setCurrentNote} />
        <NoteDisplaySec currentNoteDetails={currentNote} />
        <ControlsSec />
      </section>
    </section>
  );
};

export default DesktopMain;
