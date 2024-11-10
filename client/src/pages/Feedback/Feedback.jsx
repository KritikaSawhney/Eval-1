import React from 'react'
import './Feedback.css'

const Feedback = () => {
    return (
        <>
            <section className="feedback-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="welcome-thoughts">
                                <h1 className="h1 display-3 fw-semibold">
                                    We would love to hear your thoughts
                                </h1>
                                <p>
                                    Tell us about your vision: which challenges you are facing? We'd
                                    love to stay in touch with you, so we are always ready to answer
                                    any question that interests you.
                                </p>
                            </div>
                            <div className="phone-email d-flex flex-wrap gap-1 ">
                                <div className="box">
                                    <h6>Phone</h6>
                                    <input
                                        type="text"
                                        readOnly=""
                                        className="form-control-plaintext"
                                        defaultValue="123-456-789"
                                    />
                                </div>
                                <div className="box">
                                    <h6>Email</h6>
                                    <input
                                        type="text"
                                        readOnly=""
                                        className="form-control-plaintext"
                                        id="staticEmail"
                                        defaultValue="email@example.com"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h2 className="h2 display-5 mb-4">
                                Fill you this form and we'll get back to you in 5 minutes!
                            </h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        What is your name?
                                    </label>
                                    <input
                                        type="name"
                                        className="form-control"
                                        id="exampleInputName"
                                        aria-describedby="nameHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        What is your Email?
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Share your thoughts
                                    </label>
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a comment here"
                                            id="floatingTextarea"
                                            defaultValue={""}
                                        />
                                        <label htmlFor="floatingTextarea" className="text-secondary">
                                            Hi, I'd love to ask you...
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        By checking this you are agreeing to our {" "}
                                        <a href="Terms_and_conditions.html">terms and service</a>
                                    </label>
                                </div>
                                <button
                                    className="btn btn-lg btn-dark rounded px-5 w-100"
                                    id=""
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Feedback