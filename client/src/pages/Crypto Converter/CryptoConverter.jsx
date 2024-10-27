import React from 'react'
import './CryptoConverter.css'

const CryptoConverter = () => {
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
                    id="exploreFeatures"
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
                    className="form-control"
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
                <div className="swap-icon" onclick="toggleRotate()">
                    <i className="fa-solid fa-arrow-right-arrow-left fa-rotate-90 fa-xl mb-3" />
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
                    className="form-control"
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