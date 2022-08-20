import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
function HomePage() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src="img/carousel-1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h2 style={{ color: 'white' }}>A platform for Indian Colleges</h2>
            <p>Tour Indian colleges virtually.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="img/carousel-2.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h2 style={{ color: 'white' }}>College Facilities</h2>
            <p>View College Facilities from the comfort of your homes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="img/carousel-3.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h2 style={{ color: 'white' }}>Experience the college atmosphere</h2>
            <p>View the college atmosphere virtually like never before.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
                  <p>
                    We wish all citizens of the country should be able to tour their desired
                    college.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl py-5">
        <h5 className="text-primary">What is Shikshaverse ?</h5>
        <p>
          Our team Aatmanirbhar has proposed the solution “Shikshaverse” for the given problem
          statement by AICTE. The term “Shikshaverse” is inspired by the term “Metaverse” which is a
          future evolution of the Internet based on shared virtual worlds. Metaverse combines the
          capabilities of virtual reality, Blockchain, and NFT technology to create a virtual space.
          The front end of the system “Shikshaverse” will be developed using ReactJs, HTML, CSS, and
          JavaScript. The smart contracts required at the backend would be developed using solidity
          programming language along with the necessary frameworks required for blockchain
          technology
        </p>
        <p>
          Our vision is to bring all the institutions from the Bharat map on a single virtual
          platform with “Shikshaverse “by making use of the in-demand technology of Metaverse and
          Blockchain.
        </p>
        <Link to="/map" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
          Start Tour
        </Link>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary px-3">Our Team</h6>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/member.jpg" alt="" />
                </div>
                <div className="position-relative d-flex justify-content-center">
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
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
                  <img className="img-fluid" src="img/member.jpg" alt="" />
                </div>
                <div className="position-relative d-flex justify-content-center">
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
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
                  <img className="img-fluid" src="img/member.jpg" alt="" />
                </div>
                <div className="position-relative d-flex justify-content-center">
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
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
                  <img className="img-fluid" src="img/member.jpg" alt="" />
                </div>
                <div className="position-relative d-flex justify-content-center">
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
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
            <h6 className="section-title text-center text-primary px-3">Testimonial</h6>
            <h5 className="mb-5">Our Users Say !</h5>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/member.jpg"
                style={{ width: '80px', height: '80px' }}
              />
              <h5 className="mb-0">User Name</h5>
              <p>Location</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">User Review</p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/member.jpg"
                style={{ width: '80px', height: '80px' }}
              />
              <h5 className="mb-0">User Name</h5>
              <p>Location</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">User Review</p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/member.jpg"
                style={{ width: '80px', height: '80px' }}
              />
              <h5 className="mb-0">User Name</h5>
              <p>Location</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">User Review</p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src="img/member.jpg"
                style={{ width: '80px', height: '80px' }}
              />
              <h5 className="mb-0">User Name</h5>
              <p>Location</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">User Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms and Condition
              </a>
              <a className="btn btn-link" href="">
                FAQs and Help
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Sample Address
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>xxxxxxxxxxx
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{' '}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
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

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  )
}

export default HomePage
