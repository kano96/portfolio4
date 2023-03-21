import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

export type ProjectProps = {
  title: string;
  description: string;
  repository1: string;
  repository2?: string;
  demoLink: string;
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({
  title,
  demoLink,
  description,
  repository1,
  repository2,
}: ProjectProps) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-md md:text-2xl font-playfair font-bold">{title}</p>
        {isAboveMediumScreens && <p className="mt-7">{description}</p>}
        <div className="text-sm pt-2 font-semibold">
          <a href={demoLink} target="_blank">
            🔗Live Demo
          </a>
          <a href={repository1} target="_blank">
            🔗Front repo
          </a>
          {repository2 && (
            <a href={repository1} target="_blank">
              🔗Back repo
            </a>
          )}
        </div>
      </div>
      <img
        src={`../assets/projects/${projectTitle}.png`}
        alt={projectTitle}
        className="h-full"
      />
    </motion.div>
  );
};

export default Project;
