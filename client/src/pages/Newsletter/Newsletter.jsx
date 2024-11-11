import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import "./Newsletter.css";

const CryptoWatch = ({ accountSid, authToken, fromNumber, onSubscribe }) => {
  const phoneInputRef = useRef(null);
  const subButtonRef = useRef(null);

  useEffect(() => {
    const sendWhatsAppMessage = async (customerNumber, newsItems) => {
      const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
      const toNumber = `whatsapp:+91${customerNumber}`;
      const messageBody =
        "📈 Cryptocurrency News Updates:\n\n" +
        newsItems.map((item, index) => `${index + 1}. ${item}`).join('\n');

      const body = new URLSearchParams({
        From: fromNumber,
        To: toNumber,
        Body: messageBody,
      });

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: 'Basic ' + btoa(`${accountSid}:${authToken}`),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body,
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Message sent successfully:', data.sid);
        } else {
          const error = await response.json();
          console.error('Failed to send message:', error.message);
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    };

    const newsURL = 'https://gnews.io/api/v4/search?q=cryptocurrency&token=aa05ad71aef78e8fc1a6f2ea9354b2ea';

    const getNewsData = async () => {
      try {
        const response = await fetch(newsURL);
        const data = await response.json();
        return data.articles.map((article) => article.title);
      } catch (error) {
        console.error('Error fetching news data:', error);
        return [];
      }
    };

    const handleSubscribeClick = async (event) => {
      event.preventDefault();
      const customerNumber = phoneInputRef.current.value.trim();

      if (!customerNumber) {
        console.error('Please enter a valid phone number.');
        return;
      }

      const newsItems = await getNewsData();
      if (newsItems.length > 0) {
        await sendWhatsAppMessage(customerNumber, newsItems);
      } else {
        console.log('No news items to send.');
      }

      if (onSubscribe) {
        onSubscribe(customerNumber);
      }
    };

    const subButton = subButtonRef.current;
    if (subButton) {
      subButton.addEventListener('click', handleSubscribeClick);
    }

    return () => {
      if (subButton) {
        subButton.removeEventListener('click', handleSubscribeClick);
      }
    };
  }, [accountSid, authToken, fromNumber, onSubscribe]);

  return (
    <div>
      <main>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold text-light">Cryptopunk Bytes</h1>
            </div>
            <div className="col-md-6">
              <p className="fs-5 fw-semibold text-light">
                The week’s biggest crypto news, sent right to your inbox
              </p>
              <form className="d-flex align-items-center mb-2">
                <input
                  type="number"
                  className="form-control me-2 bg-dark text-light phoneInput"
                  placeholder="Your mobile number"
                  required
                  ref={phoneInputRef}
                />
                <button
                  type="submit"
                  className="btn btn-outline-light subscribeButton"
                  ref={subButtonRef}
                >
                  Subscribe
                </button>
              </form>
              <p className="small">
                <a href="#" className="text-light">
                  Learn how we collect your information by visiting our Privacy
                  Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

CryptoWatch.propTypes = {
  accountSid: PropTypes.string.isRequired,
  authToken: PropTypes.string.isRequired,
  fromNumber: PropTypes.string.isRequired,
  onSubscribe: PropTypes.func,
};

export default CryptoWatch;
