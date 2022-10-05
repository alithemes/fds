import React from 'react'
import Layout from "../components/layout/Layout";
import NewCard from "../components/layout/NewCard";



function Services() {
    return (
        <>
            <Layout>
             
                    <section className="section-box">
                        <div className="banner-hero banner-head-image" style={{ background: 'url(assets/imgs/template/disable.jpg)' }}>
                            <div className="container">
                                
                                    <h1 className="text-heading-1 text-center color-white mt-55">Services</h1>
                                </div>
                            </div>
                       
                    </section>
                   
                    <section className="section-box ">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">
                                    NDIS Care with Zaer
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20 content-text">
                                    We strive to provide you with the best possible care,
                                    freedom, and respect, and make sure that you are
                                    always empowered in your choices. We’ll be with you
                                    every step of the way!
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="container mt-70">
                                <NewCard/>

                              
                            </div>
                            </div>

                            </div> 
                            
                        </div>
                   
                    
                </section>

             
               

            </Layout>

        </>
    )
}

export default Services;