import React, { useState } from 'react';
import './Pricing.css';

function App() {
  // State hook for toggling plans
  const [isProfessional, setIsProfessional] = useState(false);

  // Functions for toggling plans
  const showNonProfessional = () => setIsProfessional(false);
  const showProfessional = () => setIsProfessional(true);

  return (
    <>
      {/* HEADER */}

      <main>
        <section className="hero-sec bg-dark text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h1 className="display-4">Free, until you’re ready</h1>
                <p className="lead">
                  Look first at how all the markets are performing.
                  <br />
                  Then leap into them on the platform used by 60 million traders.
                </p>
              </div>
              <div className="col-lg-5 text-center">
                <div className="pricing-card p-4 bg-dark rounded-3 border border-secondary">
                  <h1 className="display-3">₹ 0</h1>
                  <p>forever</p>
                  <a href="#" className="btn btn-primary btn-lg mt-3">Sign up</a>
                  <p className="mt-2 small">No credit card needed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center bg-black text-white py-5">
          <div className="container">
            <div className="row mb-3">
              <div className="col">
                <button
                  className={`btn btn-outline-light ${!isProfessional ? 'active' : ''}`}
                  onClick={showNonProfessional}
                >
                  Non-professional
                </button>
                <button
                  className={`btn btn-outline-light ${isProfessional ? 'active' : ''}`}
                  onClick={showProfessional}
                >
                  Professional PRO
                </button>
              </div>
            </div>
            <h2 className="display-4">Plans for every level of ambition</h2>
          </div>
        </section>

        <div className="container my-5">
          {/* Non-professional plans */}
          {!isProfessional && (
            <div id="non-professional-plans" className="row text-center">
              <div className="col-md-4 mb-4">
                <div className="card pricing-card">
                  <div className="card-body">
                    <h5 className="card-title">Essential</h5>
                    <h3 className="card-price">
                      ₹995<span>/month</span>
                    </h3>
                    <p className="card-annual-price">₹11,940/year</p>
                    <p className="card-discount">You save ₹3,600 a year</p>
                    <a href="#" className="btn btn-primary">Try free for 30 days</a>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>2 charts per tab</li>
                      <li>5 indicators per chart</li>
                      <li>10K historical bars</li>
                      <li>20 price alerts</li>
                      <li>20 technical alerts</li>
                      <li>10 parallel chart connections</li>
                      <li>No ads</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Additional non-professional plan cards here */}
            </div>
          )}

          {/* Professional plans */}
          {isProfessional && (
            <div id="professional-plans" className="row text-center">
              <div className="col-md-6 mb-4">
                <div className="card pricing-card">
                  <div className="card-body">
                    <h5 className="card-title">Professional PRO Basic</h5>
                    <h3 className="card-price">
                      ₹9,995<span>/month</span>
                    </h3>
                    <p className="card-annual-price">₹119,940/year</p>
                    <p className="card-discount">You save ₹36,000 a year</p>
                    <a href="#" className="btn btn-primary">Try free for 30 days</a>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Unlimited charts</li>
                      <li>50 indicators per chart</li>
                      <li>500K historical bars</li>
                      <li>200 price alerts</li>
                      <li>200 technical alerts</li>
                      <li>50 parallel chart connections</li>
                      <li>No ads</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Additional professional plan cards here */}
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default App;
