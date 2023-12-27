import Heading from "./Heading";

const Section3 = () => {
  return (
    <section className="section-3 lg:mt-28 mt-14 max-w-[1350px] mx-auto lg:px-4 px-5">
      <Heading as="h3" fontWeight={400} variant="secondary" className="mb-16">
        WHY CHOOSE US__
      </Heading>
      <div className="grid md:grid-cols-2">
        <div className="left flex flex-col justify-center gap-5 md:gap-24 lg:gap-32 xl:gap-52 w-[85%]">
          <p className="text-base text-gray-700">
            Building Trust with Trusted Brands. These collaborations have
            allowed us to deliver exceptional real estate solutions, combining
            our expertise with the excellence of our brand partners.
          </p>
          <div className="flex justify-between gap-5 flex-col lg:flex-row">
            <span>01- Unique Property Features</span>
            <span className="lg:w-[50%] text-gray-600 text-sm pt-4 md:pt-0 pb-8 md:pb-0">
              We believe in crafting not just homes, but lifestyles that define
              elegance & comfort.
            </span>
          </div>
        </div>
        <div className="right">
          <img className="w-full" src="/section-3.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Section3;
