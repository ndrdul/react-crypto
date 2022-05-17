import "./App.css";

import { useEffect, useState } from "react";

import Coin from "./components/Coin";

import Axios from "axios";

const App = () => {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
        console.log(response.data);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin.."
          onChange={(event) => setSearchWord(event.target.value)}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coins) => {
          return <Coin coins={coins} />;
        })}
      </div>
    </div>
  );
};

export default App;
