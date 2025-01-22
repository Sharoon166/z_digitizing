import {
  Brands,
  Contact,
  Footer,
  Header,
  Hero,
  Reviews,
  Showcase,
} from "./components";
import { showcaseImages } from "./constants";

const App = () => {
  return (
    <>
      <div className="absolute hidden -z-20 dark:flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
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
    </>
  );
};

export default App;
