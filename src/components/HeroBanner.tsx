import bannerImg from "../assets/images/Hero_Banner.png";
const HeroBanner = () => {
  return (
    <section>
      <div
        className="relative w-full h-[600px] bg-no-repeat bg-cover bg-center bg-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="absolute top-[40%] sm:left-[20%] sm:right-[20%] transform translate(-50%, -50%)">
          <div className="flex flex-col gap-3">
            <h1 className="text-primary-text text-2xl sm:text-4xl md:text-6xl text-center font-semibold uppercase sm:tracking-wide">
              The Best Luxury Hotels
            </h1>
            <p className="text-primary-text font-medium text-sm md:text-lg text-center">
              Discover Pure Luxury In Every Corner Of Our Hotel.Experience
              unparalleled elegance and comfort in our meticulously designed
              rooms, each offering a serene escape from the everyday. Indulge in
              gourmet dining at our world-class restaurants, unwind in our
              state-of-the-art spa, and enjoy personalized service that caters
              to your every need.
            </p>
            <div className="flex justify-center">
              <button className="px-6 py-3 text-primary-color font-semibold bg-primary-text rounded-md hover:bg-secondary-text">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
