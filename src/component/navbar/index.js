import React, { useState } from "react";
import NavItem from "./NavItem";
import Roket from "../../static/png/roket.png";
import { bird, home, copy, vector,Home, Copy, Vector, not, arrowBottom } from "../../static/svg";

const items = [
  { text: "Discover", icon: Home },
  { text: "My requests", icon: Copy },
  { text: "NFT Marketplace", icon: Vector },
];

function Navbar() {
  const [active, setActive] = useState("NFT Marketplace");
  const [notification, setNotification] = useState("My requests");

  const activeHandler = (text) => {
    setActive(text);
  };
  
  return (
    <div className="navbar">
      <div className="flex items-center w-72">
        <img src={bird} className="w-8 h-8 " alt="pic" />
        <span className="text-white font-bold leading-5	mx-4">Paysenger</span>
        <button className="flex item-center justify-center rounded-md py-1 px-2.5 font-bold w-16 h-5 bg-yellow-200">
          <img src={Roket} />
        </button>
      </div>
      <div className="flex item-center">
        {items?.map((item) => {
          return (
            <NavItem
              key={item.text}
              text={item.text}
              icon={<item.icon fill={item.text===active?"#FFE55F":"white"}/>}
              active={active}
              notification={notification}
              onActiveHandler={() => activeHandler(item.text)}
            />
          );
        })}
      </div>
      <div className="flex justify-between">
        <img src={not} alt="notification" className="mr-6"/>
        <div className="flex flex-col items-baseline mx-5 text-white">
          <span className="text-base">connect wallet</span>
          <span className="text-yellow-200">0x21332453543...</span>
        </div>
        <img src={arrowBottom} alt="arrowBottom" />
      </div>
    </div>
  );
}

export default Navbar;
