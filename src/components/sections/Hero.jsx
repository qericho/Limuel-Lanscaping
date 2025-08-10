import Grad_TR from "../../assets/img/grad-top-right.png";
const Hero = () => {
  return (
    <div className="w-full h-full">
      {/* Gradient-Top-Right */}
      <div className="absolute top-0 right-0 w-[500px] z-[-1]">
        <img
          className="w-full h-full object-cover"
          src={Grad_TR}
          alt="Gradient-Top-Right"
        />
      </div>
    </div>
  );
};

export default Hero;
