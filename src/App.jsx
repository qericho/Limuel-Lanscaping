import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Faqs from "./components/sections/Faqs";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Portfolio from "./components/sections/Portfolio";
import Service from "./components/sections/Service";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <HowItWorks />
      <Portfolio />
      <Faqs />
    </div>
  );
};

export default App;
