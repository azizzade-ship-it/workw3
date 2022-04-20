import React from "react";
import Avatar from "../../static/png/Avatar.png";
import Person from "../../static/png/person.png";
import { verified, href, crypto, imgicon } from "../../static/svg";
function CardTwo() {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Pacifico&family=Rubik&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
  </style>;

  return (
    <div>
      <div className="w-72">
        <img src={imgicon} alt="image" className="relative top-10 left-2"/>
        <img src={Person} alt="person" className="w-full" />
      </div>

      <div
        style={{ backgroundColor: "#25262C" }}
        className="w-72 p-4 rounded-b-lg"
      >
        <div className="flex text-sm owner items-center">
          <span className="text-yellow-300 leading-5	font-normal	mr-2 ">
            Anthony Kiedis
          </span>
          <img src={verified} alt="verified" />
        </div>
        <div className="text-white owner font-medium text-base leading-6">
          Photo of John Frusciante working on new album
        </div>
        <div className="mb-1 mt-5 text-white flex w-full justify-between items-center">
          <div className="flex justify-between owner">
            <img src={crypto} alt="crypto" className="" />
            <span className="text-sm font-semibold ml-5">500 BUSD</span>
          </div>
          <div className="text-sm flex items-center">
            <img src={href} alt="href" className="mr-2" />
            <span>24</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
