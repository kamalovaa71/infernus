import React, { useState } from "react";
import "./Header.css";

// imgs
import heart from "../../../public/ico/Navbar/heart.png";
import basket from "../../../public/ico/Navbar/basket.png";
import ModalContent from "../ModalContent/ModalContent";
import ReactModal from "react-modal";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_container">
            <NavLink to="/">
              <div className="logo">INFERNO</div>
            </NavLink>
            <div className="header_nav">
              <NavLink to="/">
                {" "}
                <a href="#">главная</a>{" "}
              </NavLink>
              <NavLink to="/catalog">
                {" "}
                <a href="#">каталог</a>{" "}
              </NavLink>
              <a href="#">акции</a>
              <a href="#">контакты</a>
            </div>
            <div className="header_icons">
              <img src={heart} alt="" />

              <img onClick={openModal} src={basket} alt="" />

              <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <ModalContent closeModal={closeModal} />
              </ReactModal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
