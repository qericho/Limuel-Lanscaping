import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Service from "./components/sections/Service";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Service />
      <About />
    </div>
  );
};

export default App;
