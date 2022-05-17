import React from "react";

const Coin = ({ coins }) => {
  return (
    <div className="coin">
      <img src={coins.icon} />
      <h3>Rank {coins.rank}</h3>
      <h3> Price: {coins.price}</h3>
      <h3> {coins.symbol}</h3>
    </div>
  );
};

export default Coin;
