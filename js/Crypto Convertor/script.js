const fromCurrencySelect = document.querySelector("#fromCurrency");
const toCurrencySelect = document.querySelector("#toCurrency");
const convertBtn = document.querySelector('#convertBtn');

(function makeOption() {
  for (let key in cryptoList) {
    let newOption = document.createElement("option");
    newOption.innerText = cryptoList[key].toUpperCase();
    newOption.value = key;
    if (newOption.value === "BTC") {
      newOption.selected = "selected";
    }
    fromCurrencySelect.appendChild(newOption);
  }

  for (let key in cryptoList) {
    let newOption = document.createElement("option");
    newOption.innerText = cryptoList[key].toUpperCase();
    newOption.value = key;
    if (newOption.value === "ETH") {
      newOption.selected = "selected";
    }
    toCurrencySelect.appendChild(newOption);
  }
})();

const changeIcon = () => {
  const sourceIcon = apiData.find(coin => coin.symbol === fromCurrencySelect.value.toLowerCase());
  const targetIcon = apiData.find(coin => coin.symbol === toCurrencySelect.value.toLowerCase());
}

const convert = async () => {
  const sourceCurrency = cryptoList[fromCurrencySelect.value].toLowerCase();
  const targetCurrency = toCurrencySelect.value.toLowerCase();
  const amount = document.querySelector('#fromAmount').value;
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return; 
  }

  const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${sourceCurrency}&vs_currencies=${targetCurrency}`;

  let response = await fetch(URL);
  let data = await response.json();

  const conversionRate = data[sourceCurrency][targetCurrency];
  const result = amount * conversionRate;

  document.querySelector('#toAmount').value = result;
}

function toggleRotate() {
  const icon = document.querySelector('.swap-icon');
  icon.classList.toggle('rotated');
  // swap options
  [fromCurrencySelect.value, toCurrencySelect.value] = [toCurrencySelect.value, fromCurrencySelect.value];
}

convertBtn.addEventListener('click', () => {
  renderImg();
  convert();
});

fromCurrencySelect.addEventListener('change', () => {
  renderImg();
});
toCurrencySelect.addEventListener('change', () => {
  renderImg();
});