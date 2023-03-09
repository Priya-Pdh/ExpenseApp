import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import Navbar from '.';
type hamProps = {
  setShowForm: React.ComponentState;
};

export default function Hamburger(props: hamProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger">
      {open ? (
        <GrClose className="close_icon" size="40px" color="black" onClick={() => setOpen(!open)} />
      ) : (
        <div className="hamburger_icon_container">
          <GiHamburgerMenu
            className="hamburger_icon"
            size="40px"
            color="black"
            onClick={() => setOpen(!open)}
          />
        </div>
      )}
      {open && <Navbar setShowForm={props.setShowForm} />}
    </div>
  );
}
