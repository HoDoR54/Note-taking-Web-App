import Header from "../components/Header";
import CreateNewNoteBtn from "../components/CreateNewNoteBtn";
import Notes from "../components/Notes";

const DesktopMain = () => {
  return (
    <section className="h-screen w-full flex flex-col">
      <Header />
      <section className="z-20 px-1 bg-white border-r-1 border-solid border-gray-300 max-h-[calc(100vh-4rem)] w-full">
        <div className="shadow-md overflow-y-scroll h-full w-[20vw]">
          <div className="border-b-1 py-3 border-solid border-gray-300 px-3 flex items-center justify-center">
            <CreateNewNoteBtn />
          </div>
          <Notes />
        </div>
      </section>
    </section>
  );
};

export default DesktopMain;
