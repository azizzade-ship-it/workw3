import React from "react";
function ItemActivity({ tableHead, tableBody }) {
  return (
    <div className="item-activity">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="mb-4">
            {tableHead?.map((val) => {
              return (
                <td className="text-white font-normal" key={val}>
                  {val}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableBody?.map((val) => {
            const { icon, Minted, price, From, TO, days } = val;
            return (
              <tr className="text-white mb-4" key={Minted}>
                <td className="flex my-4"><img src={icon} alt={Minted} className="mr-4"/>{Minted}</td>
                <td>{price}</td>
                <td className="text-yellow-400">{From}</td>
                <td className="text-yellow-400">{TO}</td>
                <td>{days}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemActivity;
