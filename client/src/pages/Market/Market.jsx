import React, { useEffect } from "react";
import "./market.css";

const Market = () => {

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
                <h1 class="display-4 mb-1" >${greedValue}</h1>
                <h2 class="h5 ${greedClass >= 50 ? "text-danger" : "text-success"}">${greedClass}</h2>
            `
        }catch(error){
            console.log("Error: ", error);
        }
    } 
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
        console.error('Error fetching API data:', error);
    }};

    useEffect(() => {
        getData();
        getMarketSentiment();
    }, []); 

    return (
        <>
            <section className="CryptoPricesSection">
                <div className="container">
                    {/* Header Section */}
                    <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
                        <h1 className="fs-1 mb-0">Today's Cryptocurrency Prices by Market Cap</h1>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                defaultChecked
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                            >
                                Highlights
                            </label>
                        </div>
                        <p className="text-muted">
                            The global crypto market cap is $2.08T, a
                            <span className="text-danger"> 0.21% decrease </span>
                            over the last day.
                        </p>
                    </div>
                            <details className="text-left text-muted mb-3">
                                <summary>Read more</summary>
                                <p>
                                    The total crypto market volume over the last 24 hours is
                                    $59.62B, which makes a 12.22% decrease. The total volume in DeFi
                                    is currently $2.96B, 4.96% of the total crypto market 24-hour
                                    volume. The volume of all stable coins is now $55.07B, which is
                                    92.37% of the total crypto market 24-hour volume. Bitcoin’s
                                    dominance is currently 56.14%, a decrease of 0.12% over the day.
                                </p>
                            </details>

                    {/* Top Widgets Section */}
                    <div className="container">
                        <div className="Top-Widgets row">
                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <i className="fa-solid fa-fire"></i> Trending
                                        </h5>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between">
                                                <div>
                                                    DOGS <small className="text-secondary">DOGS</small>
                                                </div>
                                                <div className="text-danger">-0.18%</div>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <div>
                                                    TronDog{" "}
                                                    <small className="text-secondary">TRONDOGS</small>
                                                </div>
                                                <div className="text-success">+17.63%</div>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <div>
                                                    Bitcoin <small className="text-secondary">BTC</small>
                                                </div>
                                                <div className="text-danger">-0.74%</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <i className="fa-solid fa-star"></i> Top Community Article
                                        </h5>
                                        <div className="row">
                                            <div className="col-4 d-flex justify-content-center align-items-center">
                                                <img
                                                    src="Images/bitcoin meme.jpeg"
                                                    alt="Bitcoin Meme"
                                                    height="100px"
                                                    className="rounded"
                                                />
                                            </div>
                                            <div className="col-8">
                                                <h6>Cointelegraph</h6>
                                                <p>
                                                    Bitcoin exchange reserves reach new yearly low amid $60k
                                                    price retest
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <i className="fa-solid fa-circle-exclamation"></i> Fear & Greed Index
                                        </h5>
                                    <div className="d-flex flex-column justify-content-center align-items-center text-center p-4 border rounded shadow-sm" id="fearGreed"></div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="filterSection">
                <div className="container">
                <div
                    className="btn my-4 category-filters-group"
                    role="group"
                    aria-label="Basic example"
                >
                    <button type="button" className="btn btn-outline-primary">
                    All
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    NFTs
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    Memes
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    AI
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    Gaming
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    Categories
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    Token unlocks
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    Rehypothecated
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    Solana Eco
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    RWA
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    PolitiFi
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    DePIN
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    Filters
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                    Customize
                    </button>
                </div>
                </div>
            </section>

            <section className="pricingTableSection">
                <div className="container table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">24h</th>
                        <th scope="col">ATH</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Volume (24h)</th>
                        <th scope="col">Circulating Supply</th>
                    </tr>
                    </thead>
                    <tbody className="table_body"></tbody>
                </table>
                </div>
            </section>
        </>
  );
};

export default Market;
