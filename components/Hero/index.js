import React from 'react'

export default function Hero({ data }) {
    const hero = data?.about?.hero[0]
    return (
        <section id="hero" className="hero d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">{hero.title}</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">{hero.summary}</h2>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <div className="text-center text-lg-start">
                                <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>{hero.button_text}</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src={hero.image} className="img-fluid" alt={hero.title} />
                    </div>
                </div>
            </div>

        </section>
    )
}
