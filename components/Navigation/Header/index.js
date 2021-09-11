import React, { useState, useEffect } from 'react'
import Link from "next/link";

export default function Header() {
    const [scroll, setScroll] = useState(1)
    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY < 10
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }

        // setting the event handler from web API
        document.addEventListener("scroll", onScroll)

        // cleaning up from the web API
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    }, [scroll, setScroll])
    console.log('Scroll', scroll);
    return (
        <header id="header" className={scroll ? 'header fixed-top' : 'header fixed-top header-scrolled'}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                <Link href="/">
                    <a className="logo d-flex align-items-center">
                        <span>Justfields Demo</span>
                    </a>
                </Link>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link href="/">
                                <a className="logo d-flex align-items-center">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}
