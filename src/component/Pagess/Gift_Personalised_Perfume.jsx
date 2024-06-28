import React, { useEffect, useState, useRef }  from 'react'
import { Link } from "react-router-dom";
import selectImg from '../../assets/giftselectImg11.png';
import image1 from '../../assets/mix_img1.png';
import image2 from '../../assets/mix_img2.png';
import image3 from '../../assets/mix_img3.png';
import image4 from '../../assets/mix_img4.png';
import image5 from '../../assets/mix_img5.png';
import Sldr_img1 from "../../assets/sliderKit1.png";
import Sldr_img2 from "../../assets/sliderKit2.png";
import Sldr_img3 from "../../assets/sliderKit1.png";
import Sldr_img4 from "../../assets/slider_img4.jpg";
import video3 from '../../video/giftvideo3.mp4'
import Slider from "react-slick";
import Slider2 from 'react-slick';
import FAQ from './FAQ';
const Gift_Personalised_Perfume = () => {
    const settingsKit = {
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
                },
            },
            {
                breakpoint: 768, // Adjust the breakpoint value according to your requirements
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Adjust the breakpoint value according to your requirements
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 100,
        responsive: [
          {
            breakpoint: 1024,
            settings1: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings1: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings1: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    // slider 35 scents
    const sliderLTRRef = useRef(null);
    const sliderRTLRef = useRef(null);

    useEffect(() => {
        const sliderLTR = sliderLTRRef.current;
        const sliderRTL = sliderRTLRef.current;

        const scrollLTR = () => {
            sliderLTR.scrollLeft += 1;
            if (sliderLTR.scrollLeft >= sliderLTR.scrollWidth - sliderLTR.clientWidth) {
                sliderLTR.scrollLeft = 0;
            }
        };

        const scrollRTL = () => {
            sliderRTL.scrollLeft -= 1;
            if (sliderRTL.scrollLeft <= 0) {
                sliderRTL.scrollLeft = sliderRTL.scrollWidth;
            }
        };

        const intervalLTR = setInterval(scrollLTR, 20);
        const intervalRTL = setInterval(scrollRTL, 20);

        return () => {
            clearInterval(intervalLTR);
            clearInterval(intervalRTL);
        };
    }, []);

    // Add to cart count
  const [counts, setCounts] = useState({ item: 1 });
  const updateCount = (item, action) => {
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (action === "increment") {
        newCounts[item]++;
      } else if (action === "decrement" && newCounts[item] > 1) {
        newCounts[item]--;
      }
      return newCounts;
    });
  };

    return (
  <>
    <div className='container mt-5'>
        <div className='mt-5 mainmargin'>
                    <div className='mt-5'>
                        <div className="banner">
                            <img src={selectImg} alt="" height={400} className='overlayImg' />
                        </div>
                        <div className='text-center overlayitem'>
                            <h1>Gift A Personalised Perfume</h1>
                            <p>Surprise your loved ones with a creation of their very own scent.</p>
                        </div>
                    </div>
                    <div>
                        <div className='mt-3'>
                            <h1 className='text-center fonthead mt-5'>HOW IT WORKS</h1>
                            <div className='row mt-5 wortItembox'>
                                <div className='col-lg-3 wortItem'>
                                    <h4 className='mb-3 fonthead'>OFFER A PERSONALISED PERFUME</h4>
                                    <p>Gift a tailor-made perfume experience and put your loved one at the centre of the creation process. You cannot get their scent wrong…as they will choose themselves their ingredients and their bottle design according to their personality and desires!</p>
                                </div>
                                <div className='col-lg-3 wortItem'>
                                    <h4 className='mb-3 fonthead'>OFFER A PERSONALISED PERFUME</h4>
                                    <p>Gift a tailor-made perfume experience and put your loved one at the centre of the creation process. You cannot get their scent wrong…as they will choose themselves their ingredients and their bottle design according to their personality and desires!</p>
                                </div>
                                <div className='col-lg-3  wortItem wortItem3'>
                                    <h4 className='mb-3 fonthead'>OFFER A PERSONALISED PERFUME</h4>
                                    <p>Gift a tailor-made perfume experience and put your loved one at the centre of the creation process. You cannot get their scent wrong…as they will choose themselves their ingredients and their bottle design according to their personality and desires!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 35 scent mix and match */}    
                    <div className='mix_slider mt-4'>
                    <h1 className='text-center mt-5'> Our 30 SCENTS TO MIX AND MATCH</h1>           
                <div className="slider mt-3" ref={sliderLTRRef}>
                    <div className="slider-inner mt-3">
                        <img src={image1} alt="Image 1" />
                        <img src={image2} alt="Image 2" />
                        <img src={image3} alt="Image 3" />
                        <img src={image4} alt="Image 4" />
                        <img src={image5} alt="Image 5" /> 
                        <img src={image1} alt="Image 2" />
                        <img src={image2} alt="Image 3" />
                        <img src={image3} alt="Image 4" />
                        <img src={image4} alt="Image 5" />
                        <img src={image5} alt="Image 1" />
                        <img src={image1} alt="Image 2" />
                        <img src={image2} alt="Image 3" />
                        <img src={image3} alt="Image 4" />
                        <img src={image4} alt="Image 5" />
                        <img src={image5} alt="Image 1" />
                    </div>
                </div>
                <div className="slider" ref={sliderRTLRef}>
                <div className="slider-inner">
                    <img src={image1} alt="Image 1" />
                    <img src={image2} alt="Image 2" />
                    <img src={image3} alt="Image 3" />
                    <img src={image4} alt="Image 4" />
                    <img src={image5} alt="Image 5" /> 
                    <img src={image1} alt="Image 2" />
                    <img src={image2} alt="Image 3" />
                    <img src={image3} alt="Image 4" />
                    <img src={image4} alt="Image 5" />
                    <img src={image5} alt="Image 1" />
                    <img src={image1} alt="Image 2" />
                    <img src={image2} alt="Image 3" />
                    <img src={image3} alt="Image 4" />
                    <img src={image4} alt="Image 5" />
                    <img src={image5} alt="Image 1" />
                </div>
                </div>  
                </div>  
                    {/* Video */}
                    <div className='mt-5 perfumevideoupperbox'>
                        <video autoPlay loop className='perfumevideobox mt-4'>
                            <source src={video3} type="video/mp4" className='perfumevideo' />
                        </video>
                    </div>

                    {/*Add cart */}
                    <div className="row mt-5">
                    <div className="col-lg-6">
                    <div className="slider_kit">
            <Slider2 {...settings1} className="mt-5">
              <div>
                <img src={Sldr_img1} className="img_slider1" />
              </div>
              <div>
                <img src={Sldr_img2} className="img_slider1" />
              </div>
              <div>
                <img src={Sldr_img3} className="img_slider1" />
              </div>
              <div>
                <img src={Sldr_img4} className="img_slider1" />
              </div>
            </Slider2>
          </div>

                    </div>
                    <div className='col-lg-6 card-text mt-5'>
                    <h1>GIFT A PERSONALISED PERFUME</h1>
                    <p>Their perfume creation is encapsulated in a sleek 30ml bottle with the design and ingredients of their choice.<br /><br /></p>
                    <h4>GIFT INCLUDES:</h4>
                    <p className='listt'>
                        <ul>
                        <li> Perfume creation experience</li>
                        <li> 30ml Perfume</li>
                        <li> Bottle design customisation</li>
                        <li> Gift wrapping</li>
                        </ul>
                    </p>
                    <hr />
                    <div className="row mt-4">
      <div className="col-lg-2 mt-2 card_txt"><h5 className='fw-bold'> RS 564</h5></div>
      <Link to="/AddCart" className="col-lg-4 card_btns">
        <p>
          <button className="addd"> Add To Cart </button>{" "}
        </p>
      </Link>
      <div className="col-lg-4 ">
        <p className="add_no ">
          <button
            onClick={() => updateCount("item", "decrement")}
            className="cart-buton fw-bold"
          >
            -
          </button>{" "}
          {counts.item}
          <button
            onClick={() => updateCount("item", "increment")}
            className="cart-buton"
          >
            +
          </button>{" "}
        </p>
      </div>
    
      </div>
                    </div>
                    </div>


                 <div className="container slider_cont_kit">
                        <div className="slider_txt_kit">
                            <Slider {...settingsKit}>
                                <div className="slider_txt_kit2">
                                    <h3>vetiver </h3>
                                    <p>
                                        Lorem Ipsum is a piece of text, used by designers to fill a
                                        space where the content will eventually sit. It helps show how
                                        text will look once a piece of content is finished, during the
                                        planning phase.
                                    </p>
                                </div>
                                <div className="slider_txt_kit2">
                                    <h3>vetiver </h3>
                                    <p>
                                        Lorem Ipsum is a piece of text, used by designers to fill a
                                        space where the content will eventually sit. It helps show how
                                        text will look once a piece of content is finished, during the
                                        planning phase.
                                    </p>
                                </div>
                                <div className="slider_txt_kit2">
                                    <h3>tuberose </h3>
                                    <p>
                                        Lorem Ipsum is a piece of text, used by designers to fill a
                                        space where the content will eventually sit. It helps show how
                                        text will look once a piece of content is finished, during the
                                        planning phase.
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </div>

                   
        </div>
        <div>
        <FAQ />
        </div>
    </div>
  </>
    )
}

export default Gift_Personalised_Perfume
