import bannerImg from "../assets/images/Hero_Banner.png";
import { Button } from "./ui/button";
const HeroBanner = () => {
  return (
    <section>
      <div
        className="relative w-full h-[600px] bg-no-repeat bg-cover bg-center bg-white dark:bg-dark-theme"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* overlay div */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="absolute top-[40%] sm:left-[20%] sm:right-[20%] transform translate(-50%, -50%)">
          <div className="flex flex-col gap-3">
            <h1 className="text-primary-text dark:text-secondary-text text-3xl sm:text-4xl md:text-5xl text-center font-semibold uppercase">
              Book A Room To Remember
            </h1>
            <p className="text-primary-text dark:text-secondary-text font-medium text-sm md:text-lg  text-center md:max-w-xl md:mx-auto">
              Discover Pure Luxury In Every Corner Of Our Hotel.Experience
              unparalleled elegance and comfort in our meticulously designed
              rooms, each offering a serene escape from the everyday.
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="px-8 py-5 text-primary-color font-semibold dark:text-secondary-text"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
