const Showcase = ({ images }: { images: string[] }) => {
  return (
    <section id="showcase">
      <h3 className="text-center text-4xl font-semibold mb-8">
        Our Most popular Embroidery designs
      </h3>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
