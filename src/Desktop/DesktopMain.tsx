import Header from "../components/Header";
import Body from "./Body";

const DesktopMain = () => {
  return (
    <section className="min-h-screen w-full flex flex-col bg-amber-100">
      <Header />
      <Body />
    </section>
  );
};

export default DesktopMain;
