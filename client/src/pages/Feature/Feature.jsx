import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <main>
        {/* Hero Section */}
        <section className="hero-sec rounded-5">
            <div className="container">
            <div className="video-background">
                <video muted autoPlay loop id="background-video">
                <source src="Images/feature/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div id="content-section">
                <h1 className="h1 display-1 fw-bold">
                Crypto Watch: <br /> Elevate Your Trading Experience
                </h1>
                <p className="fs-4">
                Track real-time prices, analyze market trends, and stay ahead with
                advanced tools and insights tailored for cryptocurrency traders.
                </p>
                <div className="d-flex flex-wrap gap-3">
                <a href="#scroll-feature" className="btn btn-lg btn-outline-light">
                    Explore Features
                </a>
                <a
                    href="#"
                    className="btn btn-lg btn-light px-4"
                    id="transparentButton"
                >
                    Get Started
                </a>
                </div>
            </div>
            </div>
        </section>
        {/* Stats Section */}
        <section className="stats-section">
            <div className="container">
            <div className="row d-flex gap-1">
                <div className="col text-center">
                <h2 className="h2 display-5 fw-semibold">10K+</h2>
                <p>ACTIVE TRADERS</p>
                </div>
                <div className="col text-center">
                <h2 className="h2 display-5 fw-semibold">50+</h2>
                <p>CRYPTOCURRENCIES TRACKED</p>
                </div>
                <div className="col text-center">
                <h2 className="h2 display-5 fw-semibold">$0.00</h2>
                <p>REAL-TIME UPDATES</p>
                </div>
                <div className="col text-center">
                <h2 className="h2 display-5 fw-semibold">99.9%</h2>
                <p>UPTIME GUARANTEED</p>
                </div>
            </div>
            </div>
        </section>
        {/* Feature Sections */}
        <section className="feature-section py-5" id="scroll-feature">
            <div className="container">
            <div className="row mb-5 feature-block">
                <div className="col">
                <h3 className="h3 fw-semibold text-primary">
                    REAL-TIME PRICE TRACKING
                </h3>
                <h2 className="h2 display-5 fw-bold">
                    Stay ahead with live market data...
                </h2>
                <p className="fs-5 text-secondary">
                    Crypto Watch offers real-time price tracking for over 50
                    cryptocurrencies, providing you with instant access to the latest
                    market movements. Our platform ensures that you are always
                    up-to-date with accurate and timely information, allowing you to
                    make informed trading decisions with ease.
                </p>
                </div>
                <div className="col">
                <img
                    src="Images/feature/zk-stack.webp"
                    alt="Real-Time Price Tracking"
                    className="img-fluid"
                />
                </div>
            </div>
            <div className="row mb-5 feature-block">
                <div className="col order-md-2 text-block">
                <h3 className="h3 fw-semibold text-primary">
                    SECURE AND RESPONSIVE DESIGN
                </h3>
                <h2 className="h2 display-5 fw-bold">
                    ...trade securely across all devices.
                </h2>
                <p className="fs-5 text-secondary">
                    Crypto Watch is designed with security at its core, featuring
                    end-to-end encryption, secure authentication, and compliance with
                    industry standards. Our responsive design ensures that you can
                    access all platform features seamlessly, whether you're on a
                    desktop, tablet, or smartphone, allowing you to trade securely from
                    anywhere.
                </p>
                </div>
                <div className="col order-md-1 image-block">
                <video src="Images/feature/holdstation.mp4" muted autoPlay loop
                />
                </div>
            </div>
            <div className="row mb-5 feature-block">
                <div className="col text-block">
                <h3 className="h3 fw-semibold text-primary">CUSTOMIZABLE ALERTS</h3>
                <h2 className="h2 display-5 fw-bold">
                    ...never miss a market opportunity.
                </h2>
                <p className="fs-5 text-secondary">
                    With Crypto Watch, you can set up customizable alerts for specific
                    price levels, market events, and trading signals. Receive
                    notifications via push, email, or SMS, ensuring that you are always
                    aware of critical market changes and can respond quickly to maximize
                    your trading opportunities.
                </p>
                </div>
                <div className="col image-block">
                <img
                    src="Images/feature/user-centric.webp"
                    alt="Customizable Alerts"
                    className="img-fluid"
                />
                </div>
            </div>
            <div className="row mb-5 feature-block">
                <div className="col order-md-2 text-block">
                <h3 className="h3 fw-semibold text-primary">
                    ADVANCED CHARTING TOOLS
                </h3>
                <h2 className="h2 display-5 fw-bold">
                    ...analyze market trends like a pro...
                </h2>
                <p className="fs-5 text-secondary">
                    Our platform is equipped with a wide range of advanced charting
                    tools, including candlestick charts, line charts, and technical
                    indicators like RSI, MACD, and moving averages. Whether you are a
                    beginner or an experienced trader, Crypto Watch provides the tools
                    you need to perform in-depth market analysis and develop effective
                    trading strategies.
                </p>
                </div>
                <div className="col order-md-1 image-block">
                <img
                    src="Images/feature/native-bridge.png"
                    alt="Advanced Charting Tools"
                    className="img-fluid"
                />
                </div>
            </div>
            </div>
        </section>
    </main>
  )
}

export default Feature