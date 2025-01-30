import DesktopLayout from "./DesktopLayout";
import DesktopMain from "./DesktopMain";

// Component Responsibility: to nest the main app in the layout and return to the App.tsx

const DesktopView = () => {
  return (
    <DesktopLayout>
      <DesktopMain />
    </DesktopLayout>
  );
};

export default DesktopView;
