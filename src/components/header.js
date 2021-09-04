import React, { useState } from "react";
import { Link } from "gatsby";

import { BsThreeDotsVertical, BsX } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav-icon">
            <span onClick={() => setShowLinks(!showLinks)}>
              {!showLinks ? <BsThreeDotsVertical /> : <BsX />}
            </span>
          </div>
          <div className="links" id={showLinks ? "hidden" : ""}>
            <Link to="/">
              {" "}
              <button>Início</button>
            </Link>
            <Link to="/#contatos">
              {" "}
              <button>Contatos</button>
            </Link>
            <Link to="/#local">
              <button>Localização</button>
            </Link>
            <a href="https://www.youtube.com/channel/UCqd6-sIiqEy615sfD974_9g">
              <button>Youtube</button>
            </a>
            <a href="https://www.instagram.com/pilatescomclara/">
              <button>Instagram</button>
            </a>
            <Link to="/galeria">
              <button>Fotos</button>
            </Link>
            <Link>
              {" "}
              <div className="dropdown">
                <button>
                  <AiOutlineMenu />
                </button>
                <div className="dropdown-content">
                  <Link to="/fisioterapia">Fisioterapia</Link>
                  <Link to="/pilates">Pilates</Link>
                  <Link to="/acupuntura">Acupuntura</Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
