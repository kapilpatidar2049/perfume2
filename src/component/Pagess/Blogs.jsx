import React, { useRef, useEffect, useState } from "react";
import "../Css/Blogs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog_img1 from "../../assets/insta4.jpg";
import blog_img2 from "../../assets/insta3.jpg";
import blog_img3 from "../../assets/insta3.jpg";
import home_video from "../../video/video.mp4";
import tips_video1 from "../../video/whyvideos3.mp4";
import tips_video2 from "../../video/video.mp4";
import tips_video3 from "../../video/home_video.mp4";
import tips_image1 from "../../assets/kid.png";
import tips_image2 from "../../assets/prfm1.png";
import tips_image3 from "../../assets/prfm1.png";

const Blogs = () => {
  const [checked, setChecked] = useState(false);
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = !checked;
    }
  }, [checked]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      video.currentTime = 0; // Reset video to start
      video.play(); // Play video again
    };
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);
  
  window.addEventListener("scroll", function () {
    var secondSection = document.getElementById("second-section");
    var firstSection = document.getElementById("first-section");
    var footer = document.getElementById('footer');
    var secondSectionHeight = secondSection.offsetHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;
    var firstSectionHeight = firstSection.offsetHeight;
    var footerOffset = footer.offsetTop;
    var stickyThreshold = 200;
    console.log(footerOffset);
    console.log(secondSectionHeight);

    // Check if we have scrolled past the first section but not reached the footer
    if (scrollPosition >= firstSectionHeight - stickyThreshold && scrollPosition < footerOffset-500) {
         secondSection.classList.add("sticky");
    } else {
        secondSection.classList.remove("sticky");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    adjustStickySectionHeight();
});

function adjustStickySectionHeight() {
    var secondSection = document.getElementById("second-section");
    var firstSection = document.getElementById("first-section");
    var firstSectionHeight = firstSection.offsetHeight;
    var stickyThreshold = 200; 
    secondSection.style.maxHeight = (firstSectionHeight - stickyThreshold) + "px";
}


  return (
    <>
      <div className="container mt-0 about_container">
        {/****** Heading ************/}
        {/*  <div className="blog_heading">
                     <img src={purefume_logo} />
                </div> */}
        {/************ Heading End ************/}

        {/********* Highlight ***********/}
        
          <div className="highlight_heading mt-5 text-center">
            <h1>HIGHLIGHT OF THE MONTH</h1>

            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row blog_roww">
                        <div className="col-lg-6 blog_image">
                          <img src={blog_img1} className="" />
                        </div>
                        <div className="col-lg-6 blog_text">
                          <h2>TOP SECRET PERFUME HACKS YOU NEED TO KNOW</h2>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Odio quam iste eaque pariatur enim. Animi
                            natus ut aspernatur deleniti eaque excepturi itaque
                            vitae ea neque qui. Commodi facilis quibusdam et
                            voluptas atque voluptatem aperiam quis eos
                            necessitatibus? Reiciendis, earum illum! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                            Molestiae, rem alias harum tempore esse quisquam!
                            Voluptate culpa dolorem repudiandae sed adipisci
                            velit sunt hic saepe ratione. Rem sed officiis enim.
                          </p>
                          <button
                            type="button"
                            className="blog_explore_button btn-outline-primary"
                          >
                            Explore Now
                          <i className="fa-solid fa-greater-than explore_btn" />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row blog_roww">
                        <div className="col-lg-6 blog_image">
                        <img src={blog_img2} className="" />
                        </div>
                        <div className="col-lg-6 blog_text">
                          <h2>NEW SPRING SUMMER 2024 TRENDS IN NICHE</h2>
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Odio quam iste eaque pariatur enim. Animi
                            natus ut aspernatur deleniti eaque excepturi itaque
                            vitae ea neque qui. Commodi facilis quibusdam et
                            voluptas atque voluptatem aperiam quis eos
                            necessitatibus? Reiciendis, earum illum! Lorem ipsum
                            dolor, sit amet consectetur adipisicing elit. Ab
                            quam a corporis, magnam ullam magni accusantium
                            consectetur, distinctio doloremque sit esse,
                            recusandae at facere voluptatem perspiciatis earum
                            dolores expedita unde.{" "}
                          </p>
                          <button
                            type="button"
                            className="blog_explore_button btn-outline-primary"
                          >
                            Explore Now{" "}
                            <i className="fa-solid fa-greater-than explore_btn" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="blog_prvus_btn carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>

              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="blog_next_btn carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/******** Highlight End **************/}

          {/*********** Trending product ********/}
          <div className="trending_product">
            <h1>TRENDING PRODUCT</h1>
          </div>
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6 treading_text">
                        <h2>NEW SPRING SUMMER 2024 TRENDS IN NICHE</h2>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Odio quam iste eaque pariatur enim. Animi natus
                          ut aspernatur deleniti eaque excepturi itaque vitae ea
                          neque qui. Commodi facilis quibusdam et voluptas atque
                          voluptatem aperiam quis eos necessitatibus?
                          Reiciendis, earum illum! Lorem ipsum dolor, sit amet
                          consectetur adipisicing elit. Ab quam a corporis,
                          magnam ullam magni accusantium consectetur, distinctio
                          doloremque sit esse, recusandae at facere voluptatem
                          perspiciatis earum dolores expedita unde.
                        </p>
                        <button
                          type="button"
                          class="trend_button btn-outline-primary"
                        >
                          {" "}
                          Explore Now{" "}
                          <i className="fa-solid fa-greater-than explore_btn" />
                        </button>
                      </div>
                      <div className="col-lg-6 treading_image">
                        <img src={blog_img3} className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12"></div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-6 treading_text">
                            <h2>NEW SPRING SUMMER 2024 TRENDS IN NICHE</h2>
                            <p>
                              {" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Odio quam iste eaque pariatur
                              enim. Animi natus ut aspernatur deleniti eaque
                              excepturi itaque vitae ea neque qui. Commodi
                              facilis quibusdam et voluptas atque voluptatem
                              aperiam quis eos necessitatibus? Reiciendis, earum
                              illum! Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Ab quam a corporis, magnam ullam
                              magni accusantium consectetur, distinctio
                              doloremque sit esse, recusandae at facere
                              voluptatem perspiciatis earum dolores expedita
                              unde.{" "}
                            </p>
                            <button
                              type="button"
                              class="trend_button btn-outline-primary"
                            >
                              Explore Now{" "}
                              <i class="fa-solid fa-greater-than"></i>
                            </button>
                          </div>
                          <div className="col-6 treading_image">
                            <img src={blog_img3} className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="trending_prvus_btn carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="trending_next_btn carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          {/******* Trending product End *******/}

          {/******** Tips and tricks *******/}
          <div  className="row tips" id="first-section">
            <div  className="col-lg-8" >
              <h1>TRENDING TIPS AND TRICKS</h1>
              <div className="row" >
                <div className="col-lg-8 tip_trick_second_text1">
                  <p>
                    Learn more about how to best use our products, and how you
                    can use them to achieve your signature scent style.
                  </p>
                </div>
                <div className="col-lg-4">
                  <button
                    type="button"
                    class="tips_explore_button btn-outline-primary"
                  >
                    Browse more <i class="fa-solid fa-greater-than"></i>
                  </button>
                </div>
              </div>
              <div className="row" >
                <div className="col-lg-4 tips_tricks_images_section">
                  <img src={tips_image1} className="img-fluid" />
                  <button
                    type="button"
                    class="tips_and_tricks_button btn-outline-primary"
                  >
                    TIPS AND TRICKS{" "}
                  </button>
                  <h3>
                    THE SECRET BEHIND SUSTAINABILITY IN THE PERFUME INDUSTRY
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia asperiores dicta minus, aperiam ipsam optio
                    repellendus facere ducimus suscipit doloremque. Omnis quasi
                    ut inventore blanditiis quas, animi natus doloribus 
                  </p>
                </div>
                <div className="col-lg-4 tips_tricks_images_section">
                  <img src={tips_image2} className="img-fluid" />
                  <button
                    type="button"
                    class="tips_and_tricks_button btn-outline-primary"
                  >
                    TIPS AND TRICKS{" "}
                  </button>
                  <h3>
                    THE SECRET BEHIND SUSTAINABILITY IN THE PERFUME INDUSTRY
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia asperiores dicta minus, aperiam ipsam optio
                    repellendus facere ducimus suscipit doloremque. Omnis quasi
                    ut inventore blanditiis quas, animi natus doloribus
                  </p>
                </div>
                <div className="col-lg-4 tips_tricks_images_section">
                  <img src={tips_image3} className="img-fluid" />
                  <button
                    type="button"
                    class="tips_and_tricks_button btn-outline-primary"
                  >
                    TIPS AND TRICKS{" "}
                  </button>
                  <h3>
                    THE SECRET BEHIND SUSTAINABILITY IN THE PERFUME INDUSTRY
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia asperiores dicta minus, aperiam ipsam optio
                    repellendus facere ducimus suscipit doloremque. Omnis quasi
                    ut inventore blanditiis quas, animi natus doloribus
                  </p>
                </div>
              </div>

              <h1>GET TO KNOW ABOUT PUREFUME</h1>
              <div className="row">
                <div className="col-lg-8 tip_trick_text1">
                  <p>
                    Learn more about how to best use our products, and how you
                    can use them to achieve your signature scent style.
                  </p>
                </div>
                <div className="col-lg-4">
                  <button
                    type="button"
                    class="tips_explore_button btn-outline-primary"
                  >
                    Browse more <i class="fa-solid fa-greater-than"></i>
                  </button>
                </div>
              </div>

              <div className="row tt_row">
                <div className="col-lg-4 trick_vdo_nd_text">
                  <video
                    className="tips_video_section"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                  >
                    <source src={tips_video1} type="video/mp4" />
                  </video>
                  <button
                    type="button"
                    class="brand_education_button btn-outline-primary"
                  >
                    BRAND EDUCATION{" "}
                  </button>
                  <h3>
                    THE SECRET BEHIND SUSTAINABILITY IN THE PERFUME INDUSTRY
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia asperiores dicta minus, aperiam ipsam optio
                    repellendus facere ducimus suscipit doloremque. Omnis quasi
                    ut inventore blanditiis quas, animi natus doloribus
                  </p>
                </div>
                <div className="col-lg-4 trick_vdo_nd_text">
                  <video
                    className="tips_video_section"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                  >
                    <source src={tips_video2} type="video/mp4" />
                  </video>
                  <button
                    type="button"
                    class="brand_education_button btn-outline-primary"
                  >
                    BRAND EDUCATION{" "}
                  </button>
                  <h3>BESPOKE SCENT CAR DIFFUSER</h3>
                  <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia asperiores dicta minus, aperiam ipsam optio
                  repellendus facere ducimus suscipit doloremque. Omnis quasi
                  ut inventore blanditiis quas, animi natus doloribus.
                  </p>
                </div>
                <div className="col-lg-4 trick_vdo_nd_text">
                  <video
                    className="tips_video_section"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                  >
                    <source src={tips_video3} type="video/mp4" />
                  </video>
                  <button
                    type="button"
                    class="brand_education_button btn-outline-primary"
                  >
                    BRAND EDUCATION{" "}
                  </button>
                  <h3>HOW TO CREATE YOUR BESPOKE DUAL CANDLE</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia asperiores dicta minus, aperiam ipsam optio
                  repellendus facere ducimus suscipit doloremque. Omnis quasi
                  ut inventore blanditiis quas, animi natus doloribus
                  </p>
                </div>
              </div>
            </div>
            <div id="second-section" className="col-lg-4 tips_image">
              <div className="sticky-wrapper">
                <div className="sticky_tips">
                  <div className="image-container">
                      {/* <img src={tips} alt="Tips Image" />*******/}
                    <div className="overlay_blog"></div>
                    <div className="text-content">
                      <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                      <p>
                        Subscribe to our mailing list to keep up with new
                        features, scent inspirations and updates from PUREFUME.
                      </p>
                      <button
                        type="button"
                        class="tips1_explore_button btn-outline-primary"
                      >
                        Subscribe
                      </button>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          checked={checked}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          className="tips-form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I’ve read and accept all Terms and Conditions and
                          Privacy Policy
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
          
          {/******** Tips and tricks End *********/}
      </div>
    </>
  );
};

export default Blogs;
