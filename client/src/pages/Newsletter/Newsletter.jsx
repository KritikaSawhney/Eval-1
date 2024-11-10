import React, { useRef } from 'react';
import './Newsletter.css'

const Newsletter = (props) => {
  const phoneInputRef = useRef(null);

  const sendWhatsAppMessage = async (customerNumber, newsItems) => {
    const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
    const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const fromNumber = 'whatsapp:+14155238886';
    const toNumber = `whatsapp:+91${customerNumber}`;
    const messageBody = "📈 Cryptocurrency News Updates:\n\n" +
      newsItems.map((item, index) => `${index + 1}. ${item}`).join('\n');

    const body = new URLSearchParams({
      From: fromNumber,
      To: toNumber,
      Body: messageBody
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Message sent successfully:', data.sid);
    } else {
      const error = await response.json();
      console.error('Failed to send message:', error.message);
    }
  };

  const getNewsData = async () => {
    const newsURL = 'https://gnews.io/api/v4/search?q=cryptocurrency&token=aa05ad71aef78e8fc1a6f2ea9354b2ea';
    try {
      const response = await fetch(newsURL);
      const data = await response.json();
      return data.articles.map(article => article.title);
    } catch (error) {
      console.error('Error fetching news data:', error);
      return [];
    }
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();
    const customerNumber = phoneInputRef.current.value.trim();

    if (customerNumber) {
      const newsItems = await getNewsData();
      if (newsItems.length > 0) {
        await sendWhatsAppMessage(customerNumber, newsItems);
      } else {
        console.log('No news items to send.');
      }
    } else {
      console.log('Please enter a valid phone number.');
    }
  };

  return (
    <div className="bg-black py-5">
      <div className="container bg-dark">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-light">Cryptopunk Bytes</h1>
          </div>
          <div className="col-md-6">
            <p className="fs-5 fw-semibold text-light">
              The week’s biggest crypto news, sent right to your inbox
            </p>
            <form onSubmit={handleSubscribe} className="d-flex align-items-center mb-2">
              <input
                ref={phoneInputRef}
                type="number"
                className="form-control me-2 bg-dark text-light phoneInput"
                placeholder="Your mobile number"
                id='okbhia'
                required
              />
              <button
                type="submit"
                className="btn btn-outline-light subscribeButton"
              >
                Subscribe
              </button>
            </form>
            <p className="small">
              <a href="#" className="text-light">
                Learn how we collect your information by visiting our Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-dark text-light border-secondary">
              <img
                src="Images/image-1.jpg"
                className="card-img-top"
                alt="Stablecoin Market"
              />
              <div className="card-body">
                <h5 className="card-title">
                  The stablecoin market just hit an all-time high
                </h5>
                <p className="card-text">
                  <small className="text-muted">August 28, 2024</small>
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> Bitcoin hit $65K
                    before retreating below $59K.
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> The stablecoin market
                    hit an all-time high.
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> This week in numbers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card bg-dark text-light border-secondary">
              <img
                src="Images/image-3.png"
                className="card-img-top"
                alt="Crypto ETF Ambitions"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Wall Street’s growing crypto ETF ambitions
                </h5>
                <p className="card-text">
                  <small className="text-muted">August 21, 2024</small>
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> Why crypto is
                    rebounding slower than the stock market.
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> Crypto ETFs are
                    booming on Wall Street.
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> This week in numbers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card bg-dark text-light border-secondary">
              <img
                src="Images/image-3.png"
                className="card-img-top"
                alt="Crypto Rebounds"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Crypto rebounds after last week’s selloff
                </h5>
                <p className="card-text">
                  <small className="text-muted">August 14, 2024</small>
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> BTC revisited $60K
                    after last week’s selloff.
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> What "leverage" is and
                    why it's related to recent market swings.
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> This week in numbers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card bg-dark text-light border-secondary">
              <img
                src="Images/image-4.jpg"
                className="card-img-top"
                alt="Crypto Selloff Factors"
              />
              <div className="card-body">
                <h5 className="card-title">5 factors behind the crypto selloff</h5>
                <p className="card-text">
                  <small className="text-muted">August 07, 2024</small>
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> Crypto saw its biggest
                    selloff since 2022.
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> Market watchers weigh
                    in on the recent volatility.
                  </li>
                  <li>
                    <i className="fa-solid fa-arrow-right" /> This week in numbers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card p-4 bg-dark text-light border-secondary">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p className="text-light fw-bold">Cryptopunk Bytes</p>
                  <h2 className="display-5">The week’s crypto news, explained</h2>
                </div>
                <div className="col-md-6 text-end">
                  <p>
                    Get the latest news about Bitcoin, NFTs, DeFi, and more. Every
                    Wednesday.
                  </p>
                  <form className="d-flex">
                    <input
                      type="number"
                      className="form-control me-2 bg-dark text-light phoneInput"
                      placeholder="Your mobile number"
                      required=""
                    />
                    <button
                      type="submit"
                      className="btn btn-outline-light subscribeButton "
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="mt-2">
                    <small>
                      Learn how we collect your information by visiting our{" "}
                      <a href="#" className="text-light text-decoration-none">
                        Privacy Policy
                      </a>
                      .
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
