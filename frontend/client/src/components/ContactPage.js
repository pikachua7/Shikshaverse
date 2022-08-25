// import React from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// function ContactPage() {
//   const [index, setIndex] = useState(0)

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex)
//   }
//   return (
//     <>
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img className="d-block w-100" src="img/carousel-1.jpg" alt="First slide" />
//           <Carousel.Caption>
//             <h2 style={{ color: 'white' }}>A platform for Indian Colleges</h2>
//             <p>Tour Indian colleges virtually.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src="img/carousel-2.jpg" alt="Second slide" />

//           <Carousel.Caption>
//             <h2 style={{ color: 'white' }}>College Facilities</h2>
//             <p>View College Facilities from the comfort of your homes.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src="img/carousel-3.jpg" alt="Third slide" />

//           <Carousel.Caption>
//             <h2 style={{ color: 'white' }}>Experience the college atmosphere</h2>
//             <p>View the college atmosphere virtually like never before.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       <div className="container-xxl py-5">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
//               <div className="service-item text-center pt-3">
//                 <div className="p-4">
//                   <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
//                   <h5 className="mb-3">Indian Colleges</h5>
//                   <p>We aim to bring all the Indian Colleges of every domain on our platform </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
//               <div className="service-item text-center pt-3">
//                 <div className="p-4">
//                   <i className="fa fa-3x fa-globe text-primary mb-4"></i>
//                   <h5 className="mb-3">Access Anywhere</h5>
//                   <p>Take a virtual tour of your desired college located anywhere in India.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
//               <div className="service-item text-center pt-3">
//                 <div className="p-4">
//                   <i className="fa fa-3x fa-home text-primary mb-4"></i>
//                   <h5 className="mb-3">Home Comfort</h5>
//                   <p>Avoid hectic travels to experience the college atmosphere.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
//               <div className="service-item text-center pt-3">
//                 <div className="p-4">
//                   <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
//                   <h5 className="mb-3">Our Mission</h5>
//                   <p>
//                     We wish all citizens of the country should be able to tour their desired
//                     college.{' '}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="contaiber-lg py-5">
//         <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//           <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
//           <h5 className="mb-5">Contact For Any Query</h5>
//         </div>

//         <div className="container">
//           <p>Please Submit your details so we could get in touch with you.</p>
//           <Form>
//             <Form.Group>
//               <Form.Label>Name:</Form.Label>
//               <Form.Control type="text" placeholder="Enter your full name" />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Email address:</Form.Label>
//               <Form.Control type="email" placeholder="Enter your email address" />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>City/Town/Village : </Form.Label>
//               <Form.Control type="number" placeholder="Enter your City/Town/Village" />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Queries : </Form.Label>
//               <Form.Control type="number" placeholder="Enter your Queries" />
//             </Form.Group>

//             <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
//               Click here to submit form
//             </Button>
//           </Form>
//         </div>
//       </div>

      

//       <div
//         className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
//         data-wow-delay="0.1s"
//       >
//         <div className="container py-5">
//           <div className="row g-5">
//             <div className="col-lg-3 col-md-6">
//               <h4 className="text-white mb-3">Quick Link</h4>
//               <a className="btn btn-link" href="">
//                 About Us
//               </a>
//               <a className="btn btn-link" href="">
//                 Contact Us
//               </a>
//               <a className="btn btn-link" href="">
//                 Privacy Policy
//               </a>
//               <a className="btn btn-link" href="">
//                 Terms and Condition
//               </a>
//               <a className="btn btn-link" href="">
//                 FAQs and Help
//               </a>
//             </div>
//             <div className="col-lg-3 col-md-6">
//               <h4 className="text-white mb-3">Contact</h4>
//               <p className="mb-2">
//                 <i className="fa fa-map-marker-alt me-3"></i>Sample Address
//               </p>
//               <p className="mb-2">
//                 <i className="fa fa-phone-alt me-3"></i>xxxxxxxxxxx
//               </p>
//               <p className="mb-2">
//                 <i className="fa fa-envelope me-3"></i>info@example.com
//               </p>
//               <div className="d-flex pt-2">
//                 <a className="btn btn-outline-light btn-social" href="">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a className="btn btn-outline-light btn-social" href="">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a className="btn btn-outline-light btn-social" href="">
//                   <i className="fab fa-youtube"></i>
//                 </a>
//                 <a className="btn btn-outline-light btn-social" href="">
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="copyright">
//             <div className="row">
//               <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
//                 &copy;{' '}
//                 <a className="border-bottom" href="#">
//                   Your Site Name
//                 </a>
//                 , All Right Reserved.
//               </div>
//               <div className="col-md-6 text-center text-md-end">
//                 <div className="footer-menu">
//                   <a href="">Home</a>
//                   <a href="">Cookies</a>
//                   <a href="">Help</a>
//                   <a href="">FQAs</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
//         <i className="bi bi-arrow-up"></i>
//       </a>
//     </>
//   )
// }

// export default ContactPage
