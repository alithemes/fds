/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="user-account">

                            <div className="content">
                                <h6 className="user-name">
                                    Welcome to  <span className="text-brand">Zaer Disability Services </span>
                                </h6>

                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">

                                        <li>
                                            <Link href="/"><a className="active">Home</a></Link>

                                        </li>

                                        <li>
                                            <Link href="/page-about"><a>About</a></Link>

                                        </li>

                                        <li>
                                            <Link href="/services"><a className="closer">Services</a></Link>

                                        </li>

                                        <li>
                                            <Link href="/page-contact"><a>Conatct Us </a></Link>

                                        </li>
                                        <li>
                                                    <Link href="/career"><a className="closer"><i className="fi fi-rr-briefcase" />Join Our Team</a></Link>
                                        </li>


                                    </ul>
                                </nav>
                            </div>

                            <div className="site-copyright color-gray-400">
                                Copyright 2022 © Zaer - Disability Services.<br />Designed
                                by
                                <Link href="http://codeteki.com.au"><a target="_blank" >&nbsp; Codeteki Digital Services</a></Link>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;