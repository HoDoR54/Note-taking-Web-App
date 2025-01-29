import TagList from "./TagList";
import SideBarFilter from "./SideBarFilter";

const Logo = () => {
  return (
    <a
      href="../../index.html"
      className="px-3 flex h-[4rem] items-center cursor-pointer border-b-1 border-gray-300 border-solid w-full"
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

const SideBar = () => {
  return (
    <section className="shadow-md z-50 flex flex-col w-[20vw] md:border-r-[0.5px] border-gray-300 pr-2 pb-3 h-screen overflow-scroll scrollbar-hide">
      <Logo />
      <SideBarFilter />
      <TagList />
    </section>
  );
};

export default SideBar;
