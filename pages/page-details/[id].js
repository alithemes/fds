import React from 'react'
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import {useRouter} from 'next/router'
import data from '../../data/pageData.json'

function GroupActivities() {
     let Router = useRouter()

    const [singlePage, setSinglePage] = useState(null);


    const { id } = Router.query;


    useEffect(() => {
        setSinglePage(data.find((data) => data.id == id));
    }, [id]);

    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
    return (
        <>
            <Layout>
            {singlePage && (
                <div>
                    

                    <div className="section-box ">
                    <div className="container mt-100 mb-50">
                    <span className="btn btn-square" onClick={() => Router.back()}>Click here to go back</span>
                        <div className="row">
                        <div className="col-lg-6 col-sm-12 block-we-do-2">
                            <h3 className="text-heading-2 mt-30"> {singlePage.title}</h3>
                            <p className="text-body-lead-large color-gray-600 mt-30 content-text">{singlePage.body}</p>
                            {/* <div className="list-icons mt-40">
                            <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-work.svg" /></span>
                                <h4 className="text-heading-4">Best Price Guarantee</h4>
                                <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                            </div>
                            <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img  src="/assets/imgs/page/homepage2/icon-design.svg" /></span>
                                <h4 className="text-heading-4">Easy &amp; Quick Booking</h4>
                                <p className="text-body-excerpt color-gray-600 mt-15">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                            </div>
                            </div> */}
                            <p className="text-body-lead-large color-gray-600 mt-30"> If you have any questions or would like to seek some advice please contact our friendly team who will be happy to assist you.</p>
                        </div>
                        <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                            <div className="inner-image"><img className="img-responsive shape-1" src={singlePage.image} /></div>
                        </div>
                        </div>
                    </div>
                    </div>

                     
               

                    <section className="section-box mt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-md-12" />
                               
                            </div>
                           
                          
                        </div>
                    </section>
                </div>
                )}

             

                <div className="section-box mt-70">
            <div className="container">
                <div className="row">
                <div className="col-lg-1 col-sm-1 col-12"></div>
                <div className="col-lg-10 col-sm-10 col-12 text-center">
                    <div className="text-center mb-20"><span className="tag-1 bg-green-900">How does it works ?</span></div>
                    <h2 className="text-display-3 color-gray-900 mb-60">We are here for you <br className="d-lg-block d-none" />Lets Start the Journey Together</h2>
                </div>
                <div className="col-lg-1 col-sm-1 col-12"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-1 col-sm-12 col-12"></div>
                <div className="col-lg-10 col-sm-12 col-12">
                    <ul className="list-steps">
                    <li className="icon-asset1">
                        <div className="text-center block-step bg-9 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/support.png" /></div>
                        <h3 className="text-heading-5 mb-10">Get In Touch With Us</h3>
                        
                        </div>
                    </li>
                    <li className="icon-asset2">
                        <div className="text-center block-step hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/staff.png" /></div>
                        <h3 className="text-heading-5 mb-10">Meet Our Friendly Staff</h3>
                        
                        </div>
                    </li>
                    <li className="icon-asset3">
                        <div className="text-center block-step bg-5 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/goals.png" /></div>
                        <h3 className="text-heading-5 mb-10">Decide on the goals</h3>
                        
                        </div>
                    </li>
                    <li className="icon-asset4">
                        <div className="text-center block-step bg-5 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/enjoy.png" /></div>
                        <h3 className="text-heading-5 mb-10">Live life to the fullest</h3>
                       
                        </div>
                    </li>
                    <li>
                        <div className="text-center block-step bg-9 hover-up">
                        <div className="mb-30"><img src="/assets/imgs/template/ndis2.png" /></div>
                        <h3 className="text-heading-5 mb-10">Prepare a NDIS care plan</h3>
                        
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-1 col-sm-12 col-12"></div>
                </div>
            </div>
        </div>

                <section className="section-box section-green ">
                    <div className="container mt-70">
                        <h3 className="text-heading-1 color-white text-center mb-10">
                        Different People, Different Needs <br className="d-lg-block d-none" />Personalized Services for All 
                        </h3>
                    </div>
                    
                    
                </section>
            </Layout>

        </>
    )
}

export default GroupActivities;