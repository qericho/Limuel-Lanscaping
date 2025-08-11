import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Service from "./components/sections/Service";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Service />
    </div>
  );
};

export default App;
