import Heading from "./Heading";

const cards = [
  {
    img: "/property-01.jpg",
    title: "Beachfront Bungalow",
    rent: "$1,500,000",
    location: "San Diego, CA",
  },
  {
    img: "/property-02.jpg",
    title: "Beachfront Bungalow",
    rent: "$1,500,000",
    location: "San Diego, CA",
  },
  {
    img: "/property-03.jpg",
    title: "Beachfront Bungalow",
    rent: "$1,500,000",
    location: "San Diego, CA",
  },
  {
    img: "/property-04.jpg",
    title: "Beachfront Bungalow",
    rent: "$1,500,000",
    location: "San Diego, CA",
  },
];

const Section2 = () => {
  return (
    <section className="section-2 lg:mt-28 mt-14 max-w-[1350px] mx-auto  lg:px-4 px-5">
      <Heading as="h3" fontWeight={400} variant="secondary" className="mb-[5rem]">
        LATEST PROPERTIES__
      </Heading>
      <div className="grid md:grid-cols-2 gap-x-9 gap-y-12 p-[.6rem]">
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </section>
  );
};

function Card({ img, title, rent, location }) {
  return (
    <div>
      <div className="overflow-hidden">
        <img
          className="hover:scale-105 cursor-pointer duration-1000"
          src={img}
          alt=""
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="flex items-center text-[1.1rem] gap-2 mt-4 text-gray-600">
          {title}
          <img
            src="/icons/link-arrow.svg"
            className="w-[15px] hover:ml-[3px] duration-300"
            alt=""
          />
        </span>
        <span className="text-gray-500 text-sm">{rent} For Rent</span>
      </div>
      <span className="text-gray-500 text-sm">{location}</span>
    </div>
  );
}

export default Section2;
