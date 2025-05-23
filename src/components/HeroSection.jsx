import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    
    <div className ="flex flex-col items-center mt-6 lg:mt-20" id="Home">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Innovating
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for a Better Tomorrow
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      We create cutting edge solutions that transform industries, small businesses and improve lives.
Our commitment to excellence drives everything we do.

      </p>
      <div className="flex justify-center my-10">
        <a
          href="#Aboutus"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:opacity-80 transition duration-300"
        >
          Learn More
        </a>
        <a href="#contact" className="py-3 px-4 mx-3 rounded-md border hover:bg-gray-300 hover:text-black transition duration-300">
          Contact Us
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-white-700 shadow-sm shadow-white-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-white-700 shadow-sm shadow-white-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    
  );
};

export default HeroSection;
