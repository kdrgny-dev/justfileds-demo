import React from 'react'

export default function Team({data}) {
    return (
        <section id="team" className="team">

            <div className="container aos-init aos-animate" data-aos="fade-up">

                <header className="section-header">
                    <h2>Team</h2>
                    <p>Our hard working team</p>
                </header>

                <div className="row gy-4">
                    {data?.about?.team?.map((item, index) => (
                        <div
                            className="col d-flex align-items-stretch"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            key={index += 1}
                        >
                            <div className="member">
                                <div className="member-img">
                                    <img src={item?.image} className="img-fluid" alt={item.name} />
                                    {item?.social.length > 0 ? (
                                        <div className="social">
                                            {item?.social?.map((social_item, index) => (
                                                <a href={social_item?.url} key={index += 1}>
                                                    <i className={`bi ${social_item?.icon}`}></i>
                                                </a>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="member-info">
                                    <h4>{item?.name}</h4>
                                    <span>{item?.position}</span>
                                    <p>{item?.summary}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}
