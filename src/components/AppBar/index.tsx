import './style.scss';
import React, { useContext } from 'react';
import { TbUserCircle } from 'react-icons/tb';

import { GiHamburgerMenu } from 'react-icons/gi';
import { HamburgerContext } from '../../context/hamburgerContext';

export default function AppBar() {
  const { isOpen, setIsOpen } = useContext(HamburgerContext);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="appbar">
      <p>
        <TbUserCircle />
        Jane Doe
      </p>
      <div className="hmbg_wrapper">
        <GiHamburgerMenu className="hamburger_icon" onClick={toggle} />
      </div>
    </div>
  );
}
