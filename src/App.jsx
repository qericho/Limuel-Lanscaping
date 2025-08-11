import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Service from "./components/sections/Service";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <HowItWorks />
    </div>
  );
};

export default App;
