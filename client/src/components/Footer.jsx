import React from 'react';
import './styles/styles.css';
import logo from '../assets/images/favicon-bird-modified.png';
import appStoreBadge from '../assets/images/app-store-badge-en.svg';
import googlePlayBadge from '../assets/images/google-play-badge-en.svg';
import tradingViewBadge from '../assets/images/desptok-app-tradingview.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo">
                            <img src={logo} alt="CryptoWatch Logo" height="22px" /> CryptoWatch
                        </div>
                        <p>Look first / Then leap.</p>
                        <div className="footer-social-icons">
                            <a href="#"><i className="bi bi-x"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-telegram"></i></a>
                            <a href="#"><i className="bi bi-reddit"></i></a>
                            <a href="#"><i className="bi bi-discord"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                        <div className="my-3">
                            <select className="form-select form-select-sm" aria-label="Language">
                                <option defaultValue>English (India)</option>
                                <option value="1">English (US)</option>
                                <option value="2">English (UK)</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 footer-company">
                        <h5 className="text-start">Products</h5>
                        <ul className="list-unstyled text-start">
                            <li><a href="market.html">Supercharts</a></li>
                            <li><a href="#">Pine Script™</a></li>
                            <li><a href="#">Forex Screener</a></li>
                            <li><a href="#">Crypto Coins Screener</a></li>
                            <li><a href="#">DEX Pairs Screener</a></li>
                            <li><a href="market.html">Greed Index</a></li>
                            <li><a href="news.html">Crypto Heatmap</a></li>
                            <li><a href="#">Economic Calendar</a></li>
                            <li><a href="newsletter.html">News</a></li>
                            <li><a href="index.html">CryptoWatch Desktop</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 footer-community">
                        <h5 className="text-start">Company</h5>
                        <ul className="list-unstyled text-start">
                            <li><a href="about.html">About</a></li>
                            <li><a href="feature.html">Features</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="https://www.instagram.com">Social Network</a></li>
                            <li><a href="#">Wall of Love</a></li>
                            <li><a href="#">Athletes</a></li>
                            <li><a href="#">Manifesto</a></li>
                            <li><a href="Terms_and_conditions.html">Terms and Privacy</a></li>
                            <li><a href="Terms_and_conditions.html">Disclaimer</a></li>
                            <li><a href="#">Media Kit</a></li>
                            <li><a href="#">Tarot Cards for Traders</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 footer-business">
                        <h5 className="text-start">Community</h5>
                        <ul className="list-unstyled text-start">
                            <li><a href="#">Refer a Friend</a></li>
                            <li><a href="learn.html">Learn</a></li>
                            <li><a href="Terms_and_conditions.html">House Rules</a></li>
                            <li><a href="Contactus.html">Moderators</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 footer-business">
                        <h5 className="text-start">For Business</h5>
                        <ul className="list-unstyled text-start">
                            <li><a href="market.html">Charting Libraries</a></li>
                            <li><a href="market.html">Lightweight Charts™</a></li>
                            <li><a href="market.html">Advanced Charts</a></li>
                            <li><a href="index.html">Trading Platform</a></li>
                            <li><a href="learn.html">Education Program</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <div className="store-logo">
                            <a href="#"><img src={appStoreBadge} alt="App Store" className="me-2" /></a>
                            <a href="#"><img src={googlePlayBadge} alt="Google Play" className="me-2" /></a>
                            <a href="#"><img src={tradingViewBadge} alt="CryptoWatch" className="me-2" /></a>
                        </div>
                    </div>
                    <div className="col text-center">
                        <p>Select market data provided by <a href="#">ICE Data Services</a></p>
                        <p>&copy; 2024 CryptoWatch, Inc.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
