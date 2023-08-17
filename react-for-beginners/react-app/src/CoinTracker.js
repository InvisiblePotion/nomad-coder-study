import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState("");
  const [selectedCoinPrice, setSelectedCoinPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(() => json);
        setLoading(() => false);
        setSelectedCoinPrice(() => json[0].quotes.USD.price);
      });
  }, []);

  function onUsdInput(event) {
    setUsd(() => event.target.value);
  }
  function onSelectCoin(event) {
    setSelectedCoinPrice(
      () => coins[event.target.selectedOptions[0].index].quotes.USD.price
    );
  }

  return (
    <div>
      <h1>The Coins! ({coins.length} coin searched)</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            type="number"
            id="usd"
            placeholder="USD to..."
            value={usd}
            onChange={onUsdInput}
          />
          <select onChange={onSelectCoin}>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <p>
            {(usd === "0") | (usd === "")
              ? "How much i get this coins?"
              : selectedCoinPrice / parseInt(usd)}
          </p>
        </div>
      )}
    </div>
  );
}

export default CoinTracker;
