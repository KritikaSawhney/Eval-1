import React from 'react';
import "./learn.css";

export default function LearnCrypto() {
  return (
    <main>
      <center>
        <h1 className="fw-bold">Crypto Questions, Answered !!</h1>
        <p className="text-light">Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between</p><br /><br />
      </center>
      <div className="container ">
        <div className="row d-flex featured">
          <div className="col youtube-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YCzSTGyk5OE?si=a3CE4Az1HiTJHoL7" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="featured-text">
              <h2 className="text-light"><strong>When is the best time to invest in crypto?</strong></h2>
              <p className="text-light">When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.</p>
            </div>
          </div>
          <div className="col-md-5 footer-business">
            <h2 className="text-light"><strong>POPULAR</strong></h2>
            <ul className="list-unstyled text-start">
              <li><a href="#" className="text-light text-decoration-none" ><h6 className="fw-bold">Beginner's Guide</h6>
                <p className="text-light">What is cryptocurrency?</p></a></li>
              <li><a href="#" className="text-light text-decoration-none"><h6 className="fw-bold">Getting started</h6>
                <p className="text-light">How to earn crypto rewards</p></a></li>
              <li><a href="#" className="text-light text-decoration-none"><h6 className="fw-bold">Getting started</h6>
                <p className="text-light">How to add crypto to your Coinbase Wallet</p></a></li>
              <li><a href="#"className="text-light text-decoration-none"><h6 className="fw-bold">Your crypto</h6>
                <p className="text-light">Tax forms, explained: A guide to U.S. tax forms and crypto reports</p></a></li>
              <li><a href="#"className="text-light text-decoration-none"><h6 className="fw-bold">Market Update</h6>
                <p className="text-light">Everything you need to know about the first-ever U.S. Bitcoin ETF</p></a></li>
              <li><a href="#"className="text-light text-decoration-none"><h6 className="fw-bold">Getting Started</h6>
                <p className="text-light">Beginner's guide to dapps</p></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section-item">
          <img src="images/crypto basics.png" alt="Crypto basics" />
          <h3 className="text-dark text-decoration-none">When is the best time to invest in crypto?</h3>
          <a href="https://www.example.com/crypto-basics" target="_blank">
            See more <span className="arrow">→</span>
          </a>
        </div>
        <div className="section-item">
          <img src="Images/tips turorials.png" alt="Tips and tutorials" />
          <h3 className="text-dark text-decoration-none">Tips and Tutorials</h3>
          <a href="https://www.example.com/tips-tutorials" target="_blank">
            See more <span className="arrow">→</span>
          </a>
        </div>
        <div className="section-item">
          <img src="Images/advanced training.png" alt="Advanced trading" />
          <h3 className="text-dark text-decoration-none">Advanced Training</h3>
          <a href="https://www.example.com/advanced-trading" target="_blank">
            See more <span className="arrow">→</span>
          </a>
        </div>
        <div className="section-item">
          <img src="Images/futures.png" alt="Futures" />
          <h3 className="text-dark text-decoration-none">Futures</h3>
          <a href="https://www.example.com/futures" target="_blank">
            See more <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <hr /><br /><br />
      <center>
        <h1 className="fw-bold">Crypto Basics</h1>
        <p className="text-light">New to crypto? Not for long — start with these guides and explainers</p><br /><br />
      </center>
      <div className="crypto-container">
        <div className="crypto-card">
          <a href="#" className="image-link">
            <img src="Images/what is bitcoin.png" alt="What is Bitcoin?" />
          </a>
          <div className="crypto-content">
            <span className="label">BEGINNER'S GUIDE</span>
            <a href="#" className="title-link">
              <strong>What is Bitcoin?</strong>
            </a>
            <p>Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.</p>
          </div>
        </div>
        <div className="crypto-card">
          <a href="#" className="image-link">
            <img src="Images/guide to deficons.png" alt="Guide to DeFi tokens and altcoins" />
          </a>
          <div className="crypto-content">
            <span className="label">BEGINNER'S GUIDE</span>
            <a href="https://www.coinbase.com/learn/crypto-basics/guide-to-defi-tokens-and-altcoins" className="title-link">
              <strong>Guide to DeFi tokens and altcoins</strong>
            </a>
            <p>From Aave to Zcash, decide what to trade with our beginner's guide.</p>
          </div>
        </div>
      </div><br /><br />
      <div className="guides-container">
        <div className="guide-card">
          <a href="#" className="image-link">
            <img src="Images/etherum.png" alt="What is Ethereum?" />
          </a>
          <div className="guide-content">
            <span className="guide-label">BEGINNER'S GUIDE</span>
            <a href="#" className="guide-title-link"><strong>What is Ethereum?</strong></a>
          </div>
        </div>
        <div className="guide-card">
          <a href="#" className="image-link">
            <img src="Images/defi.png" alt="What is DeFi?" />
          </a>
          <div className="guide-content">
            <span className="guide-label">KEY TERM</span>
            <a href="#" className="guide-title-link"><strong>What is DeFi?</strong></a>
          </div>
        </div>
        <div className="guide-card">
          <a href="#" className="image-link">
            <img src="Images/stable coin.png" alt="What is a stablecoin?"  height="600" />
          </a>
          <div className="guide-content">
            <span className="guide-label">BEGINNER'S GUIDE</span>
            <a href="#" className="guide-title-link"><strong>What is a stablecoin?</strong></a>
          </div>
        </div>
        <div className="guide-card">
          <a href="#" className="image-link">
            <img src="Images/glossary.png" alt="Crypto Slang" />
          </a>
          <div className="guide-content">
            <span className="guide-label">GLOSSARY</span>
            <a href="#" className="guide-title-link"><strong>Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained</strong></a>
          </div>
        </div>
      </div><br /><br />
      <center>
        <button className="btn btn-outline-light">See more Crypto Basics</button>
      </center><br /><br />
      <hr />

      <center>
        <br /><br />
        <div className="container">
          <h1 className="fw-bold">What is......</h1><br /><br />
          <ul className="terms">
            <li><a href="#">Bitcoin</a></li>
            <li><a href="#">Blockchain</a></li>
            <li><a href="#">Cardano</a></li>
            <li><a href="#">Crypto Wallet</a></li>
            <li><a href="#">DeFi</a></li>
            <li><a href="#">Ethereum</a></li>
            <li><a href="#">Fork</a></li>
            <li><a href="#">Inflation</a></li>
          </ul>
          <ul className="terms">
            <li><a href="#">Market Cap</a></li>
            <li><a href="#">NFT</a></li>
            <li><a href="#">Private Key</a></li>
            <li><a href="#">Protocol</a></li>
            <li><a href="#">Smart Contract</a></li>
            <li><a href="#">Token</a></li>
            <li><a href="#">Volatility</a></li>
            <li><a href="#">Memecoin</a></li>
          </ul>
          <br /><br />
          <button className="btn btn-outline-light">See more </button>
        </div><br /><br />
        <hr />
        <center>
          <br /><br />
          <h1 className="fw-bold">Tips and Tutorials</h1>
          <p className="text-light">Get practical, step-by-step answers to all things crypto</p>
        </center>
        <br /><br />
      </center>

      <div className="crypto-container">
        <div className="crypto-card">
          <a href="#" className="image-link">
            <img src="Images/donate crypto.png" alt="What is Bitcoin?" />
          </a>
          <div className="crypto-content">
            <span className="label">GETTING STARTED</span>
            <a href="#" className="title-link">
              <strong>How to Donate Crypto?</strong>
            </a>
          </div>
        </div>
        <div className="crypto-card">
          <a href="#" className="image-link">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/byNNauAJrKI?si=c0bDqCvBbAoPDhl2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </a>
          <div className="crypto-content">
            <span className="label">VIDEO TUTORIAL</span>
            <a href="https://www.coinbase.com/learn/crypto-basics/guide-to-defi-tokens-and-altcoins" className="title-link">
              <strong>How to set up a crypto wallet</strong>
            </a>
          </div>
        </div>
      </div>
      <br /><br />
    </main>
  );
}