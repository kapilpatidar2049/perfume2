import React, { useRef, useEffect,useState }  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Css/HomePage.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import instaimg1 from '../../assets/insta1.png'
import instaimg4 from '../../assets/insta2.png'
import instaimg3 from '../../assets/insta3.png'
import instaimg2 from '../../assets/insta2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from './FAQ';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [sliderSec2, setSliderSec2] = useState([]);
  const [sliderSec8, setSliderSec8] = useState([]);
  const [sliderSec5, setSliderSec5] = useState([]);
  const [sliderSec10, setSliderSec10] = useState([]);

  // for home page content
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.107:2000/home-page-main');
        setData(response.data.data);  
      } catch (err) {
        console.log(err, 'Server Error');
      }
    };
    fetchData();
  }, []);
  // for home page content

  // for home page first slider
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.0.107:2000/home-slider-first');
        if (response.data && Array.isArray(response.data.data)) {
        const sec2Slider = response.data.data;
         setSliderSec2(sec2Slider);
      } else {
        console.log('Response data structure is not as expected');
      }
      } catch (err) {
        console.log(err, 'Server Error');
      }
  };
  fetchData();
  }, []);
  // for home page first slider

  // for home page fifth slider
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.107:2000/api/home-slider-section5');
        console.log(response, 'Full response sec 5');

        if (response.data && Array.isArray(response.data.data)) {
          const sec5Slider = response.data.data;
          console.log(sec5Slider, 'Sec5 res');

          setSliderSec5(sec5Slider);
        } else {
          console.log('Response data structure is not as expected');
        }
      } catch (err) {
        console.log(err, 'Server Error');
      }
    };

    fetchData();
  }, []);
  // for home page fifth slider

//  for popup section
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.0.107:2000/api/home-slider-one-sliders');
      setSliderSec8(response.data.data);  
      if (response.data && Array.isArray(response.data.data)) {
        const slider_ = response.data.data;
        setSliderSec8(slider_);

      } else {
        console.log('Response data structure is not as expected');
      }

    } catch (err) {
      console.log(err, 'Server Error');
    }
  };

  fetchData();
}, []);
//  for popup section

// for section 10
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.0.107:2000/api/home-slider-section10');
           if (response.data && Array.isArray(response.data.data)) {
        const sec10Slider = response.data.data;
        console.log(sec10Slider, 'res, section 10');

        setSliderSec10(sec10Slider);
      } else {
        console.log('Response data structure is not as expected');
      }
    } catch (err) {
      console.log(err, 'Server Error');
    }
  };

  fetchData();
}, []);
// for section 10

