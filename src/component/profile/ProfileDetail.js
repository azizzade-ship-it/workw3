import React from "react";
import { Share, CryptoLittleIcon, Alert, crypto, href } from "../../static/svg";

function ProfileDetail({
  Avatar,
  title,
  owner,
  creator,
  type,
  total,
  description,
  details,
}) {
  return (
    <div className="profile-detail  ml-9 mt-2">
      <div className="flex">
        <h1 className="text-3xl	font-medium">{title}</h1>
        <Share />
      </div>

      <div className="flex mt-10 justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold leading-9">Owner</h2>
          <div className="flex">
            <div>
              <img src={Avatar} alt={owner} />
            </div>
            <div className="flex flex-col items-start  mx-2">
              <h2 className="font-medium text-yellow-400 flex items-center ">
                {owner}
              </h2>
              <div className="flex items-center">
                <CryptoLittleIcon />
                <span className="text-sm text-zinc-500 ml-1 ">0x123...213</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "1px" }} className=" bg-zinc-500 h-full"></div>
        <div className="flex flex-col">
          <h2 className="font-bold leading-9">Сreated by</h2>
          <div className="flex">
            <div>
              <img src={Avatar} alt={creator} />
            </div>
            <div className="flex flex-col items-start mx-2">
              <h2 className="font-medium text-yellow-400 flex items-center ">
                {creator}
              </h2>
              <div className="flex items-center ">
                <CryptoLittleIcon />
                <span className="text-sm text-zinc-500 ml-1 ">0x123...213</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "1px" }} className="lg:my-5 bg-zinc-600"></div>

      <div className="flex items-center ">
        <div className="font-medium">Type</div>
        <span className="mx-3">{type}</span>
        <Alert />
      </div>

      <div style={{ height: "1px" }} className="lg:my-5 bg-zinc-600"></div>

      <div className="flex items-center">
        <img src={crypto} alt="crypto" />
        <span className="font-medium mx-3 text-xl">{total}</span>
        <span className="text-zinc-400 text-sm">= $ 87.96</span>
      </div>
      <div className="flex items-center my-4 justify-between">
        <button className="w-80 py-3 px-12 rounded-lg bg-yellow-300 text-black font-semibold">
          BUY
        </button>
        <div
          style={{ borderAtyle: "solid", borderWidth: "1px" }}
          className=" h-full rounded-lg flex items-center justify-between px-3 border-zinc-700	"
        >
          <img src={href} alt="href" />
          <span className="text-sm text-zinc-300">16</span>
        </div>
      </div>

      <div style={{ height: "1px" }} className="lg:my-5 bg-zinc-600"></div>
      <div className="flex flex-col">
        <h3 className="font-medium">Description</h3>
        <div style={{ width: "342px" }} className="text-sm text-zinc-500">
          {description}{" "}
        </div>
      </div>
      <div style={{ height: "1px" }} className="lg:my-5 bg-zinc-600"></div>
      <table className="flex flex-col">
        <tr className="text-white my-8">
          <td className="font-medium my-1">Details</td>
        </tr>
        <tr className="my-1 flex justify-between w-64">
          <td className="font-normal">Contract Address</td>
          <td className="text-yellow-400">{details.ContractAddress}</td>
        </tr>
        <tr className="my-1 flex justify-between w-64">
          <td className="font-normal">Token ID</td>
          <td className="text-yellow-400">{details.TokenID}</td>
        </tr>

        <tr className="my-1 flex justify-between w-64">
          <td className="font-normal">Token Standard</td>
          <td>{details.TokenStandard}</td>
        </tr>
        <tr className="my-1 flex justify-between w-64">
          <td className="font-normal	">Blockchain</td>
          <td className="flex justify-start items-start">
            {details.Blockchain}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ProfileDetail;
