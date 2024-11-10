import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const ContactUs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTopics, setFilteredTopics] = useState([]);

    const topicsData = [
        { title: 'Account Access Issues', text: 'Trouble accessing your CryptoWatch account or need help with login issues.' },
        { title: 'Account Security', text: 'Concerns about account security or need help with securing your account.' },
        { title: 'Crypto Data and Privacy', text: 'Manage your crypto data and privacy settings on CryptoWatch.' },
        { title: 'Technical Support', text: 'Assistance with technical issues or troubleshooting CryptoWatch features.' },
        { title: 'Billing and Payments', text: 'Help with billing inquiries, payment issues, or refund requests.' },
        { title: 'Transaction Issues', text: 'Experiencing problems with crypto transactions or transfers? Get assistance here.' },
        { title: 'Platform Feedback', text: 'Share your feedback, suggestions, or report issues regarding the CryptoWatch platform.' },
        { title: 'Legal and Compliance', text: 'Inquiries related to legal matters, compliance, and regulations surrounding CryptoWatch.' },
        { title: 'Partnerships and Collaborations', text: 'Interested in partnering or collaborating with CryptoWatch? Reach out to our team.' },
        { title: 'General Inquiries', text: 'For any other questions or general assistance, feel free to contact us.' },
        { title: 'CryptoWatch Features', text: 'Questions or feedback about CryptoWatch features and functionalities.' },
        { title: 'Report Issues', text: 'Report issues or bugs encountered while using CryptoWatch.' },
    ];

    useEffect(() => {
        setFilteredTopics(
            topicsData.filter(topic =>
                topic.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <section className="header-section py-5  bg-black">
                <div className="container py-5">
                    <h1 className="display-1 py-3 fw-semibold text-light">Contact Us</h1>
                    <h2 className="text-light">We can Help</h2>
                    <div className="container mt-3">
                        {/* Search bar */}
                        <form className="d-flex mb-5">
                            <div className="search-icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <input
                                className="form-control ps-5"
                                id="searchBar"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                </div>
            </section>

            <section className="container-fluid py-5 text-light bg-black">
                <div className="container">
                    <h2 className="text-center mb-4">Select a Topic</h2>
                    <p className="text-center mb-4">
                        Choose a topic that best describes your issue, and you'll be directed to the relevant support form or resource.
                    </p>
                    <div className="row row-cols-1 row-cols-md-3 g-4 text-dark" id="topics">
                        {filteredTopics.length > 0 ? (
                            filteredTopics.map((topic, index) => (
                                <div className="col topic-item" key={index}>
                                    <div className="card text-center h-100">
                                        <div className="card-body">
                                            <h5 className="card-title fw-semibold">{topic.title}</h5>
                                            <p className="card-text fw-normal text-dark text-center fs-6">{topic.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-muted">No topics found</p>
                        )}
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-lg btn-outline-light m-2">Download CryptoWatch for iPhone</button>
                        <button className="btn btn-lg btn-outline-light m-2">Download CryptoWatch for Android</button>
                    </div>
                </div>
            </section>

            <section className="more-resources-section">
                <div className="container">
                    <h2 className="text-center mb-4 text-light">More resources</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {[
                            { title: 'About conversations on CryptoWatch', link: '#' },
                            { title: 'How to Post', link: '#' },
                            { title: 'About replies and mentions', link: '#' },
                            { title: 'Verified Organizations', link: '#' },
                        ].map((resource, index) => (
                            <div className="col" key={index}>
                                <div className="resource-box p-3">
                                    <h5 className='text-light'>{resource.title}</h5>
                                    <a href={resource.link} className="text-decoration-none">
                                        Read full article &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
