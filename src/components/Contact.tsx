import { contactLinks } from "@/constants";
import FlipLink from "./ui/FlipLink";
import { ExternalLink } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact">
      <h3 className="text-4xl font-semibold mb-8">Get in touch</h3>
      <div className="space-y-6">
        {contactLinks.map(({ contact, href }) => (
          <FlipLink
            key={href}
            href={href}
            endContent={<ExternalLink className="text-4xl size-10 md:size-24" />}
          >
            {contact}
          </FlipLink>
        ))}
      </div>
    </section>
  );
};

export default Contact;
