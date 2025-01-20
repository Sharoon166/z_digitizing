import { Brands, Contact, Footer, Header, Hero, Reviews, Showcase } from "./components";
import { showcaseImages } from "./constants";

const App = () => {


  return (
    <div className="max-w-8xl mx-auto px-14 font-poppins">
      <Header />
      <main className="space-y-12">
        <Hero />
        <Brands />
        <Showcase images={showcaseImages} />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
