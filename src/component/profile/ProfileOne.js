import React, { useState, useEffect } from "react";
import { Comment, crypto, HeartButton } from "../../static/svg";
import Avatar from "../../static/png/Avatar.png";
import Person from "../../static/png/person2.png";
function ProfileOne({ owner, date }) {
  const [like, setLike] = useState(true);
  const [likeCount, setLikeCount] = useState(122);

  const handleLike = () => {
    setLike((e) => !e);
  };
  useEffect(() => {
    like ? setLikeCount((prev) => prev + 1) : setLikeCount((prev) => prev - 1);
  }, [like]);
  return (
    <div
      style={{ backgroundColor: "#25262C" }}
      className="w-96 rounded-lg pt-6 px-6 pb-4 owner"
    >
      <div className="lg:flex flex-col w-full h-32">
        <div className="text-white  font-medium	lg:flex items-center">
          <img src={crypto} alt="cryptoIcon" className="mr-1" />
          <span className="lg:leading-4 mr-1">Owner By</span>{" "}
          <span className="text-yellow-200 leading-4">{owner}</span>
        </div>
        <span className="text-zinc-500 lg:w-full text-xs">{date}</span>
        <div className="text-sm font-normal	leading-5	text-white">
          Hi Antony! What about Frusciante? Will he return to RHCP?
        </div>
        <div className="lg:mt-2 h-0.5 bg-zinc-500" ></div>
      </div>

      <div className="owner flex">
        <div className="mr-3">
          <img src={Avatar} alt="Avatar" />
        </div>

        <div className="flex flex-col w-64 justify-center">
          <h6 className="leading-5 flex  text-white">Anthony Kiedis</h6>
          <p className="text-zinc-500 lg:w-full text-xs">
            Travel Blogger, 38 of the best travel blo...
          </p>
          <div className="text-white text-sm leading-5 mt-2 flex flex-none order-1	self-stretch 	grow-0	flex-col">
            On October 7, 2021, the Red Hot Chili Peppers announced the dates
            for their 2022 world tour which will begin in June and conclude in
            September. Unlimited Love, the band's twelfth studio album and first
            with Frusciante in sixteen years, will be released on April 1, 2022.
            Here is the snap of John in studio.
          </div>
          <img src={Person} alt="Antony" className="mt-2" />
        </div>
      </div>

      <div className="mt-2 pt-6 pb-4 flex">
        <div
          onClick={handleLike}
          className="flex items-center text-white font-normal text-sm mr-5"
        >
          <HeartButton fill={like ? "white" : "none"} />{" "}
          <span className="ml-1">{likeCount}</span>
        </div>
        <div className="flex items-center text-white font-normal text-sm ">
          <Comment />
          <span className="ml-1">9</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileOne;
