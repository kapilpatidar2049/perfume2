import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import '../Css/KidsPage.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img_kids1 from '../../assets/remove3.png'
import insta_img_kids1 from '../../assets/kids_img3.jpg'
import insta_img_kids2 from '../../assets/kids_img4.jpg'
import insta_img_kids3 from '../../assets/kids_img3.jpg'
import insta_img_kids4 from '../../assets/kids_img4.jpg'
import bottle_kids from '../../assets/personal_img1.png'


const Kids = () => {

  const [data, setData] = useState(null);
  const [slider, setSlider] = useState([]);
  const [sliderSec4, setSliderSec4] = useState([]);
  const [backgroundImageURL, setBackgroundImageURL] = useState('');



  // const [loading, setLoading] = useState(true);

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Kids PAGE FETCH APIS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.101:2000/kids_page',);

        console.log(response.data.data.Sec2_slider[0].sliders, 'res');
        console.log(response.data.data.Sec4_slider[0].sliders, 'Sec4 res');

        setData(response.data.data);
        if (response.data.data && response.data.data.Sec2_slider && response.data.data.Sec2_slider.length > 0) {
          setSlider(response.data.data.Sec2_slider[0].sliders);
        }
        if (response.data.data.Sec4_slider && response.data.data.Sec4_slider.length > 0) {
          setSliderSec4(response.data.data.Sec4_slider[0].sliders);
        }
      } catch (err) {
        console.log(err, 'Server Error');
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 222000, // Adjust this value according to your preference
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 100,

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
          slidesToShow: 2,
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
    speed: 400,
    autoplay: false,
    autoplaySpeed: 222000, // Adjust this value according to your preference
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 100,

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
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480, // Adjust the breakpoint value according to your requirements
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, autoplaySpeed: 1,
        }
      }
    ]
  };
  const banner_kid = {
    backgroundImage: data && data.Sec1_img ? `url(${data.Sec1_img})` : 'none',
  }

  return (
    <>
      <div className='container mt-0'>
      <div className=' banner_kids1 mt-0' style={banner_kid}>
      <div className='col-lg-6 text_kids' >    
            <h1>{data && data.Sec1_heading ? data.Sec1_heading : ''}</h1>
            <p>{data && data.Sec1_content ? data.Sec1_content : ''}</p>
            <button className='her_btn_discover_kids'>Discover More</button> <button className='her_btn_Create_kids'>Create Your Own</button>
      </div>
      </div>
      <div className='set_kids'>
          <h1>{data && data.Sec2_heading ? data.Sec2_heading : ''}</h1>
          <p>{data && data.Sec2_content ? data.Sec2_content : ''}</p>
      </div>
      <div className='slider_cont_kids'>
      <div className='home_bottle_slider-txt3 '>
                <Slider {...settings}>
                      <div className='img_bg_home'>
                      <img src={img_kids1} />
                              <h3>vetiver and ginger</h3>
                              <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                      <div className='img_bg_home'>
                   <img src={img_kids1} />
                          <h3>Mimosa and bergamot</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                      <div className='img_bg_home'>
                          <img src={img_kids1} />
                          <h3>tuberose and patchouli</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                      <div className='img_bg_home'>
                          <img src={img_kids1} />
                          <h3>vetiver and ginger</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                      <div className='img_bg_home'>
                      <img src={img_kids1} />
                          <h3>Mimosa and bergamot</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                </Slider>
      </div>
      </div>
      <div className="insta_text_kids">
      <h3>our reels collection</h3>
      </div>     
      <div className="insta_feed_kids">
          
        <div className='insta_slider-txt_kids'>
      {/*   <div className='row'>
      <div className='col-lg-3'><img src={insta_img_kids1} /></div>
      <div className='col-lg-3'> <img src={insta_img_kids2} /></div>
      <div className='col-lg-3'> <img src={insta_img_kids3} /></div>
      <div className='col-lg-3'> <img src={insta_img_kids4}/></div>
      </div>*/} 
         <Slider {...settings1}>
            <div>
                  {/* <img src={insta_img_kids1} />*/} 
            </div>
            <div>
              <img src={insta_img_kids2} />
            </div>
            <div>
              <img src={insta_img_kids3} />
            </div>
            <div>
              <img src={insta_img_kids4}/>
            </div>
         </Slider> 
        </div>
        <div className="insta_feed_button_kids">
             <button type="button" class="insta_button_kids btn-outline-primary">See All <i class="fa-solid fa-greater-than greater_btn"></i></button>
        </div>
      </div>
      <div className="insta_text_kids2">
      <h3>shop our bestsellers</h3>
      </div>  
      <div className='slider_cont_kids'>
      <div className='home_bottle_slider-txt3 '>
                <Slider {...settings}>
                  <div className='img_bg_home'>
                  <img src={img_kids1} />
                          <h3>vetiver and ginger</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                   </div>
                      <div className='img_bg_home'>
                   <img src={img_kids1} />
                          <h3>Mimosa and bergamot</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                      <div className='img_bg_home'>
                          <img src={img_kids1} />
                          <h3>tuberose and patchouli</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                      <div className='img_bg_home'>
                          <img src={img_kids1} />
                          <h3>vetiver and ginger</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                      <div className='img_bg_home'>
                      <img src={img_kids1} />
                          <h3>Mimosa and bergamot</h3>
                          <p>perfume creation 30ml floral & citrusy</p>
                      </div>
                </Slider>
      </div>
      </div>
      <div className='container'>
      <div className='Personal_ex_kids row'>
      <div className='col-lg-7 Personal_ex_txt_kids'>
      <h4>Personalized Experience</h4>
      <p>design your bottle and experience the luxury of creating your very own personalized perfume.</p>
      <div className='button_kids'>
      <button className='her_btn_discover_kids2'>Discover More</button> <button className='her_btn_Create_kids2'>Create Your Own</button>
      </div>
      </div>
      <div className='col-lg-5 Personal_ex_img_kids'>
      <img src={bottle_kids}/>
      </div>    
      </div>
      </div>
      {/*FAQ */}
      <div className='Faq_text'>
      <h1>faq</h1>  
    </div>
      <div class="faq2 accordion accordion-flush2 " id="accordionFlushExample">
      <div class="faq-text2 accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            1. What makes Perfume fragranaces unique ? 
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum.
          </div>
        </div>
      </div>
      <div class="faq-text2 accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
         2. Do you offer sample sizes or testers ?
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum.
          </div>
        </div>
      </div>
      <div class="faq-text2 accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          3. Can I return or exchange a fragranace if i'm not satisfied ?
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum.
          </div>
        </div>
      </div>
      <div class="faq-text2 accordion-item">
        <h2 class="accordion-header" id="flush-headingfour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">
    4. Are Perfume fragranace suitable for sensitive skin ?
          </button>
        </h2>
        <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum.
          </div>
        </div>
      </div>
      <div class="faq-text2 accordion-item">
        <h2 class="accordion-header" id="flush-headingfive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapseThree">
    5. How can I contact Purefume customer service ?
          </button>
        </h2>
        <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nemo. Ratione magni animi iusto molestias eius minima enim non, totam vitae eligendi, earum quia, debitis suscipit saepe. Doloribus tempora, reprehenderit vel harum exercitationem voluptatem. Ducimus necessitatibus aliquid cupiditate optio illum.
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default Kids
