import React, { useState } from "react";
import { Link } from "gatsby";

import { BsThreeDotsVertical, BsX, BsList } from "react-icons/bs";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <button>
            <Link to="/">Início</Link>
          </button>{" "}
          <button>
            <Link to="/#contatos">Contatos</Link>
          </button>{" "}
          <button>
            <Link to="/#local">Localização</Link>
          </button>{" "}
          <button>
            <a href="https://www.youtube.com/channel/UCqd6-sIiqEy615sfD974_9g">
              Youtube
            </a>
          </button>{" "}
          <button>
            <a href="https://www.instagram.com/pilatescomclara/">Instagram</a>
          </button>{" "}
          <button>
            <Link to="/">Início</Link>
          </button>{" "}
          <button>
            <Link to="/" id="menu-icon">
              <BsList />
            </Link>
          </button>
        </div>
        <div className="nav-icon">
          <span onClick={() => setClick(!click)}>
            {!click ? <BsThreeDotsVertical /> : <BsX />}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
