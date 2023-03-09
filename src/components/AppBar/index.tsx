import './style.scss';
import React from 'react';
import { TbUserCircle } from 'react-icons/tb';

export default function AppBar() {
  return (
    <div className="appbar">
      <p>
        <TbUserCircle />
        Jane Doe
      </p>
    </div>
  );
}
