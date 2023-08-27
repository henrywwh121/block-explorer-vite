import { Navbar, Search, BaseInfo, LatestInfo } from "./components";

function App() {
  return (
    <div className="bg-primary w-full">
      <Navbar />
      <Search />
      <BaseInfo />
      <LatestInfo />
    </div>
  );
}

export default App;
