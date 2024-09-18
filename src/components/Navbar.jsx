import React from 'react'

function Navbar() {
  return (
    <>
      <header class="header_section">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container d-block">
              <div class="main_nav_menu">
                <div class="fk_width">
                  <div class="custom_menu-btn">
                    <button onclick="openNav()">
                      <span class="s-1"> </span>
                      <span class="s-2"> </span>
                      <span class="s-3"> </span>
                    </button>
                  </div>
                  <div id="myNav" class="overlay">
                    <div class="overlay-content">
                      <a class="" href="index.html">Home <span class="sr-only">(current)</span></a>
                      <a class="" href="about.html">About </a>
                      <a class="" href="gallery.html">Gallery </a>
                      <a class="" href="blog.html">Blog </a>
                      <a class="" href="testimonial.html">Testimonial </a>
                    </div>
                  </div>
                </div>
                <a class="navbar-brand" href="index.html">
                  <span>
                    Snapsfix
                  </span>
                </a>
                <div class="user_option">
                  <a href="#">
                    login
                  </a>
                  <form class="form-inline ">
                    <button class="btn  nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </header>
    </>
  )
}

export default Navbar