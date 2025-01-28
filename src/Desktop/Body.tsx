import CreateNewNoteBtn from "../components/CreateNewNoteBtn";

const Body = () => {
  return (
    <section className="z-20 px-1 flex-1 w-[17.5vw] bg-white border-r-1 border-solid border-gray-300">
      <div className="border-b-1 py-3 border-solid border-gray-300 px-3 flex items-center justify-center">
        <CreateNewNoteBtn />
      </div>
    </section>
  );
};

export default Body;
