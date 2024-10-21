const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const SentimentURL = "https://api.alternative.me/fng/";
const Greed = document.querySelector('#fearGreed');

const tableBody = document.querySelector('.table_body');

const getMarketSentiment = async () => {
    try{
        let response = await fetch(SentimentURL);
        let fetchData = await response.json();

        let greedValue = fetchData.data[0].value;
        let greedClass = fetchData.data[0].value_classification;

        Greed.innerHTML = `
            <h1 className="display-4 mb-1" >${greedValue}</h1>
            <h2 className="h5 ${greedClass >= 50 ? "text-danger" : "text-success"}">${greedClass}</h2>
        `
    }catch(error){
        console.log("Error: ", error);
    }
}

getMarketSentiment();
const getData = async () => {
try {
    let response = await fetch(URL);
    let data = await response.json();

    data.forEach(coin => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${coin.market_cap_rank}</th>
        <td>
        <img src="${coin.image}" alt="${coin.name} logo" class="img-fluid crypto-logo">
        ${coin.name} <small class="text-secondary">${coin.symbol.toUpperCase()}</small>
        </td>
        <td>$${coin.current_price.toLocaleString()}</td>
        <td class="${coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}">${coin.price_change_percentage_24h.toFixed(2)}%</td>
        <td class="${coin.ath_change_percentage >= 0 ? 'text-success' : 'text-danger'}">${coin.ath_change_percentage ? coin.ath_change_percentage.toFixed(2) : 'N/A'}%</td>
        <td>$${coin.market_cap.toLocaleString()}</td>
        <td>$${coin.total_volume.toLocaleString()}</td>
        <td>${coin.circulating_supply.toLocaleString()} ${coin.symbol.toUpperCase()}</td>
    `;

    tableBody.appendChild(row);
    });
} catch (error) {
    console.error('Error fetching data:', error);
}};
getData();
