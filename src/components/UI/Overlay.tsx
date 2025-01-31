import { ReactNode } from "react";

const Overlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-80 top-0 left-0 right-0 bottom-0 absolute">
      <div className="w-full h-full bg-black opacity-30"></div>
      {children}
    </div>
  );
};

export default Overlay;
