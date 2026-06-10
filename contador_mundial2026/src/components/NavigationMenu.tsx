import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/menu.css";

function GroupMenu({ activeGroup, onSelectGroup }: { activeGroup: string; onSelectGroup: (group: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu">

      <button
        className={`menu-button ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{activeGroup ? `Grupo ${activeGroup}` : "Grupos"}</span>

        <FaChevronDown
          className={`arrow ${open ? "rotate" : ""}`}
           />
      </button>

      {open && (
        <div className="submenu">
          <button className="group-button" onClick={() => { onSelectGroup("A"); setOpen(false); }}>Grupo A</button>
          <button className="group-button" onClick={() => { onSelectGroup("B"); setOpen(false); }}>Grupo B</button>
          <button className="group-button" onClick={() => { onSelectGroup("C"); setOpen(false); }}>Grupo C</button>
          <button className="group-button" onClick={() => { onSelectGroup("D"); setOpen(false); }}>Grupo D</button>
        </div>
      )}

    </div>
  );
}

export default GroupMenu;