import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import '../Css/HerPage.css'
import videos from '../../video/video3.mp4'
import videos2 from '../../video/video4.mp4'
import videos3 from '../../video/video2.mp4'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from '../../assets/remove3.png'
import Discovery from '../../assets/bg2.png'
import bottle from '../../assets/personal_img1.png'

const HerPage = () => {
  const [data, setData] = useState(null);
  const [sliderSec3, setSliderSec3] = useState([]);
  const [sliderSec4, setSliderSec4] = useState([]);
  const [sliderSec5, setSliderSec5] = useState([]);
  const [sliderSec7, setSliderSec7] = useState([]);
  const [backgroundImageURL, setBackgroundImageURL] = useState('');

   // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ HER PAGE FETCH APIS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.107:2000/her_page',);
        console.log(response.data.data.Sec3_slider, 'Sec3 res');
        console.log(response.data.data.Sec4_slider, 'Sec4 res');
        console.log(response.data.data.Sec5_slider, 'Sec5 res');

        setData(response.data.data);

        if (response.data.data && response.data.data.Sec3_slider && response.data.data.Sec3_slider.sliders.length > 0) {
          setSliderSec3(response.data.data.Sec3_slider.sliders);
        }
        if (response.data.data && response.data.data.Sec4_slider && response.data.data.Sec4_slider.sliders.length > 0) {
          setSliderSec4(response.data.data.Sec4_slider.sliders);
        }
        if (response.data.data && response.data.data.Sec5_slider && response.data.data.Sec5_slider.sliders.length > 0) {
          setSliderSec5(response.data.data.Sec5_slider.sliders);
        }
        if (response.data.data && response.data.data.Sec7_slider && response.data.data.Sec7_slider.sliders.length > 0) {
          setSliderSec7(response.data.data.Sec7_slider.sliders);
        }
      } catch (err) {
        console.log(err, 'Server Error');
      }
    };

    fetchData();
  }, []);

  const banner = {
    backgroundImage: data && data.Sec1_img ? `url(${data.Sec1_img})` : 'none',
  }

  const banner_her = {
    backgroundImage: data && data.Sec3_sld_bgImg ? `url(${data.Sec3_sld_bgImg})` : 'none',
  }

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
    const videoRef = useRef(null);
    useEffect(() => {
      const video = videoRef.current;
    
      const handleEnded = () => {
        video.currentTime = 0; // Reset video to start
        video.play(); // Play video again
      }; 
  
      video.addEventListener('ended', handleEnded);
  
      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }, []);
   

  return (
    <>
    <div className='container mt-0'>
    <div className='banner_img1 mt-0' style={banner}>
    <div className='col-lg-6 text_herr'>    
     <h1>{data && data.Sec1_heading ? data.Sec1_heading : ''}</h1>
     <p>{data && data.content ? data.content : ''} </p>
     <div className='button'><button className='her_btn_discover'>Discover More</button> <button className='her_btn_Create'>Create Your Own</button>
    </div></div>
    </div>

    <div className='set'>
    <h1>Purefume Creation Sets</h1>  
    <p>To better help on this fragrance journey, we have melticulously curated a collection Of nine best-Selling fragrance combination . these custom  scent cater to an array of moods , occasions, and personal preferences.  </p> 
    <div className='video'>
    <video className='video_section' ref={videoRef} autoPlay muted loop
    >   <source src={videos} type="video/mp4"/>
   </video></div>
    </div>

    <div className='mood'>
    <h1>Freshness mood</h1>  
    <p>Embrace life with three unique fresh combination that will amplify your natural essence and refreshment.  perfect for everyday use!</p> 
    </div>
    <div className=' slider_cont_her'>
    <div className='slider-txt2'>
    <Slider {...settings}>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>vetiver and ginger</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>Mimosa and bergamot</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>tuberose and patchouli</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>   
    <h3>vetiver and ginger</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
      <h3>Mimosa and bergamot</h3>
      <p>perfume creation 30ml floral & citrusy</p>
    </div>
    </Slider>
    
   </div>
   </div>
    <div className='video_one text-center'>
     <video className='video_section_one' ref={videoRef} autoPlay muted loop>
        <source src={videos2} type="video/mp4"/>
    </video>
    </div>
  
    
    <div className='elegance-mood2'>
    <h1>elegance mood</h1>  
    <p> celebrate your moments with these three refined pairings that a bring a hint of charm and showcases your unique style. ideal for days you want to elevate your elegance</p> 
    </div>
    <div className=' slider_cont_her'>
    <div className='slider-txt2'>
    <Slider {...settings}>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>vetiver and ginger</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>Mimosa and bergamot</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>tuberose and patchouli</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>   
    <h3>vetiver and ginger</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
      <h3>Mimosa and bergamot</h3>
      <p>perfume creation 30ml floral & citrusy</p>
    </div>
    </Slider>
    
   </div>
   </div>
   <div className='video_two'>
   <video className='video_section_two' ref={videoRef} autoPlay muted loop>  
    <source src={videos3} type="video/mp4"/>
  </video>
    </div>
   <div className='love-mood3'>
   <h1>eLEGANCE mood</h1>  
   <p> celebrate your moments with these three refined pairings that a bring a hint of charm and showcases your unique style. ideal for days you want to elevate your elegance</p> 
   </div>
   <div className='slider_cont_her'>
   <div className='slider-txt3'>
    <Slider {...settings}>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>vetiver and ginger</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>Mimosa and bergamot</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>tuberose and patchouli</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>  
    <h3>vetiver and ginger</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
      <h3>Mimosa and bergamot</h3>
      <p>perfume creation 30ml floral & citrusy</p>
    </div>    
   </Slider>  
   </div>
   </div>
    <div className='row discovery-set1 '>
    <div className='col-lg-7 set_txt_her'>
    <h4>Discovery set</h4>
    <p>Get acquanted with oue pairing collection with a discovery set designed to you find your new on-the-go</p>
    <p> <br />PACK OF 10</p>
    <div className='button'>
    <button className='her_btn_discover2'>Discover More</button> <button className='her_btn_Create2'>Create Your Own</button>
    </div>
    </div>
    <div className='col-lg-5 set_img_her'>
    <img src={Discovery}/>
    </div>
    
    </div>
   <div className='Explore_sellers'>
   <h1>Explore Our bestsellers</h1> 
   </div>
   <div className=' slider_cont_her'>
    <div className='slider-txt2'>
    <Slider {...settings}>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>vetiver and ginger</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>Mimosa and bergamot</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
    <h3>tuberose and patchouli</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>   
    <h3>vetiver and ginger</h3>
    <p>perfume creation 30ml floral & citrusy</p>
    </div>
    <div className='img_bg'>
    <img src={img1} className=''/>
      <h3>Mimosa and bergamot</h3>
      <p>perfume creation 30ml floral & citrusy</p>
    </div>
    </Slider>
    
   </div>
   </div>
   <div className='container'>
    <div className='Personal_ex row'>
    <div className='col-lg-7 Personal_ex_txt'>
    <h2>Personalized Experience</h2>
    <p>design your bottle and experience the luxury of creating your very own personalized perfume.</p>
    <div className='button'>
    <button className='her_btn_discover2'>Discover More</button> <button className='her_btn_Create2'>Create Your Own</button>
    </div>
    </div>
    <div className='col-lg-5 Personal_ex_img'>
    <img src={bottle}/>
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

export default HerPage
