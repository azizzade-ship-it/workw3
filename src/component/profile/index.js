import React from "react";
import ProfileOne from "./ProfileOne";
import ProfileTwo from "./ProfileTwo";
import ProfileDetail from "./ProfileDetail";
import ItemActivity from "./ItemActivity";
import ElonMusk from "../../static/png/ElonMusk.png";
import { Union, D, Add } from "../../static/svg";

function Profile() {
  return (
    <div className="profile">
      <div className="flex justify-between">
        {/*<ProfileTwo/>*/}
        <ProfileOne owner="Elon Musk" date="Jun 23, 2021 for 45$" />
        <ProfileDetail
          Avatar={ElonMusk}
          title="Response from Antony Kiedis"
          owner="Elon Musk"
          creator="Сlemens Rehbein"
          type="Response"
          total="3 500 BUSD"
          description="Asked Antony a question about John due september ama session. As you can see here is a snap of John also."
          details={{
            ContractAddress: "0xed5a...c544",
            TokenID: "3474",
            TokenStandard: "ERC-721",
            Blockchain: "Ethereum",
          }}
        />
      </div>

      <div className="flex flex-col text-white owner mt-12">
        <h1 className="font-medium text-2xl	">Item Activity</h1>
        <ItemActivity
          tableHead={["Minted", "Price", "From", "To", "2 days ago"]}
          tableBody={[
            {
              icon: Union,
              Minted: "Trasnsfer",
              price: "",
              From: "0x123...213",
              TO: "0x123...213",
              days: "2 days ago",
            },
            {
              icon: D,
              Minted: "Sale",
              price: "200 BUSD",
              From: "Elon Musk",
              TO: "John Doe",
              days: "2 days ago",
            },
            {
              icon: Add,
              Minted: "Minted",
              price: "",
              From: "Elon Musk",
              TO: "",
              days: "2 days ago",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Profile;
