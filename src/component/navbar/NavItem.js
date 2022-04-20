import React from "react";
import { not } from "../../static/svg/index";
function NavItem({ text, icon, onActiveHandler, active, notification }) {
  return (
    <div className="flex revers mr-4">
      <div className="flex flex-col cursor-pointer ">
        <div
          className={
            "flex justify-between  w-full leading-5	" +
            "" +
            (text === active ? " text-yellow-200" : "text-white")
          }
          onClick={onActiveHandler}
        >
       {icon}
          <div className="ml-6">{text}</div>
        </div>
        {text === active ? (
          <div className="bg-yellow-300  h-0.5 relative w-full top-4 "></div>
        ) : (
          ""
        )}
      </div>
      {notification === text ? (
        <div
          style={{ backgroundColor: "#7B61FF" }}
          className="w-5 h-4 text-white rounded-xl flex items-center justify-center text-sm	 relative right-0.5 bottom-3"
        >
          1
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavItem;
