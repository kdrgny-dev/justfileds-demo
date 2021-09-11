import React from 'react'
import CountUp from 'react-countup'

export default function Achievements({ data }) {
    return (
        <section id="counts" className="counts">
              <div className="container" data-aos="fade-up">
                  <div className="row gy-4">
                      {data?.about?.achievements?.map((item, index) => (
                          <div className="col" key={index += 1}>
                              <div className="count-box">
                                  <i className={`bi ${item?.icon} count-box-icon`}></i>
                                  <div className="count-box-title">{item?.title}</div>
                                  <CountUp start={0} end={item?.value} duration={2.75} />
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
    )
}
