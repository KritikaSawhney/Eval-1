const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const sourceImg = document.querySelector('#source-img');
const targetImg = document.querySelector('#target-img');
let apiData = null;

(async function fetchData() {
  let response = await fetch(URL);
  apiData = await response.json(); 
  renderImg(); 
})();

const renderImg = () => {
    let selectedSource = fromCurrencySelect.value.toLowerCase();
    let selectedTarget = toCurrencySelect.value.toLowerCase();

    for (let key of apiData) {
        let apiSymbol = key.symbol;
        
        if (selectedSource === apiSymbol) {
            sourceImg.src = key.image;
        }
        
        if (selectedTarget === apiSymbol) {
            targetImg.src = key.image;
        }
    }
};
