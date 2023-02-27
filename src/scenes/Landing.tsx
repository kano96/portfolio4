import { Dispatch, SetStateAction } from "react";
import { Sections } from "../enums/SectionsEnum";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: Dispatch<SetStateAction<Sections>>;
};

const Landing = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="Home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              src="assets/KevinTorres.jpeg"
              alt="profile"
              className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px]"
            />
          </div>
        ) : (
          <img
            src="assets/KevinTorres.jpeg"
            alt="profile"
            className="rounded-t-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px]"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Kevin{" "}
            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Torres
            </span>
          </p>
          <p className="mt-10 mb-7 text-md text-center md:text-start">
            I'am a Software Developer with years of experience in React, Node,
            TypeScript, Go, Python, AWS and Azure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
