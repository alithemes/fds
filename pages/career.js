/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

import Layout from "../components/layout/Layout";


function Career() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="text-center"><span className="tag-1 bg-6 color-green-900">Success Together</span>
                                <h1 className="text-display-2 color-gray-900 mt-30">Working with us,<br className="d-lg-block d-none" />the awesome team</h1>
                                <div className="text-body-lead-large color-gray-500 mt-40">Our focus is always on finding the best people to work with. Our bar<br className="d-lg-block d-none" />is high, but you look ready to take on the challenge.</div>
                                <div className="mt-55">
                                    <a href="mailto:email@example.com"  className="btn btn-black  mb-15 mr-20" target="_blank" rel="noreferrer" >JOIN OUR TEAM</a>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               <div className="section-box ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                       
                                    <img className="img-responsive bdrd-16" src="assets/imgs/template/career.jpg" alt="career img" /></div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div> 
           
              
                

               

                <section className="section-box pt-100 pb-100 mt-100 banner-hero banner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-30">
                            {/* <span className="tag-1 bg-6 color-gray-900">Built Exclusively For You</span> */}
                                <h3 className="text-heading-1 mt-30">Why Our Team Is One Of The Best!</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">There are countless great reasons to work at Zaer Support Services and we hate to brag, but it’s too hard not to!</p>
                                <div className="mt-40">
                                    <Link href="/page-about"><a className="btn btn-default btn-white  text-body-text">Learn More</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"I have been working at Zaer for the past year and I honestly can't imagine doing anything else. It's the only company that 100% respects my skills and has paid off in more ways than I could have ever imagined.
                                             I love coming to work every day and we're a team that is dedicated to providing the best service possible to our clients. "</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/template/user_female.jpg" alt="Zaer-staff-avatar" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Rish</h4>
                                                {/* <p className="text-body-text-md">Biffco Enterprises Ltd.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"I am so happy I found Zaer. I’ve been looking for a work place where my unique skillset is welcomed and appreciated. The Zaer team has done just that and this is why I love working here."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/template/user_male.jpg" alt="Zaer-staff-avatar" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jade</h4>
                                                {/* <p className="text-body-text-md">Krusty Krab</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"I have been in the disability services industry for over a decade and I have never seen a company that finally gets it. Zaer is highly knowledgeable and their dedication to making services accessible to everyone is unparalleled. "</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/template/user_female.jpg" alt="Zaer-staff-avatar" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Lianne </h4>
                                                {/* <p className="text-body-text-md">Biffco Enterprises Ltd.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 card-square hover-up mb-20">
                                            <p className="text-body-text color-gray-600 text-comment">"It's is both attractive and highly adaptable. It's exactly what I've been looking for. Just AMAZING!."</p>
                                            <div className="box-img-user">
                                                <div className="img-user img-user-round"><img src="/assets/imgs/template/user_female.jpg" alt="Zaer-staff-avatar" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Rakhi</h4>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-2"><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="/blog-single"><a className="text-heading-4">We can blend colors multiple ways, the most common</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="/blog-single"><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="/blog-single"><a className="text-heading-4">Design Studios That Everyone Should Know About?</a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Agon" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

               

            </Layout>

        </>
    )
}

export default Career;