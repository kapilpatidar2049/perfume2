import React, { useRef, useEffect }  from 'react'
import '../Css/HimPage.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img_him1 from '../../assets/remove3.png'
import video_him1 from '../../video/video_him1.mp4'
import video_him2 from '../../video/video.mp4'
import video_him3 from '../../video/video_him1.mp4'
import Discovery_him from '../../assets/bg2.png'
import bottle_him from '../../assets/personal_img1.png'
import FAQ from './FAQ';


const HimPage = () => {
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
      <div className='container mt-0 HIMPAGE'>
      <div className=' banner_img1_him mt-0'>
      <div className='text_him'>    
       <h1>Venture into  the heart <br /></h1>
       <p>Comfortable and refined, fragranaces that are <br /> adapted to every occasions, During the day or <br /> in the evening </p>
     <div className='button'>
       <button className='her_btn_discover_him1'>Discover More</button> <button className='her_btn_Create_him1'>Create Your Own</button>
      </div>
      </div>
      </div>

      <div className='set_him'>
    <h1>Purefume Creation Sets</h1>  
    <p>To better help on this fragrance journey, we have melticulously curated a collection Of nine best-Selling fragrance combination . these custom  scent cater to an array of moods , occasions, and personal preferences.  </p> 
      </div>

      <div className='video_him'>
    <video className='video_section_him' ref={videoRef} autoPlay muted loop>
       <source src={video_him1} type="video/mp4"/>
   </video>
      </div>
      <div className='mood_him'>
       <h1>Freshness mood</h1>  
       <p>Embrace life with three unique fresh combination that will amplify your natural essence and refreshment. perfect for everyday use!</p> 
      </div>
      
      <div className=' slider_cont_him2'>
      <div className='slider-txt_him2'>
      <Slider {...settings}>
      <div className='img_bg_him'>   
        <img src={img_him1} />
        <h3>Mimosa and bergamot</h3>
        <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />    
      <h3>vetiver and ginger</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />
      <h3>tuberose and patchouli</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />
      <h3>Mimosa and bergamot</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} className=''/>
      <h3>vetiver and ginger</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      </Slider>
      </div>      
      </div>  

      <div className='video_him_two'>
      <video className='video_section_him' ref={videoRef} autoPlay muted loop>
         <source src={video_him2} type="video/mp4"/>
     </video>
     </div>
      <div className='elegance-mood_him2'>
    <h1>elegance mood</h1>  
    <p> celebrate your moments with these three refined pairings that a bring a hint of charm and showcases your unique style. ideal for days you want to elevate your elegance</p> 
      </div>

      <div className=' slider_cont_him2'>
      <div className='slider-txt_him2'>
      <Slider {...settings}>
      <div className='img_bg_him'>   
        <img src={img_him1} />
        <h3>Mimosa and bergamot</h3>
        <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />    
      <h3>vetiver and ginger</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />
      <h3>tuberose and patchouli</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />
      <h3>Mimosa and bergamot</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} className=''/>
      <h3>vetiver and ginger</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      </Slider>
      </div>      
      </div>

      <div className='video_him_three'>
      <video className='video_section_him' ref={videoRef} autoPlay muted loop>  
       <source src={video_him3} type="video/mp4"/>
     </video>
       </div>
      <div className='love-mood_him3'>
      <h1>ELEgance mood</h1>  
      <p> celebrate your moments with these three refined pairings that a bring a hint of charm and showcases your unique style. ideal for days you want to elevate your elegance</p> 
      </div>

      <div className=' slider_cont_him2'>
      <div className='slider-txt_him2'>
      <Slider {...settings}>
      <div className='img_bg_him'>   
        <img src={img_him1} />
        <h3>Mimosa and bergamot</h3>
        <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />    
      <h3>vetiver and ginger</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />
      <h3>tuberose and patchouli</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />
      <h3>Mimosa and bergamot</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} className=''/>
      <h3>vetiver and ginger</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      </Slider>
      </div>      
      </div>  

      <div className='row discovery-set_him1 '>
    <div className='col-lg-7 set_txt_him'>
    <h4>Discovery set</h4>
    <p>Get acquainted with oue pairing collection with a discovery set designed to you find your new on-the-go paiaring favourites.</p>
    <p><br/> PACK OF 10</p>
   
    <button className='her_btn_discover_him2'>Discover More</button> <button className='her_btn_Create_him2'>Create Your Own</button>
   
    </div>
    <div className='col-lg-5 set_img_him'>
    <img src={Discovery_him}/>
    </div>
    
      </div>
      <div className='Explore_sellers_him'>
     <h1>Explore Our bestsellers</h1> 
     </div>

     <div className=' slider_cont_him2'>
      <div className='slider-txt_him2'>
      <Slider {...settings}>
      <div className='img_bg_him'>   
        <img src={img_him1} />
        <h3>Mimosa and bergamot</h3>
        <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />    
      <h3>vetiver and ginger</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />
      <h3>tuberose and patchouli</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} />
      <h3>Mimosa and bergamot</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      <div className='img_bg_him'>
      <img src={img_him1} className=''/>
      <h3>vetiver and ginger</h3>
      <p>perfume creation 30ml floral & citrusy</p>
      </div>
      </Slider>
      </div>      
      </div> 

     <div className='container'>
      <div className='Personal_ex_him row'>
      <div className='col-lg-7 Personal_ex_txt_him'>
      <h2>Personalized Experience</h2>
      <p>design your bottle and experience the luxury of creating your very own personalized perfume.</p>
      <div className='button_him'>
      <button className='her_btn_discover_him2'>Discover More</button> <button className='her_btn_Create_him2'>Create Your Own</button>
      </div>
      </div>
      <div className='col-lg-5 Personal_ex_img_him'>
      <img src={bottle_him}/>
      </div>    
      </div>
     </div>
         
      </div>
      <div>
      <FAQ />
      </div>
    </>
  )
}

export default HimPage
