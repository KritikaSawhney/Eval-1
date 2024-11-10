import React, { useEffect } from 'react'
import './CryptoConverter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CryptoConverter = () => {
    useEffect(() => {
        const cryptoList = {
            BTC: "Bitcoin",
            ETH: "Ethereum",
            USD: "USD",
            USDT: "Tether",
            BNB: "Binance Coin",
            XRP: "Ripple",
            ADA: "Cardano",
            SOL: "Solana",
            DOT: "Polkadot",
            DOGE: "Dogecoin",
            LTC: "Litecoin",
            BCH: "Bitcoin Cash",
            MATIC: "Polygon",
            TRX: "Tron",
            FIL: "Filecoin",
            VET: "VeChain",
            LINK: "Chainlink",
            XMR: "Monero",
            ALGO: "Algorand",
            THETA: "Theta",
            HBAR: "Hedera",
            ZEC: "Zcash",
            EOS: "EOS",
            MKR: "Maker",
            AAVE: "Aave",
            DAI: "Dai",
            UNI: "Uniswap",
            SUSHI: "SushiSwap",
            BAT: "Basic Attention Token",
            ICP: "Internet Computer",
            FTT: "FTX Token",
            ENJ: "Enjin Coin",
            NEO: "Neo",
            QTUM: "Qtum",
            XTZ: "Tezos",
            CAKE: "PancakeSwap",
            ZRX: "0x",
            COMP: "Compound",
            SNX: "Synthetix",
            CHZ: "Chiliz",
            LUNA: "Terra",
            HT: "Huobi Token",
            HNT: "Helium",
            STX: "Stacks",
            RPL: "Rocket Pool",
            GRT: "The Graph",
            CEL: "Celsius",
            FTM: "Fantom",
            IMX: "Immutable X",
            LDO: "Lido DAO",
            HFT: "Holo",
            CVX: "Convex Finance",
            REN: "Ren",
            OMG: "OmiseGO",
            DCR: "Decred",
            AXS: "Axie Infinity",
            SAND: "The Sandbox",
            INJ: "Injective Protocol",
            SRM: "Serum",
            CTSI: "Cartesi",
            LRC: "Loopring",
            RUNE: "Thorchain",
            STMX: "StormX",
            REEF: "Reef"
        };

        const fromCurrencySelect = document.querySelector("#fromCurrency");
        const toCurrencySelect = document.querySelector("#toCurrency");
        const convertBtn = document.querySelector('#convertBtn');
        const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
        const sourceImg = document.querySelector('#source-img');
        const targetImg = document.querySelector('#target-img');
        let apiData = null;

        const makeOption = () => {
            for (let key in cryptoList) {
                const fromOption = document.createElement("option");
                fromOption.innerText = cryptoList[key];
                fromOption.value = key;
                if (key === "BTC") fromOption.selected = true;
                fromCurrencySelect.appendChild(fromOption);

                const toOption = document.createElement("option");
                toOption.innerText = cryptoList[key];
                toOption.value = key;
                if (key === "ETH") toOption.selected = true;
                toCurrencySelect.appendChild(toOption);
            }
        };

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

        const toggleRotate = () => {
            const icon = document.querySelector('.swap-icon');
            icon.classList.toggle('rotated');
            [fromCurrencySelect.value, toCurrencySelect.value] = [toCurrencySelect.value, fromCurrencySelect.value];
        };

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

        convertBtn.addEventListener('click', convert);
        makeOption();


        return () => {
            convertBtn.removeEventListener('click', convert);
        };
    }, []);

    return (
        <>
            <section className="Index_converter">
                <div className="ConverterBlock container-fluid">
                    <div className="ConverterBlock-Box container">
                        <div className="ConverterBlock-Box-Left">
                            <h1 className="h1 display-2">Crypto Converter and Calculator</h1>
                            <h2>What is Crypto Converter?</h2>
                            <p className="text-secondary">
                                Cryptocurrency converter is a tool that you can use to easily
                                convert one currency into another.
                                <br />
                                Use our online crypto calculator for quick and efficient conversion
                                between various cryptocurrencies.
                            </p>
                            <a href="signup.html">
                                <button
                                    className="btn btn-lg btn-outline-light mt-4"
                                >
                                    Sign Up
                                </button>
                            </a>
                        </div>
                        <div className="ConverterBlock-Box-Right ">
                            <h2 className="mb-0">Convert</h2>
                            <hr />
                            {/* FROM AMOUNT */}
                            <div className="form-floating mb-3 d-flex position-relative">
                                <span id="source-icon" className="position-absolute">
                                    <img
                                        src=""
                                        alt=""
                                        height="35px"
                                        id="source-img"
                                        style={{ backgroundColor: "white" }}
                                    />
                                </span>
                                <input
                                    type="number"
                                    className="form-control  qwer text-light"
                                    id="fromAmount"
                                    placeholder="From"
                                />
                                <label htmlFor="fromCurrency">From</label>
                                <div className="d-flex flex-grow-1">
                                    <select
                                        className="form-select "
                                        aria-label="select example"
                                        id="fromCurrency"
                                    ></select>
                                </div>
                            </div>
                            {/* SWAP ICON */}
                            <div className="swap-icon" onclick="toggleRotate">
                                <FontAwesomeIcon icon={faArrowRightArrowLeft} rotation={90} size="xl" className='my-0' />
                            </div>
                            {/* TO AMOUNT  */}
                            <div className="form-floating mb-3 d-flex position-relative">
                                <span id="destination-icon" className="position-absolute">
                                    <img
                                        src=""
                                        alt=""
                                        height="35px"
                                        id="target-img"
                                        style={{ backgroundColor: "white" }}
                                    />
                                </span>
                                <input
                                    type="number"
                                    className="form-control text-light qwer"
                                    id="toAmount"
                                    placeholder="From"
                                />
                                <label htmlFor="toCurrency">To</label>
                                <div className="d-flex flex-grow-1">
                                    <select
                                        className="form-select"
                                        aria-label="select example"
                                        id="toCurrency"
                                    />
                                </div>
                            </div>
                            {/* CONVERT BUTTON  */}
                            <button id="convertBtn" className="btn btn-outline-light w-100 p-2">
                                Convert
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CryptoConverter