import React, {useEffect, useState } from "react";
import "../Css/AboutUs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import rewriting_img1 from "../../assets/direct.png";
import rewriting_img2 from "../../assets/putting.png";
import rewriting_img3 from "../../assets/clean.png";
import rewriting_img4 from "../../assets/haute.png";

const AboutUs = () => {
  const [data, setData] = useState(null); 

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ HER PAGE FETCH APIS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.101:2000/api/about-page"
        );

        setData(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err, "Server Error");
      }
    };
    fetchData();
  }, []);

  // @@@@@@@@@@@@@@@@@ 1st Slider api

  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.101:2000/api/about-slider-section4/"
        );
        console.log(response, "Full response sec 5");

        if (response.data && Array.isArray(response.data.data)) {
          const sec1Slider = response.data.data;
          console.log(sec1Slider, "Sec1 res");
          setSliderData(sec1Slider);
        } else {
          console.log("Response data structure is not as expected");
        }
      } catch (err) {
        console.log(err, "Server Error");
      }
    };

    fetchData();
  }, []);

  // @@@@@@@@@@@@@@@@@ 2nd Slider api

  const [sliderData2, setSliderData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.101:2000/api/about-slider-section6"
        );
        console.log(response, "Full response sec 5");

        if (response.data && Array.isArray(response.data.data)) {
          const sec2Slider = response.data.data;
          console.log(sec2Slider, "Sec1 res");
          setSliderData2(sec2Slider);
        } else {
          console.log("Response data structure is not as expected");
        }
      } catch (err) {
        console.log(err, "Server Error");
      }
    };

    fetchData();
  }, []);

  const purefume_logo = {
    backgroundImage:
      data && data.image_logo ? `url(${data.image_logo})` : "none",
  };
  const about_banner_img = {
    backgroundImage:
      data && data.image_logo ? `url(${data.image_logo})` : "none",
  };
  return (
    <>
      <div className="container mt-0 p-0">
        {/************** Heading ***************/}
        <div className="three-container">
          {/* <div className="about_heading" style={purefume_logo}>
                    <img src={purefume_logo} />
                </div> */}
          {/************** Heading ***************/}

          {/******************************* about banner and content ***************************/}
          <div className="aboutpage" style={about_banner_img}>
            <div className="about_banner_heading mt-5">
              <div className="row mt-5 bg-row">
                <div className="col-lg-6 mt-5">
                  <h1>
                    {data && data.about_banner_heading
                      ? data.about_banner_heading
                      : ""}
                  </h1>
                  <p>
                    {data && data.about_banner_content
                      ? data.about_banner_content
                      : ""}
                  </p>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
          {/***************************** about banner and content end **************************/}

          {/******************************* second section (Our founder ) ***************************/}
          <div className="container  mt-4">
            <div className="row ">
              <div className="col-lg-6 our-founder">
                {data && data.our_img ? (
                  <img src={data.our_img} alt="Dynamic" />
                ) : (
                  <p>Image not available</p> // Fallback content if the image is not available // <img src={imgour} />
                )}
              </div>
              <div className="col-lg-6 our-founder-content">
                <h1>{data && data.our_heading ? data.our_heading : ""}</h1>
                <p>{data && data.our_content ? data.our_content : ""}</p>
              </div>
            </div>
          </div>
        </div>
        {/***************************** second section end (Our founder ) ***************************/}

        {/*********************************** unique brand slider****************************/}
        <div className="container">
          <div className="uniq">
            <h1>{data && data.uniq_heading ? data.uniq_heading : ""}</h1>
          </div>
        </div>

        {/*
            <div id="carouselExample" class="carousel slide py-0">
                        <div class="carousel-inner">
                        <div className="carousel-inner">
                        <div className="row">
                        {sliderData.map((sliderItem, index) => (
                          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={sliderItem._id}>
                            
                              <div className="col-lg-6">
                                <div className="row bg_sldr1">
                                  <div className="col-7 sldr_text">
                                    <div className="about_logo">
                                      <img src={sliderItem.uniq_logo_img1} alt="Logo" />
                                    </div>
                                    <h4>{sliderItem.uniq_heading1}</h4>
                                    <p>{sliderItem.uniq_content}</p>
                                  </div>
                                  <div className="col-5 sldr_img">
                                    <img src={sliderItem.uniq_img1} alt="Slider Image" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="row bg_sldr">
                                  <div className="col-7 sldr_text">
                                    <div className="about_logo">
                                      <img src={uniq_logo_img4} alt="Logo" />
                                    </div>
                                    <h4>ENGINEERED CRAFTSMANSHIP</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quam iste eaque pariatur enim. Animi natus ut aspernatur deleniti eaque excepturi itaque vitae ea neque qui. Commodi facilis quibusdam et voluptas atque voluptatem aperiam quis eos necessitatibus? Reiciendis, earum illum!</p>
                                  </div>
                                  <div className="col-5 sldr_img1">
                                    <img src={uniq_img2} alt="Slider Image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                        
                        ))}
                          </div>
                      </div>

                               
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="prvus_btn carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="next_btn carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                
            </div>*/}

        <div id="carouselExample" className="carousel slide py-0">
          <div className="carousel-inner">
            {sliderData.map((sliderItem, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={sliderItem._id}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row bg_sldr1">
                      <div className="col-7 sldr_text">
                        <div className="about_logo">
                          <img src={sliderItem.uniq_logo_img1} alt="Logo" />
                        </div>
                        <h4>{sliderItem.uniq_heading1}</h4>
                        <p>{sliderItem.uniq_content}</p>
                      </div>
                      <div className="col-5 sldr_img">
                        <img src={sliderItem.uniq_img1} alt="Slider Image" />
                      </div>
                    </div>
                  </div>
                  {sliderData[index + 1] && (
                    <div className="col-lg-6">
                      <div className="row bg_sldr">
                        <div className="col-7 sldr_text">
                          <div className="about_logo">
                            <img
                              src={sliderData[index + 1].uniq_logo_img1}
                              alt="Logo"
                            />
                          </div>
                          <h4>{sliderData[index + 1].uniq_heading1}</h4>
                          <p>{sliderData[index + 1].uniq_content}</p>
                        </div>
                        <div className="col-5 sldr_img">
                          <img
                            src={sliderData[index + 1].uniq_img1}
                            alt="Slider Image"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="prvus_btn carousel-control-prev-icon"
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
              class="next_btn carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        

        {/************************************ unique brand end *******************************/}

        {/* <div className="container"> */}
        {/************************************ we are rewriting  *******************************/}
        <div className="rewriting_heading">
          <h1>
            {data && data.rewriting_heading ? data.rewriting_heading : ""}
          </h1>
        </div>

        {/* multiple data store */}
        <div className="row">
          <div className="col-lg-6 rewriting_image">
            {data && data.uniq_logo_img1 ? (
              <img src={data.uniq_logo_img1} alt="Dynamic" />
            ) : (
              <p>Image not available</p> // Fallback content if the image is not available // <img src={imgrewriting} />
            )}
          </div>
          <div className="col-lg-6 rewriting_content">
            <div className="rewriting_content">
              <div className="row">
                <div className="col-2 rewriting_logo">
                  <img src={rewriting_img1} />
                </div>

                <div className="col-10 rewriting_logo_text">
                  <h5>DIRECT ACCESS TO CREATION</h5>
                  <p>
                    Giving you access to natural, potent, and high-quality
                    perfume essence... and complete freedom to express your
                    unique scent style.
                  </p>
                </div>
              </div>
            </div>

            <div className="rewriting_content-1">
              <div className="row">
                <div className="col-2 rewriting_logo">
                  <img src={rewriting_img2} />
                </div>

                <div className="col-10 rewriting_logo_text">
                  <h5>PUTTING YOU IN CONTROL</h5>
                  <p>
                    Our AI-Powered app will guide you in your creation,
                    harmonising your personality to your favourite scents.
                  </p>
                </div>
              </div>
            </div>

            <div className="rewriting_content-1">
              <div className="row">
                <div className="col-2 rewriting_logo">
                  <img src={rewriting_img3} />
                </div>

                <div className="col-10 rewriting_logo_text">
                  <h5>CLEAN EAU DE PARFUM</h5>
                  <p>
                    All our perfumes contain 21% perfume concentrate - one of
                    the highest in the industry. 100% cruelty-free, no
                    preservatives, GMO, CRM, phthalates, or paraffin.
                  </p>
                </div>
              </div>
            </div>

            <div className="rewriting_content-1">
              <div className="row">
                <div className="col-2 rewriting_logo">
                  <img src={rewriting_img4} />
                </div>

                <div className="col-10 rewriting_logo_text">
                  <h5>HAUTE COUTURE NATURAL ESSENCES</h5>
                  <p>
                    All scents designed around iconic natural ingredients, and
                    can be blended in any combination to stand out from the
                    crowd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/************************************ we are rewriting  End*******************************/}

        {/************************************ world renowned *******************************/}
        <div className="row world_renowned">
          <div className="col-lg-6 col-md-12 col-sm-12 world_renowned_text">
            <h1>
              {data && data.world_renowned_heading
                ? data.world_renowned_heading
                : ""}
            </h1>
            <p>
              {data && data.world_renowned_content
                ? data.world_renowned_content
                : ""}
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 world_renowned_slider">
          <div id="carouselExampleIndicators" class="carousel slide">
          <div class="world_btn carousel-indicators">
            {sliderData2.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div class="w_slider carousel-inner">
            {sliderData2.map((sliderItem1, index) => (
              <div
                key={sliderItem1._id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img src={sliderItem1.image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              class="w-button carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              class="w-button1 carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        
          </div>
        </div>
        {/************************************ world renowned end*******************************/}
        {/* </div> */}

        {/*********************************** join our team ********************************/}
        <div className="join_our_team_container container">
          <div className="container join_team_text ">
            <h5>
              {data && data.join_team_text_heading
                ? data.join_team_text_heading
                : ""}
            </h5>
            <h1>
              {data && data.join_team_text_content
                ? data.join_team_text_content
                : ""}
            </h1>
            <p>
              {data && data.join_our_team_btn_text
                ? data.join_our_team_btn_text
                : ""}
            </p>

            <button type="button" class="join_our_team_btn btn-primary">
              {data && data.join_team_text_heading1
                ? data.join_team_text_heading1
                : ""}
            </button>
          </div>
        </div>
        {/******************************** join our team end *******************************/}
      </div>
    </>
  );
};

export default AboutUs;
