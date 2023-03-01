import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Badges from "../components/Badges";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="Skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span> &{" "}
            <span className="text-red">EXPERIENCE</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I have proficiency in multiple programming languages, coupled with
            the achievement of obtaining two cloud certifications.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20  before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <Badges />
            </div>
          ) : (
            <div className="flex justify-center">
              <Badges />
            </div>
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-col md:flex-row md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl ">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 ">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-1" />
            <p className="mt-8">
              I've worked as Software Engineer since 2021. I'am currently at a
              company called DEVSU, here I have worked building both the
              frontend and the backend of web applications that have thousands
              of users, using cloud services, microservices, clean code, etc.
            </p>
          </div>
        </motion.div>
        {/* TECHNOLOGIES */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl ">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Technologies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-1" />
            <p className="mt-8">
              I've used techonologies and languages like: React, NodeJS,
              TypeScript, GO, AWS, ReactiveX, Azure, Redux Toolkit, Python,
              JEST, MongoDB, Tailwind and GraphQL
            </p>
          </div>
        </motion.div>
        {/* SOFT SKILLS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl ">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Soft Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-1" />
            <p className="mt-8">
              I have a strong ability to communicate clearly and effectively. I
              also possess a high level of emotional intelligence, which allows
              me to empathize with others, manage conflicts constructively, and
              work collaboratively in team settings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
