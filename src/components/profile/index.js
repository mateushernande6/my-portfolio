import { ContainerProfile, Photo, DivInfo, Paper } from "./style";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useState } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import siga from "../../images/siga-whats.png";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ContainerProfile id="inicio">
      <DivInfo>
        <div className="nameTitle">Eu sou Mateus Hernandes</div>
        <div>
          <h2 className="stack">Desenvolvedor Front-End</h2>
        </div>
        <div>
          <Button
            onClick={handleOpen}
            className="btnContact"
            variant="contained"
          >
            Contato
          </Button>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Paper className="paper">
                <h2 id="transition-modal-title">Contatos</h2>
                <div className="contactDiv">
                  <div className="icon">
                    <a
                      href="https://www.linkedin.com/in/mateus-hernandes"
                      target="_blank"
                    >
                      <FaLinkedinIn className="isIcon in" />
                      <span>@mateus-hernandes</span>
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://www.instagram.com/mateush98/"
                      target="_blank"
                    >
                      <SiInstagram className="isIcon insta" />
                      <span>@mateush98</span>
                    </a>
                  </div>
                  <div className="icon ">
                    <a
                      href="https://api.whatsapp.com/send?phone=5518988081684"
                      target="_blank"
                    >
                      <FaWhatsapp className="isIcon whats" />
                      <span>(18) 98808-1684</span>
                    </a>
                  </div>
                  <div className="icon">
                    <a href="#">
                      <HiOutlineMail className="isIcon mail" />
                      <span className="email">
                        mateushernandes939@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
                <div className="sigaDiv">
                  <img src={siga} />
                </div>
              </Paper>
            </Fade>
          </Modal>
        </div>
      </DivInfo>
      <div>
        <Photo></Photo>
      </div>
    </ContainerProfile>
  );
};
export default Profile;
