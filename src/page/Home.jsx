import React, { useEffect, useState } from 'react'
import frame from "../assets/media/gallery-bg.png"
import img1 from "../assets/media/images/gallery-1.jpg"
import img2 from "../assets/media/images/gallery-2.jpg"
import img3 from "../assets/media/images/gallery-3.jpg"
import img4 from "../assets/media/images/gallery-4.jpg"
import img5 from "../assets/media/images/gallery-5.jpg"
import img6 from "../assets/media/images/gallery-6.jpg"
import blog1 from "../assets/media/images/blog1.jpg"
import blog2 from "../assets/media/images/blog2.jpg"
import play from "../assets/media/images/play.png"
import about from "../assets/media/images/about-img.png"


import mail from "../assets/media/images/mail.png"
import location from "../assets/media/images/location.png"
import camera from "../assets/media/images/camera.png"
import quote from "../assets/media/images/quote.png"
import client from "../assets/media/images/client.png"
import call from "../assets/media/images/call.png"

import youtube from "../assets/media/images/youtube.png"
import instagram from "../assets/media/images/instagram.png"
import twitter from "../assets/media/images/twitter.png"
import linkedin from "../assets/media/images/linkedin.png"
import facebook from "../assets/media/images/facebook.png"
import Navbar from '../components/Navbar'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom'

