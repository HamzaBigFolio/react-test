import Heading from "./Heading";

const Section1 = () => {
  return (
    <section className="section-1 lg:mt-28 mt-14 gap-6 max-w-[1350px] mx-auto grid md:grid-cols-2 lg:px-4 px-5">
      <div className="left">
        <Heading
          as="h3"
          fontWeight={700}
          variant="secondary"
          className="md:text-3xl text-2xl font-[600]"
        >
          EXPLORING OUR VISION__
        </Heading>
        <img
          className="w-full lg:w-[26rem] aspect-[16/7] mt-6 md:mt-12  "
          src="/section-1-left.jpg"
          alt="image of sofa"
        />
      </div>
      <div className="right flex flex-col gap-6">
        <p className="text-gray-600 text-[18px]">
          We are a dedicated team of professionals passionate about helping you
          find the perfect property and achieve your real estate goals.
        </p>
        <p className="text-gray-600 text-[18px]">
          Our portfolio offers a wide array of property types, from
          single-family homes to condominiums, townhouses, and apartments.
          Whether you're looking for a cozy home or a lucrative investment, we
          have options to suit your preferences.
        </p>
        <img src="/section-1-right.jpg" alt="" />
      </div>
    </section>
  );
};

export default Section1;
