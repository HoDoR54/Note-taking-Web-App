import {
  PreviewSec,
  NoteDisplaySec,
  ControlsSec,
} from "../components/MainSecs";

import Header from "../components/Header";

const DesktopMain = () => {
  return (
    <section className="h-screen w-full flex flex-col">
      <Header />
      <section className="z-20 grid grid-cols-12 px-1 max-h-[calc(100vh-4rem)] w-full">
        <PreviewSec />
        <NoteDisplaySec />
        <ControlsSec />
      </section>
    </section>
  );
};

export default DesktopMain;
