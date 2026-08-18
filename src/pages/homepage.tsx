import SidebarOne from "../components/sidebarOne";
import SidebarTwo from "../components/sidebarTwo";
import Playground from "../components/playground";

export default function Homepage() {
  return (
    <div className="flex h-screen">
      <SidebarOne />
      <SidebarTwo />
      <Playground />
    </div>
  );
}