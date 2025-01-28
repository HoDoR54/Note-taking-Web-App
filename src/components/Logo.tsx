const Logo = () => {
  return (
    <a
      href="../../index.html"
      className="px-3 flex h-[4rem] items-center cursor-pointer border-b-1 border-gray-300 border-solid w-full"
    >
      <img
        src="../../images/title icon.png"
        className="w-9 aspect-square inline-block"
        alt=""
      />
      <span className="text-2xl font-semibold">Note</span>
    </a>
  );
};

export default Logo;
