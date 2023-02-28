import { motion } from "framer-motion";

const Badges = () => {
  return (
    <div className="flex">
      <a href="https://www.credly.com/badges/5eb3edb2-abf6-409a-9521-efd1ca214846/public_url">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          src="assets/aws-certified-cloud-practitioner.png"
          alt="skills"
          className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[150px] md:max-w-[200px]"
        />
      </a>
      <a href="https://www.credly.com/badges/b1a8c59d-e4cd-41d3-8725-2ad46a448699/public_url">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          src="assets/azure-data-engineer.png"
          alt="skills"
          className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[150px] md:max-w-[200px]"
        />
      </a>
    </div>
  );
};

export default Badges;
