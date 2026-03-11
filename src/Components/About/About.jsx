import React from "react";
import aboutImg from "../../assets/popularImage/51262.jpg";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-black py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold LatoBold text-white inline-block border-b-4 border-white pb-2">
            About
          </h1>
          <p className="text-gray-300 mt-2 LatoRegular">
            Learn more about our platform and why freelancers love us
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 px-4">
          {/* Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutImg}
              alt="About us"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-3xl font-semibold LatoSemibold mb-4">
              About Our Freelancing Platform
            </h2>
            <p className="text-lg LatoRegular mb-6 text-gray-300">
              We are a modern freelancing marketplace connecting skilled professionals
              with businesses worldwide. Our platform makes it easy to find trusted
              freelancers and get quality work done efficiently.
            </p>

            <h2 className="text-2xl font-semibold LatoSemibold mb-3">Why Choose Us</h2>
            <ul className="space-y-2 text-gray-300 LatoRegular text-lg">
              <li>✅ Hire verified and skilled freelancers</li>
              <li>✅ Wide range of services in one platform</li>
              <li>✅ Secure payments and smooth communication</li>
              <li>✅ Fast project delivery and reliable support</li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;