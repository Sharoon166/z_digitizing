const Hero = () => {
  return (
    <section className="py-24 flex flex-col md:flex-row items-center justify-around gap-8">
      <div className="max-w-3xl mx-auto px-8 md:w-[60%]">
        <h2 className="text-6xl font-bold mb-2 text-pretty">
          Meet the Artisan Behind the Stitches
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Bringing 10+ years of embroidery expertise to life, [Owner's Name]
          combines creativity and precision to craft designs that stand out.
        </p>
        <p className="text-gray-600 mb-8 text-balance">
          [Owner's Name] started this journey with a passion for design and a
          commitment to quality. Today, we're proud to deliver custom embroidery
          solutions that exceed expectations, whether it's for businesses,
          events, or personal keepsakes.
        </p>
        <div>
          <button className="hover:bg-primary text-zinc-800 px-8 py-3 border-2 border-primary transition-colors">
            Get in touch
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-[40%]">
        <img
          src="/owner-no-bg.png"
          alt="owner's photo"
          className="max-h-96 w-[50%] object-cover object-top"
        />
      </div>
    </section>
  );
};

export default Hero;
