import React from "react";
import Avatar from "../../static/png/Avatar.png";
import Img from "../../static/png/Img.png";
import { crypto, href } from "../../static/svg";

function CardOne({ owner, date }) {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Pacifico&family=Rubik&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
  </style>;

  return (
    <div style={{ backgroundColor: "#25262C" }} className="w-64 p-4">
      <div className="w-full h-28">
        <div>
          <div className="text-white owner font-bold">
            <span>Owner By</span>{" "}
            <span className="text-yellow-200">{owner}</span>
          </div>
          <span className="w-full text-zinc-500 text-xs">{date}</span>
          <div className="text-white text-sm mt-2">
            Hey Antony! How do you travel with your dog?
          </div>
        </div>
        <hr style={{ backgroundColor: "#2F3039" }} className="mt-4" />
      </div>
      <div className="w-full">
        <div className="mt-4 flex">
          <img src={Avatar} alt="avatar" className="mr-2" />
          <div className="flex flex-col">
            <span className="text-white owner font-medium leading-5	">
              Anthony Kiedis
            </span>
            <span className="w-full text-zinc-500 text-xs owner">
              Travel Blogger, 38 of the best...
            </span>
          </div>
        </div>
        <img src={Img} alt="img" className="my-2" />
        <div className="text-sm	text-white owner">
          Good question, Ben! Here's how my journey of working remotely led me
          to travel with Eca, my dog, and what I've learned...{" "}
          <span className="text-yellow-200">view more</span>
        </div>
        <div className="pt-3 pb-4 text-white flex w-full justify-between items-center">
          <div className="flex justify-between owner">
            <img src={crypto} alt="crypto" className="" />
            <span className="text-sm font-semibold ml-5">35 BUSD</span>
          </div>
          <div className="text-sm flex items-center">
            <img src={href} alt="href" className="mr-2" />
            <span>124</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOne;
