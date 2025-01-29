import { svgIcons } from "../Data/SVGs";

const Header = () => {
  return (
    <section className="shadow z-30 px-3 min-h-[4rem] items-center flex justify-between bg-white border-b-1 border-solid border-gray-300">
      <h1 className="text-lg font-semibold">All Notes</h1>
      <div className="flex gap-3">
        <div className="flex items-center border-1 px-3 py-1 bg-white rounded-md w-[20vw]">
          <span className="mr-2">{svgIcons.searchSvg}</span>
          <input
            type="text"
            placeholder="Search notes by titles, tags, and content..."
            className="bg-transparent text-sm w-full border-none focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-center">
          {svgIcons.settingsSvg}
        </div>
      </div>
    </section>
  );
};

export default Header;
