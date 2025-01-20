import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { testimonials } from "../constants";

const Reviews = () => {
  return (
    <section>
      <h3 className="text-center text-4xl font-semibold">Reviews</h3>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default Reviews;
