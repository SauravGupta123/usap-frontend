import React from 'react';

const NavBarComponent = ({ setIsHovering }) => {
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className='flex items-center justify-center bg-[#85b968] w-[68%] h-[100px] z-[999px] relative -top-[0.5rem] left-[15rem] border-[5px] '
    ></div>
  );
};

export default NavBarComponent;
