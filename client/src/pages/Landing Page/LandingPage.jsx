import React from "react";
import { Link } from 'react-router-dom';
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <section className="main-header bg-black">
        <div className="container-fluid text-center">
          <img
            src="Images/download.avif"
            className="img-fluid main-illustration"
            alt="Illustration"
          />
        </div>
      </section>
      <section className="welcome-section text-center">
        <div className="container">
          <h1 className="h1 display-1 fw-bold">Welcome to CryptoWatch</h1>
          <p className="fs-5">
            Your ultimate platform for tracking cryptocurrency prices, analyzing
            market trends, and managing your portfolio.
          </p>
          <a
            href="market.html"
            className="btn btn-outline-light btn-lg text-decoration-none "
          >
            Explore CryptoWatch
          </a>
        </div>
      </section>
      <section className="get-started-section text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <h2 className="h2 display-3 fw-semibold">Get started</h2>
              <p>
                CryptoWatch offers real-time data, in-depth analysis, and
                powerful tools for crypto enthusiasts and investors. Here’s how
                to begin your journey.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="Images/download-2.avif"
                alt="Get Started Illustration"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="container py-5">
            <div className="row gap-0">
              {/* Card 1 */}
              <div className="col rounded border-colored">
                <div className="card bg-dark text-light border-0 h-100">
                  <img
                    src="Images/download-3.avif"
                    className="card-img-top"
                    alt="Pick a Wallet"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Track Prices</h5>
                    <p className="card-text">
                      Monitor real-time prices of all major cryptocurrencies
                      with our comprehensive tracking tool.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col border-colored">
                <div className="card bg-dark text-light border-0 h-100">
                  <img
                    src="Images/download-last.avif"
                    className="card-img-top"
                    alt="Get ETH"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Manage Portfolio</h5>
                    <p className="card-text">
                      Keep track of your investments and monitor your portfolio
                      performance with ease.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col border-colored">
                <div className="card bg-dark text-light border-0 h-100">
                  <img
                    src="Images/download-5.avif"
                    className="card-img-top"
                    alt="Use a Dapp"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Analyze Markets</h5>
                    <p className="card-text">
                      Get detailed charts, technical analysis, and insights to
                      help you make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col border-colored">
                <div className="card bg-dark text-light border-0 h-100">
                  <img
                    src="Images/download-6.avif"
                    className="card-img-top"
                    alt="Start Building"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Stay Informed</h5>
                    <p className="card-text">
                      Access the latest news, trends, and updates from the world
                      of cryptocurrency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-is-ethereum-section text-white">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src="Images/download-7.avif"
                  alt="Ethereum Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h2 className="h2 display-3 fw-semibold">
                  What is CryptoWatch?
                </h2>
                <p className="fs-5">
                  CryptoWatch is a powerful tool designed for crypto
                  enthusiasts, traders, and investors. With real-time data,
                  insightful analysis, and a user-friendly interface, we make it
                  easy to navigate the fast-paced world of cryptocurrencies.
                </p>
                <a
                  href="feature.html"
                  className="btn btn-pink btn-lg text-decoration-none "
                >
                  Discover CryptoWatch
                </a>
                <a
                  href="about.html"
                  className="btn btn-outline-light btn-lg text-decoration-none "
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="financial-system-section text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="h2 display-3 fw-semibold">
                A fairer financial system
              </h2>
              <p className="fs-5">
                Millions of people face barriers to accessing traditional
                financial services. CryptoWatch’s decentralized finance (DeFi)
                tools offer a transparent and accessible financial ecosystem.
                With just an internet connection, you can trade, invest, earn
                interest, and manage your finances globally, without
                intermediaries.
              </p>
              <a href="crypto-converter.html" className="btn btn-blue btn-lg text-decoration-none ">Explore DeFi Tools</a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="Images/download-8.avif"
                alt="Ethereum Hands Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="what-is-ethereum-section-2 text-white py-5 bg-black">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="Images/download-9.avif"
                alt="Ethereum Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="h2 display-3 fw-bold">What is CryptoWatch?</h2>
              <p className="fs-5">
                CryptoWatch is your gateway to the world of digital assets,
                real-time market data, and decentralized finance. Whether you're
                an investor, trader, or enthusiast, our platform offers the
                tools and insights you need to navigate the dynamic world of
                cryptocurrencies, available to everyone, everywhere.
              </p>
              <a
                href="learn.html"
                className="btn btn-green btn-lg text-decoration-none "
              >
                Learn about CryptoWatch
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="financial-system-section text-white py-5 bg-black">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="h2 display-3 fw-bold ">
                A Transparent Financial System
              </h2>
              <p className="fs-5">
                Millions of people face barriers to accessing traditional
                financial services. CryptoWatch’s decentralized finance (DeFi)
                tools offer a transparent and accessible financial ecosystem.
                With just an internet connection, you can trade, invest, earn
                interest, and manage your finances globally, without
                intermediaries.
              </p>
              <a
                href="pricing.html"
                className="btn btn-pink btn-lg text-decoration-none "
              >
                Explore Premium Features
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="Images/download-10.avif"
                alt="Ethereum Hands Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="container d-flex justify-content-center gap-4 flex-wrap mb-5">
            <h1 className="text-center display-1 fw-bold text-light">
              The Latest{" "}
            </h1>
            <h1 className="text-center display-1 fw-bold mt-0" id="colored-h1">
              {" "}
              Network Statistics
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white p-4 stats-card h-100">
                <h4>ETH STAKED ON NETWORK</h4>
                <p>
                  Total Ethereum staked to secure the network, providing stability
                  and security.
                </p>
                <h2>34.21M</h2>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-sm btn-outline-light me-2">
                    30 Days
                  </button>
                  <button className="btn btn-sm btn-outline-light">
                    90 Days
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white p-4 stats-card h-100">
                <h4>DAILY TRANSACTIONS</h4>
                <p>
                  Total number of transactions processed on the Ethereum network
                  today.
                </p>
                <h2>1.133M</h2>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-sm btn-outline-light me-2">
                    30 Days
                  </button>
                  <button className="btn btn-sm btn-outline-light">
                    90 Days
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white p-4 stats-card h-100">
                <h4>DEFI VALUE LOCKED</h4>
                <p>
                  Total value locked in DeFi applications on the CryptoWatch
                  network.
                </p>
                <h2>$96.58B</h2>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-sm btn-outline-light me-2">
                    30 Days
                  </button>
                  <button className="btn btn-sm btn-outline-light">
                    90 Days
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white p-4 stats-card h-100">
                <h4>NETWORK NODES</h4>
                <p>
                  Number of nodes maintaining the CryptoWatch network across the
                  globe.
                </p>
                <h2>4,847</h2>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-sm btn-outline-light me-2">
                    30 Days
                  </button>
                  <button className="btn btn-sm btn-outline-light">
                    90 Days
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <h1 className="text-white text-center mb-5 display-3 fw-semibold">
              Explore CryptoWatch.com
            </h1>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card card-custom transparent-bg">
                  <img
                    src="Images/download-11.avif"
                    className="card-img-top"
                    alt="Upgrade Knowledge"
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3">Level up your knowledge</h5>
                    <p className="card-text ">
                      Stay informed with the latest updates in the crypto world.
                      CryptoWatch provides the resources to help you understand
                      market trends and make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card card-custom transparent-bg">
                  <img
                    src="Images/download-12.avif"
                    className="card-img-top"
                    alt="CryptoWatch for Enterprise"
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3">CryptoWatch for Business</h5>
                    <p className="card-text">
                      Discover how CryptoWatch can unlock new opportunities,
                      streamline operations, and prepare your business for the
                      future with crypto integration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card card-custom transparent-bg ">
                  <img
                    src="Images/download-7.avif"
                    className="card-img-top"
                    alt="CryptoWatch Community"
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-3">Join the Community</h5>
                    <p className="card-text">
                      CryptoWatch thrives on its community of enthusiasts and
                      professionals. Explore how you can connect, share insights,
                      and grow together. Making the revolution in the world
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="financial-system-section container-fluid py-5">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center text-white">
                <h1 className="mb-4 display-1 fw-semibold">
                  Contribute to CryptoWatch
                </h1>
                <p className="mb-4 fs-5">
                  CryptoWatch is a community-driven platform. Whether you want to
                  suggest improvements, contribute new features, or help resolve
                  issues, your input is invaluable.
                </p>
                <div className="d-flex">
                  <Link to="feedback.html" className="btn btn-green me-2">
                    More on contributing
                  </Link>
                  <a
                    href="https://github.com/KritikaSawhney/Eval-1"
                    className="btn btn-outline-light d-flex align-items-center fs-5"
                  >
                    GitHub <i className="bi bi-github ms-2" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="Images/download-14.avif"
                  className="img-fluid"
                  alt="CryptoWatch Contribution"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