function Home() {
  const nevigate=useNavigate()


  return (
    <>
      <div class="hero_area">
        <Navbar />
        <div className='mt-5'>
          <div className='w-50'>
            <div className='row'>
              <div className='col-md-5 justify-content-center row'>
                <div className='usercard' onClick={()=>nevigate("background-color")}>
                  <Icon
                    icon="bxs:color"
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "transparent",
                      borderRadius: "6px",
                    }}
                    height={"6rem"}
                  />
                  <label className='mt-3'>Background Colour </label>
                  <label className='font_light_gry font_12 mt-1'>Snapsfix Effect</label>
                </div>
              </div>
              <div className='col-md-5 justify-content-center row'>
                <div className='usercard' onClick={()=>nevigate("background-remover")}>
                  <Icon
                    icon="arcticons:removebg"
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "transparent",
                      borderRadius: "6px",
                    }}
                    height={"6rem"}
                  />
                  <label className='mt-3'>Remove Bg</label>
                  <label className='font_light_gry font_12 mt-1'>Snapsfix Remover</label>
                </div>
              </div>
            </div>
            <div className=' row mt-4'>
              <div className='col-md-5 justify-content-center row'>
              <div className='usercard' onClick={()=>nevigate("image-enhancer")}>
                  <Icon
                    icon="pajamas:issue-type-enhancement"
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "transparent",
                      borderRadius: "6px",
                    }}
                    height={"5rem"}
                  />
                  <label className='mt-3'>Enhance Image</label>
                  <label className='font_light_gry font_12 mt-1'>Snapsfix Enhancer</label>
                </div>
              </div>
              <div className='col-md-5 justify-content-center row'>
                <div className='usercard' onClick={()=>nevigate("add-background")}>
                  <Icon
                    icon="mingcute:background-fill"
                    style={{
                      color: "#FFFFFF",
                      backgroundColor: "transparent",
                      borderRadius: "6px",
                    }}
                    height={"5rem"}
                  />
                  <label className='mt-3'>Add Background</label>
                  <label className='font_light_gry font_12 mt-1'>Snapsfix Editor</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="about_section layout_padding">
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <div class="detail-box">
                  <div class="heading_container">
                    <h2>
                      About Us
                    </h2>
                    <p>
                      Welcome to snapsfix, where we transform your photos with ease and precision. Our innovative photo editing tool is designed to help you take your images to the next level. Whether you want to remove or add backgrounds, or enhance your photos with special effects, our platform provides a range of features to make your editing process simple and effective.

                      We believe that everyone should have access to powerful, user-friendly photo editing tools. Our goal is to empower you to create stunning visuals effortlessly. Explore our features and see how easy it can be to achieve professional-quality results right from your computer or device.

                      Join us and experience the difference with snapsfix—where your images become masterpieces.
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="img-box">
            <div class="play_btn">
              <a href="#">
                <img src={play} alt="" />
              </a>
            </div>
            <img src={about} class="about-img" alt="" />
          </div>
        </section>

        <section class="gallery_section layout_padding-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 ml-auto">
                <div class="heading_container">
                  <h2>
                    Our Gallery
                  </h2>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                  </p>
                  <a href="">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="gallery_container">
            <div class="gallery_bg">
              <img src={frame} alt="" />
            </div>
            <div class="container">
              <div class="gallery_box">
                <div class="box b1">
                  <div class="img-box">
                    <img src={img1} alt="" />
                    <h5>
                      photography
                    </h5>
                  </div>
                </div>
                <div class="box b2">
                  <div class="img-box">
                    <img src={img2} alt="" />
                    <h5>
                      photography
                    </h5>
                  </div>
                  <div class="img-box">
                    <img src={img3} alt="" />
                    <h5>
                      photography
                    </h5>
                  </div>
                </div>
                <div class="box b3">
                  <div class="img-box">
                    <img src={img4} alt="" />
                    <h5>
                      photography
                    </h5>
                  </div>
                  <div class="img-box">
                    <img src={img5} alt="" />
                    <h5>
                      photography
                    </h5>
                  </div>
                </div>
                <div class="box b4">
                  <div class="img-box">
                    <img src={img6} alt="" />
                    <h5>
                      photography
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="blog_section layout_padding">
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <div class="detail-box">
                  <div class="heading_container">
                    <h2>
                      Letest Blog
                    </h2>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="blog_container">
            <div class="blog_bg">
              <img src={frame} alt="" />
            </div>
            <div class="container">
              <div class="blog_box">
                <div class="row">
                  <div class="col-md-6">
                    <div class="box b1">
                      <div class="img-box">
                        <img src={blog1} alt="" />
                      </div>
                      <div class="blog-detail">
                        <div class="blog_title">
                          <h5>
                            Best photography
                          </h5>
                          <div class="blog_post">
                            <h6>
                              Post By: Pic studio
                            </h6>
                            <h6>
                              16-01-2020
                            </h6>
                          </div>
                        </div>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="box b2">
                      <div class="img-box">
                        <img src={blog2} alt="" />
                      </div>
                      <div class="blog-detail">
                        <div class="blog_title">
                          <h5>
                            Photography
                          </h5>
                          <div class="blog_post">
                            <h6>
                              Post By: Pic studio
                            </h6>
                            <h6>
                              16-01-2020
                            </h6>
                          </div>
                        </div>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="client_section layout_padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 ml-auto">
                <div class="heading_container">
                  <h2>
                    What Says Customer
                  </h2>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="client_container">
            <div class="client_bg">
              <img src={frame} alt="" />
            </div>
            <div class="container">
              <div class="client_box">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="box b1">
                      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="client_content-box layout_padding">
                              <div class="img-box">
                                <img src={client} alt="" />
                              </div>
                              <div class="detail-box">
                                <h4>
                                  Plio Dorak
                                </h4>
                                <p>
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                                </p>
                                <img src={quote} alt="" />
                              </div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="client_content-box layout_padding">
                              <div class="img-box">
                                <img src={client} alt="" />
                              </div>
                              <div class="detail-box">
                                <h4>
                                  Plio Dorak
                                </h4>
                                <p>
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                                </p>
                                <img src={quote} alt="" />
                              </div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="client_content-box layout_padding">
                              <div class="img-box">
                                <img src="images/client.png" alt="" />
                              </div>
                              <div class="detail-box">
                                <h4>
                                  Plio Dorak
                                </h4>
                                <p>
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                                </p>
                                <img src={quote} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="box b2">
                      <div class="camera_img-box">
                        <img src={camera} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section class="info_section ">
          <div class="info_container layout_padding-top">
            <div class="container">
              <div class="heading_container">
                <h2>
                  Contact Us
                </h2>
              </div>
              <div class="info_main">
                <div class="row">
                  <div class="col-md-4 col-lg-3">
                    <div class="info_contact ">
                      <a href="#" class="link-box">
                        <div class="img-box">
                          <img src={location} alt="" />
                        </div>
                        <div class="detail-box">
                          <h6>
                            Location
                          </h6>
                        </div>
                      </a>
                      <a href="#" class="link-box">
                        <div class="img-box">
                          <img src={mail} alt="" />
                        </div>
                        <div class="detail-box">
                          <h6>
                            demo@gmail.com
                          </h6>
                        </div>
                      </a>
                      <a href="#" class="link-box">
                        <div class="img-box">
                          <img src={call} alt="" />
                        </div>
                        <div class="detail-box">
                          <h6>
                            Call +01 1234567890
                          </h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-2 col-lg-3">
                    <div class="info_link-box">
                      <ul>
                        <li class=" ">
                          <a class="" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="">
                          <a class="" href="about.html">About </a>
                        </li>
                        <li class="">
                          <a class="" href="gallery.html">Gallery </a>
                        </li>
                        <li class="">
                          <a class="" href="blog.html">Blog </a>
                        </li>
                        <li class="">
                          <a class="" href="testimonial.html">Testimonial </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6 ">
                    <div class="social_box">
                      <a href="#">
                        <img src={facebook} alt="" />
                      </a>
                      <a href="#">
                        <img src={twitter} alt="" />
                      </a>
                      <a href="#">
                        <img src={linkedin} alt="" />
                      </a>
                      <a href="#">
                        <img src={instagram} alt="" />
                      </a>
                      <a href="#">
                        <img src={youtube} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <footer class="footer_section ">
          <div class="container">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved. Design by
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </div>
        </footer>
      </div>

    </>
  )
}

export default Home