// Use another useEffect to log when data is updated
  useEffect(() => {
    if (data) {
      console.log(data.sec1_banner_image, 'Updated Data');
    }
  }, [data]);

  const banner_home = {
    backgroundImage: data && data.sec1_banner_image ? `url(${data.sec1_banner_image})` : 'none',
  }
  const third_img = {
    backgroundImage: data && data.sec3_img ? `url(${data.sec3_img})` : 'none',
  }
  const popup_img = {
    backgroundImage: data && data.sec8_img ? `url(${data.sec8_img})` : 'none',
  }
  const popup_img1 = {
    backgroundImage: data && data.sec8_img ? `url(${data.sec8_img})` : 'none',
  }
  const popup_img2 = {
    backgroundImage: data && data.sec8_img ? `url(${data.sec8_img})` : 'none',
  }
  const pure_imge_1 = {
    backgroundImage: data && data.sec10_img ? `url(${data.sec10_img})` : 'none',
  }
  const pure_imge_2 = {
    backgroundImage: data && data.sec10_img ? `url(${data.sec10_img})` : 'none',
  }

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
}, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 8000, // Adjust this value according to your preference
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const settings1 = {
    dots: false,
    infinite: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 8000, // Adjust this value according to your preference
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const settings3 = {
    dots: false,
    infinite: false,
    speed: 1500,
    autoplay: false,
    autoplaySpeed: 8000, // Adjust this value according to your preference
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
    
  const cardRef = useRef(null);
  const popupContentRef = useRef(null);

  const cardRef2 = useRef(null);
  const popupContentRef2 = useRef(null);

  const cardRef3 = useRef(null);
  const popupContentRef3 = useRef(null);

  useEffect(() => {
      const handleCardClick = (event) => {
          if (cardRef.current && cardRef.current.contains(event.target)) {
              popupContentRef.current.style.display = 'block';
              popupContentRef2.current.style.display = 'none';
              popupContentRef3.current.style.display = 'none';
          } else if (cardRef2.current && cardRef2.current.contains(event.target)) {
              popupContentRef2.current.style.display = 'block';
              popupContentRef.current.style.display = 'none';
              popupContentRef3.current.style.display = 'none';
          } else if (cardRef3.current && cardRef3.current.contains(event.target)) {
              popupContentRef3.current.style.display = 'block';
              popupContentRef.current.style.display = 'none';
              popupContentRef2.current.style.display = 'none';
          } else {
              popupContentRef.current.style.display = 'none';
              popupContentRef2.current.style.display = 'none';
              popupContentRef3.current.style.display = 'none';
          }
      };
      
      document.addEventListener('click', handleCardClick);

      return () => {
          document.removeEventListener('click', handleCardClick);
      };
  }, []);

  const handleClosePopup = () => {
    popupContentRef.current.style.display = 'none';
    popupContentRef2.current.style.display = 'none';
    popupContentRef3.current.style.display = 'none';

};
 

const videoRef = useRef(null);
useEffect(() => {
  const video = videoRef.current;
  if (video) {
    const handleEnded = () => {
      video.currentTime = 0; // Reset video to start
      video.play(); // Play video again
    };
    console.log(video + ' Video ');
    video.addEventListener('ended', handleEnded);
  }
}, []);

const videoRef2 = useRef(null);
    const playButtonRef = useRef(null);

    const handlePlay = () => {
        if (videoRef2.current) {
            videoRef2.current.play();
            playButtonRef.current.style.display = 'none';
        }
    };

    const videoRef3 = useRef(null);
    const playButtonRef3 = useRef(null);

    const handlePlay3 = () => {
        if (videoRef3.current) {
            videoRef3.current.play();
            playButtonRef3.current.style.display = 'none';
        }
    };


return (
  <>
    <div className="HOME container mt-0 ">
      {/****** Banner image *******/}
      <div className="homepage" style={banner_home}>
            <div className="col-lg-8 home_heading" >               
                <h1>{data && data.sec1_heading ? data.sec1_heading : ''}</h1>
                <p>{data && data.sec1_content ? data.sec1_content : ''}</p>
                 <div className='button'>
                     <button className='home_button'>Discover More</button> <button className='home_button1'>Create Your Own</button>
                 </div>
            </div>
      </div>
      {/****** Banner image End ********/}

      {/**************** Slider section ******************/}
      <div className=' slider_cont_home'>
      <div className='slider-txt_home'>
              <Slider {...settings}>
              {sliderSec2.length > 0 ? (
                sliderSec2.map((slider, index) => (
                <Link to='/HerPage' key={index}> 
                    <div className='img_bg_home1'>
                          <img src={slider.sec2_img} />
                         {/**  <div  className='img_bg_paragraph'>
                          <h3>{slider.sec2_heading}</h3>
                          <p>{slider.sec2_name}</p>
                          </div>    **/}                      
                   </div>
                </Link>
              ))
            ) : (
              <p>No sliders available</p>
            )}
              </Slider>
      </div>
      </div>
      {/*************** Slider section End *******************/}

      {/**************** Personalized Experience *******************/}
      <div className='container'>
            <div className='Prsnl_ex row'>
                <div className='col-lg-7 col-md-7 Prsnl_ex_txt'>
                      <h2>{data && data.sec3_heading ? data.sec3_heading : ''}</h2>
                      <p>{data && data.sec3_content ? data.sec3_content : ''}</p>
                      <div className='button'>
                      <button className='col-sm-6 her_btn_discover_home2'>Discover More</button> <button className='col-sm-6 her_btn_Create_home2'>Create Your Own</button></div>
                </div>
                  <div className='col-lg-5 col-md-5 Prsnl_ex_img'>
                      {data && data.sec3_img ? (
                        <img src={data.sec3_img} style={third_img} alt="Dynamic" />
                      ) : (
                        <p>Image not available</p> // Fallback content if the image is not available
                      )}
                  </div>
            </div>
      </div>
      {/**************** Personalized Experience End*******************/}
        
      {/**************** Home Page Video *******************/}
      <div className="container">
          <div className='home_video'>
          <div className='home_video'>
          {data && data.sec4_video ? (
              <video className='home_video_section' ref={videoRef} autoPlay muted loop>
                <source src={data.sec4_video} type="video/mp4"/>
              </video>
            ) : (
              <div>Loading...</div>
            )}
          </div>
              
          </div>
      </div>
      {/**************** Home Page Video End *******************/}

      {/******************** Bottle sider *****************/}
      <div className='explore_text'>
        <h1>{data && data.sec5_heading1 ? data.sec5_heading1 : ''}</h1>  
      </div>
      <div className=' slider_cont2'>
      <div className='home_bottle_slider-txt3 '>
          <Slider {...settings3}>
          {sliderSec5.map((sliderItem, index) => (
            <div key={index}>           
            <div className='img_bg_home' style={{ backgroundImage: `url(${sliderItem.sec5_bg_img})` }}>
              <img src={sliderItem.sec5_img} alt={`Slide ${index + 1}`} />
              <h3>{sliderItem.sec5_heading2}</h3>
              <p>{sliderItem.sec5_content}</p>
            </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
      {/*************** Bottle sider End******************/}

      {/********************************** Set delivery **********************************/}
      <div className='container'>
            <div className='row discovery-set'>
                <div className='col-lg-7 col-md-6 set_txt'>
                    <h4>{data && data.sec6_heading ? data.sec6_heading : ''}</h4>
                    <p>{data && data.sec6_content ? data.sec6_content : ''}</p>
                   
                    <button className='col-sm-6 her_btn_discover_him'>Discover More</button>
                    <button className='col-sm-6 her_btn_Create_him'>Create Your Own</button></div>
                
                <div className='col-lg-5 col-md-5 set_img'>
                {data && data.sec6_img ? (
                  <img src={data.sec6_img}  alt="Dynamic" />
                ) : (
                  <p>Image not available</p> // Fallback content if the image is not available
                )}
                </div>
            </div>
      </div>
      {/*************************************** set delivery End ********************************/}

      {/********************** Why choose us section ********************/}
      <div className="container Why_text_video">
                  <div className="row why-row1 ">
                    <div className="col-lg-4 col-sm-4 home_video-2">
                    {data && data.sec7_vdo1 ? (
                    <video className='home_video_section-2' ref={videoRef2}  muted loop>
                         <source src={data.sec7_vdo1} type="video/mp4"/>
                    </video>
                  ) : (
                    <div>Loading...</div>
                  )}
                    <button  ref={playButtonRef}   onClick={handlePlay} className='video-btn'>
                        <i className="fa-regular fa-circle-play" />
                    </button>
                    </div>
                    <div className="col-lg-8 col-sm-8 home_content">
                        <h2>{data && data.sec7_heading ? data.sec7_heading : ''} </h2>
                        <p>{data && data.sec7_content1 ? data.sec7_content1 : ''}</p>
                    </div>
                  </div>
                  <div className="row why-row2">
                    <div className="col-lg-8 col-sm-7 home_content1">
                              <p>{data && data.sec7_content2 ? data.sec7_content2 : ''}</p>
                              <button className='content_with_button'>Discover More</button>
                              <button className='content_with_button2'>Create your own</button>
                    </div>
                    <div className="col-lg-4 col-sm-5 home_video-3" >
                    {data && data.sec7_vdo2 ? (
                              <video className='home_video_section-2' ref={videoRef3}  muted loop>
                                  <source src={data.sec7_vdo2} type="video/mp4"/>
                              </video>
                            ) : (
                              <div>Loading...</div>
                            )}
                              <button ref={playButtonRef3} onClick={handlePlay3} className='video-btn'>
                              <i className="fa-regular fa-circle-play" />
                              </button>
                    </div>
                  </div>
      </div>                   
      {/*********************** Why choose us section  End **********************/}

      {/***************Image and Popup section *********************/}
      <div className="container">
          <div className="popup_section row">
          {sliderSec8.map((slide, index) => (
              <div  key={index} className={`popup_sec_${index + 1} popup_sec_1 col-lg-4 col-md-4`}>
              {slide.sec8_img ? (
              <img src={slide.sec8_img} style={index === 0 ? popup_img : index === 1 ? popup_img1 : popup_img2} alt="Dynamic" />
            ) : (
              <p>Image not available</p>
            )}
                      <div className="popup_circle">
                        <div className="card" ref={index === 0 ? cardRef : index === 1 ? cardRef2 : cardRef3}>
                        <h5>{slide.sec8_heading || ''}</h5>
                          <p>{slide.sec8_text || ''}<i className="fa-solid fa-arrow-up-right-dots" /> </p>
                        </div>
                        <div className="popup_content" ref={index === 0 ? popupContentRef : index === 1 ? popupContentRef2 : popupContentRef3} style={{ display: 'none' }}>
                          <button className="close-button" onClick={() => handleClosePopup(index === 0 ? popupContentRef : index === 1 ? popupContentRef2 : popupContentRef3)}>X</button>
                          <p>{slide.sec8_popup_content || ''}</p>  
                        </div>
                      </div>
              </div>
            ))} 
          </div>          
      </div>
      {/*********************Image and Popup section End****************/}

      {/***********************************Instagram feed *********************************/}
      <div className="insta_feed container">
                 <div className="insta_feed1">
                        <div className="insta_text">
                          <br /><br /><br />
                              <h3>INSTAGRAM FEED</h3>
                        </div> 
                        <div className='insta_slider-txt' data-aos="fade-left">
                              <Slider {...settings1}>
                                  <div>
                                        <img src={instaimg1} />
                                      
                                  </div>
                                  <div>
                                      <img src={instaimg2} className=''/>
                                    
                                  </div>
                                  <div>
                                      <img src={instaimg3} className=''/>
                                    
                                  </div>
                                  <div>
                                      <img src={instaimg4} className=''/>
                                      
                                  </div>
                                  {/* <div>
                                      <img src={img5} className=''/>
                                    
                                  </div>  */}
                            </Slider>
                         </div>

                        <div className="insta_feed_button">
                        <button type="button" class="insta_button ">See All <i class="fa-solid fa-greater-than greater_btn"></i></button>
                        </div>
                        



                 </div>
      </div>
      {/***********************************Instagram feed end *********************************/}

      {/**************Pure tales *****************/}
      <div className=''>
        <div className='row pure_tales'>
          <div className="pure_text">
            <h2>{data && data.sec10_heading ? data.sec10_heading : ''}</h2>
          </div>
          {sliderSec10.length > 0 ? (
            sliderSec10.map((item, index) => (
          <div  key={index._id} className="col-lg-4 pure-1">
             <img src={item.sec10_img} style={index === 0 ? pure_imge_1 : pure_imge_2} alt="Dynamic"/>   
             <h3>{item.sec10_heading}</h3>
              <p>{item.sec10_content}</p>
             <button type="button" class="pure_button btn-outline-primary">See All  <i class="fa-solid fa-greater-than greater_btn"></i></button>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
     </div>
    </div>
      {/*******Pure Tales end *******************/}

       </div>
       <div>
       <FAQ/></div>
    </>
  )
}

export default HomePage
