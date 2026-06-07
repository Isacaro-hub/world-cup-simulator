import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/menu.css";

function GroupMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu">

      <button
        className={`menu-button ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>Grupos</span>

        <FaChevronDown
          className={`arrow ${open ? "rotate" : ""}`}
           />
      </button>

      {open && (
        <div className="submenu">
          <button className="group-button">Grupo A</button>
          <button className="group-button">Grupo B</button>
          <button className="group-button">Grupo C</button>
          <button className="group-button">Grupo D</button>
        </div>
      )}

    </div>
  );
}

export default GroupMenu;