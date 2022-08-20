import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    
    <>
    
    <div className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative" >
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-1.jpg" alt="img-1" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">The Easy Way to View Your Desired College</h5>
                                <h1 className="display-3 text-white animated slideInDown">Experience the Virtual Tour Like Never Before</h1>
                                <p className="fs-5 text-white mb-4 pb-2">शिक्षाVerse enables you to take a virtual tour of your desired college in India.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Start Tour</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(24, 29, 56, .7)'}}>
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Explore Colleges In India</h5>
                                <h1 className="display-3 text-white animated slideInDown">Take the tour of College from your home.</h1>
                                <p className="fs-5 text-white mb-4 pb-2">By just few clicks, we enable you to view your desired college at the comfort of your home.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">How does it Work ?</a>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


  
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 className="mb-3">Indian Colleges</h5>
                            <p>We aim to bring all the Indian Colleges of every domain on our platform </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 className="mb-3">Access Anywhere</h5>
                            <p>Take a virtual tour of your desired college located anywhere in India.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 className="mb-3">Home Comfort</h5>
                            <p>Avoid hectic travels to experience the college atmosphere.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 className="mb-3">Our Mission</h5>
                            <p>We wish all citizens of the country should be able to tour their desired college.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    

    <div className="container-xl py-5">
        <p>Our team Aatmanirbhar has proposed the solution “Shikshaverse” for the given problem statement by AICTE. 
            The term “Shikshaverse” is inspired by the term “Metaverse” which is a future evolution of the Internet based on shared virtual worlds. 
            Metaverse combines the capabilities of virtual reality, Blockchain, and NFT technology to create a virtual space.
             The front end of the system “Shikshaverse” will be developed using ReactJs, HTML, CSS, and JavaScript. 
             The smart contracts required at the backend would be developed using solidity programming language along 
             with the necessary frameworks required for blockchain technology</p>
             <p>Our vision is to bring all the institutions from the Bharat map on a single virtual
                 platform with “Shikshaverse “by making use of the in-demand technology of Metaverse and Blockchain.</p>
        <Link to="/map" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Start Tour</Link>
    </div>
    

    


    
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Our Team</h6>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/member.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center"  >
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Member Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/member.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Member Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/member.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Member Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/member.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" >
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Member Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 className="mb-5">Our Users Say !</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/member.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">User Name</h5>
                    <p>Location</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">User Review</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/member.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">User Name</h5>
                    <p>Location</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">User Review</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/member.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">User Name</h5>
                    <p>Location</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">User Review</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/member.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">User Name</h5>
                    <p>Location</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">User Review</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        

    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Quick Link</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Privacy Policy</a>
                    <a className="btn btn-link" href="">Terms and Condition</a>
                    <a className="btn btn-link" href="">FAQs and Help</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Sample Address</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>xxxxxxxxxxx</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
               

                
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                       
                      
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>


   
   
   
    </>
  )
}

export default HomePage