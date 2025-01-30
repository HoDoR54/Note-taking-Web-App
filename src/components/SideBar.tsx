import TagList from "./TagList";
import SideBarFilter from "./SideBarFilter";

const Logo = () => {
  return (
    <a
      href="../../index.html"
      className="px-3 flex h-[4rem] items-center cursor-pointer border-b border-gray-300 border-solid w-full"
    >
      <img
        src="../../assets/title icon.png"
        className="w-9 aspect-square inline-block"
        alt=""
      />
      <span className="text-2xl font-semibold">Note</span>
    </a>
  );
};

// Component Responsibility: to render the sidebar components

const SideBar = () => {
  return (
    <section className=" shadow-md z-50 flex flex-col w-[20vw] border-r border-gray-300 p-3 pt-0 h-screen overflow-scroll scrollbar-hide">
      <Logo />
      <SideBarFilter />
      <TagList />
    </section>
  );
};

export default SideBar;
