import HomePageInfo from "./HomePageInfo";
import Navigation from "./Navigation";

function HomePageContent() {
  return (
    <div className="absolute top-0 w-full h-screen bg-gradient-to-t from-cyan-600/35 to-black/75 flex flex-col">
      <Navigation background="bg-transparent" />
      <HomePageInfo />
    </div>
  );
}
export default HomePageContent;
