import React from 'react'
import Link from 'next/link'

export default function About({ data }) {
    const item = data?.about
    return (
        <section id="about" className="about">

            <div className="container" data-aos="fade-up">
                <div className="row gx-0">

                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="content">
                            <h3>{item?.title}</h3>
                            <h2>{item?.summary_title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: item?.summary }} />
                            <div className="text-center text-lg-start">
                                <Link href="/about-us">
                                    <a className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Read More</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <img src={item?.image} alt={item?.title} className="img-fluid" />
                    </div>

                </div>
            </div>

        </section>
    )
}
