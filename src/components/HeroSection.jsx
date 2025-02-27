import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-4">
      NETR-A<br></br>
        <span className="bg-gradient-to-r from-[#7BCE8D]/50 to-[#7BCE8D]/90 text-transparent bg-clip-text my-4">
          {" "}
          Whispers that guide your vision
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Enhance your independence and explore your surroundings confidently with our innovative app. Experience the world like never before and embrace the freedom to navigate safely and effortlessly!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-[#7BCE8D]/50 to-[#7BCE8D]/90 py-3 px-4 mx-3 rounded-md"
        >
          Download for Android
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border" download>
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#7BCE8D] shadow-sm shadow-[#7BCE8D] mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-[#7BCE8D] shadow-sm shadow-[#7BCE8D] mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
