import React, { Component } from "react";
import "./modal.css";
import Box from "@mui/material/Box";
import imgConvjava from "../../image/java.jpg";
import Modal from "@mui/material/Modal";
import MODALBox from "./modalBox";
const MODAL = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Avatar = (
    <div className="groupAvatar">
      <img src={imgConvjava} alt="Not Apeared" />
    </div>
  );
  return (
    <>
      <div className="groupAvatar" onClick={handleOpen}>
        <img src={imgConvjava} alt="Not Apeared" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ModalBox">
          <MODALBox AvatarLang={Avatar} />
        </Box>
      </Modal>
    </>
  );
};
export default MODAL;
