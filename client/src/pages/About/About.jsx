import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';
import { faRocket, faMeteor } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <main>
            <section className="mainContent d-flex align-items-center text-center">
                <div className="container-fluid">
                    <div className="container">
                        <h1 className="display-1 fw-semibold">Where the world</h1>
                        <h1 className="display-1 fw-semibold" id="colored-h1">
                            does Crypto
                        </h1>
                    </div>
                    <video src="Images/alex-climbing-short.avc.mp4" autoPlay muted loop />
                </div>
            </section>
            <section className="aboutSection">
                <div className="container text-center text-light">
                    <h1 className="h1 fw-semibold">
                        "Look first / Then leap. It's our philosophy in the world of crypto—no
                        matter who you are or what you trade, thorough research and preparation
                        before making any move is the key to maximizing your returns in the
                        volatile landscape of cryptocurrencies."
                    </h1>
                    <button className="btn btn-lg btn-outline-light rounded-pill" id="exploreFeatures">Explore Features</button>
                </div>
            </section>
            <section className="loveCryto">
                <h1 className="h1 display-1 text-center my-5 fw-bolder text-light ">
                    Love in Every <br /> #CryptoWatch
                </h1>
                <div className="container-fluid">
                    <div className="wrapper">
                        <div className="box text-light  ">
                            <h2>60M+</h2>
                            <p>Traders and investors use our platform.</p>
                        </div>
                        <div className="box text-light  ">
                            <h2>#1</h2>
                            <p>Top website in the world when it comes to all things investing.</p>
                        </div>
                        <div className="box text-light  ">
                            <h2>1.5M+</h2>
                            <p>
                                Mobile reviews with 4.9 average rating. No other fintech apps are
                                more loved.
                            </p>
                        </div>
                        <div className="box text-light  ">
                            <h2>10M+</h2>
                            <p>Custom scripts and ideas shared by our users.</p>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-center">
                        <button
                            className="btn btn-lg btn-outline-light rounded-pill"
                            id="exploreFeatures"
                        >
                            Explore the world
                        </button>
                    </div>
                </div>
            </section>
            <section className="codeofhonor text-light">
                <div className="container">
                    <h1 className="display-1 text-center fw-bold ">Our code of honor</h1>
                    <p className="fs-3 text-center fw-semibold text-secondary">
                        To live up to that mission, we've made three principles that all our
                        teams swear by:
                    </p>
                    <div className="row my-5 gap-4">
                        <div className="col cols">
                            <FontAwesomeIcon className="icon-cols" icon={faOldRepublic} />
                            <h4>Our users are our investors</h4>
                            <p>
                                We make most of our money only through low cost monthly
                                subscriptions and ads. We don't care if you trade or not. For us,
                                objectivity is excellence.
                            </p>
                        </div>
                        <div className="col cols">
                            <FontAwesomeIcon className="icon-cols" icon={faRocket} />
                            <h4>Our users are our investors</h4>
                            <p>
                                We make most of our money only through low cost monthly
                                subscriptions and ads. We don't care if you trade or not. For us,
                                objectivity is excellence.
                            </p>
                        </div>
                        <div className="col cols">
                            <FontAwesomeIcon className="icon-cols" icon={faMeteor} />
                            <h4>Our users are our investors</h4>
                            <p>
                                We make most of our money only through low cost monthly
                                subscriptions and ads. We don't care if you trade or not. For us,
                                objectivity is excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="riskTaker text-light">
                <div className="container d-flex flex-column justify-content-center ">
                    <h1 className="h1 display-1 text-center fw-bolder">
                        Built for risk-takers
                    </h1>
                    <p className="fs-5 text-center text-secondary">
                        We support some of the world's best athletes because a. they're kick-ass
                        and b. they know a thing or two about calculated risk and reward — just
                        like our users.
                    </p>
                </div>
                <div className="container-fluid px-5">
                    <div className="row my-5 gap-4">
                        <div className="col cols">
                            <img
                                src="Images/athlete-alex.cb207dc12b37d501a282.webp"
                                alt=""
                                className="img-fluid"
                            />
                            <h3 className="my-2 fw-bold text-secondary">Alex Honnold</h3>
                        </div>
                        <div className="col cols">
                            <img
                                src="Images/athlete-caite.5141959085cb30a19537.webp"
                                alt=""
                                className="img-fluid"
                            />
                            <h3 className="my-2 fw-bold  text-secondary">Caite Zeliff</h3>
                        </div>
                        <div className="col cols">
                            <img
                                src="Images/athlete-leo.b159905a653aadc1e85d.webp"
                                alt=""
                                className="img-fluid"
                            />
                            <h3 className="my-2 fw-bold  text-secondary">Leo Houlding</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="help-center text-light">
                <div className="container-fluid">
                    <h1 className="display-4 fw-semibold mb-0">
                        Need technical support?
                        <br />
                        Use our <a href=""> Help center</a>
                    </h1>
                    <h1 className="display-4 fw-semibold mt-4 mb-0">
                        Have Questions About Our Crypto Solutions?
                        <br />
                        Explore our <a href="">Terms and Services</a> to learn more about our
                        offerings and policies.
                    </h1>
                </div>
            </section>
        </main>

    )
}

export default About