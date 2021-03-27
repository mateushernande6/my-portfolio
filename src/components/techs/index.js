import { Container, Image } from "./style";
import html from "../../image-techs/html5.png";
import css from "../../image-techs/css3.png";
import js from "../../image-techs/javascript-39404.png";
import react from "../../image-techs/logo512.png";
import redux from "../../image-techs/redux.png";
import git from "../../image-techs/git.png";
import { motion } from "framer-motion";

const Techs = () => {
  return (
    <>
      <Container id="techs">
        <div className="titleTechs">Hard skills</div>
        <div className="divTechs">
          <motion.div
            initial={{ y: 10, scale: 0.2 }}
            animate={{ y: -40, scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
            }}
          >
            <Image wid={68} src={html} />
          </motion.div>
          <motion.div
            initial={{ y: 10, scale: 0.2 }}
            animate={{ y: -40, scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
              delay: 0.6,
            }}
          >
            <Image wid={80} src={css} />
          </motion.div>
          <motion.div
            initial={{ y: 10, scale: 0.2 }}
            animate={{ y: -40, scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
              delay: 1,
            }}
          >
            <Image wid={78} src={js} />
          </motion.div>
          <motion.div
            initial={{ y: 10, scale: 0.2 }}
            animate={{ y: -40, rotate: 360, scale: 1.2 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
              delay: 1.5,
            }}
          >
            <Image wid={80} src={react} />
          </motion.div>
          <motion.div
            initial={{ y: 10, scale: 0.2 }}
            animate={{ y: -40, scale: 1, rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
              delay: 2,
            }}
          >
            <Image wid={80} src={redux} />
          </motion.div>
          <motion.div
            initial={{ y: 10, scale: 0.2 }}
            animate={{ y: -40, scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
              delay: 2.5,
            }}
          >
            <Image wid={80} src={git} />
          </motion.div>
        </div>
      </Container>
    </>
  );
};
export default Techs;
