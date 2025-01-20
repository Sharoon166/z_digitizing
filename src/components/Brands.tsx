import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const brands = [
  {
    name: "Adidas",
    url: "/Adidas.webp"
  },
  {
    name: "Blue-Sky",
    url: "/Blue-sky.webp"
  },
  {
    name: "Brother",
    url: "/Brother.webp"
  },
  {
    name: "lids",
    url: "/Lids.webp"
  },
  {
    name: "Madira",
    url: "/Madira.webp"
  },
  {
    name: "Nike",
    url: "/Nike.webp"
  },
  {
    name: "Ricoma",
    url: "/Ricoma.webp"
  },
  {
    name: "Tajima",
    url: "/Tajima.webp"
  },
];

const Brands = () => {
  return (
      <section className="space-y-6">
          <h3 className="text-center text-4xl font-semibold">Trusted by the best brands</h3>
      <InfiniteMovingCards
        items={brands.map(brand => <img src={brand.url} alt={`${brand.name}'s logo`} className="h-20" />)}
      />
    </section>
  );
};

export default Brands;
