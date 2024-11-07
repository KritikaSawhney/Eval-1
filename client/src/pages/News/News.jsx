import React, { useState, useEffect } from 'react';
import './newss.css';


export default function CryptoWatch() {
  const [newsData, setNewsData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '2463fcd1a3f3a22aa27bb61d0bcef4d7';
      const url = `https://gnews.io/api/v4/search?q=cryptocurrency&token=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewsData(data.articles);
        setCarouselData(data.articles.slice(0, 5)); // Use first 5 articles for carousel
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const formatPublishedDate = (dateString) => {
    const published = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - published);
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else {
      const diffDays = Math.ceil(diffHours / 24);
      return `${diffDays} days ago`;
    }
  };

  return (
    <div className="text-white">
      <main>
        <section className="top-news">
          {/* Top News section content */}
        </section>

        <div className="container mt-5">
          <div id="cryptoCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselData.map((article, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={article.image} className="d-block w-100" alt={article.title} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{article.title}</h5>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Read More</a>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#cryptoCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cryptoCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <section className="news-grid-section">
          <div className="container-fluid">
            <h2 className="text-uppercase fw-bold text-center mb-4">Crypto Currency News</h2>
            <div className="news-grid">
              <div className="container">
                <div id="newsRow" className="row">
                  {newsData.map((article, index) => (
                    <div key={index} className="col-md-4 news-card">
                      <div className="card">
                        <img src={article.image || 'https://via.placeholder.com/400x300?text=No+Image'} alt={article.title} className="img-fluid card-img-top" />
                        <div className="news-content">
                          <span className="news-badge text-bg-light">NEWS</span>
                          <h3>{article.title}</h3>
                          <div className="news-time">{formatPublishedDate(article.publishedAt)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="carousel-2">
          {/* Press Releases carousel */}
        </section>

        <section className="market-outlook-section">
          {/* Market Outlook section */}
        </section>

        <section className="market-articles-section">
          {/* Market Articles section */}
        </section>
      </main>
    </div>
  );
}
