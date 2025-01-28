import Logo from "./Logo";
import TagList from "./TagList";
import SideBarFilter from "./SideBarFilter";

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
