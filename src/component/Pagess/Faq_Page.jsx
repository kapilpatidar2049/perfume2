import React, { useEffect, useState } from 'react'
import "../Css/Style.css";
import image from '../../assets/faqImg.webp'
import '../Css/FAQ.css'
import FAQ from './FAQ';
import axios from 'axios';

const Faq_Page = () => {
    const [data, setData] = useState(null);
  
   //  FAQ PAGE FETCH APIS @@@@@@@@@@@@@

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.107:2000/api/faq-page',);

        setData(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err, 'Server Error');
      }
    };
    fetchData();
  }, []);

    const banner_faq = {
        backgroundImage: data && data.faq_bg_img ? `url(${data.faq_bg_img})` : 'none',
      }
  return (
    <>   
    <div className='shippingImg img-fluid faqImg container' style={banner_faq}>
        <div className='shippingHeading'><h1>{data && data.faq_heading ? data.faq_heading : ''}</h1></div>
    </div>
    <div className='shippingSmall mx-3'>
        <img src={image} className='img-fluid shippingImgSmall' />
        <h1 className='shippingSmallHead text-center mt-3 p-3'>{data && data.faq_heading ? data.faq_heading : ''}</h1>
    </div>
    <div className='container mt-3'>
        <div className=' mx-5'>
            <div className='row text-center'>
                <div className='col-lg-6 mt-5'>
                {data && data.sec2_img1 ? (
                    <img src={data.sec2_img1}  alt="Dynamic"  width="48" height="48" className='mb-4'/>
                  ) : (
                    <p>Image not available</p> 
                  )}
                <div >
                        <h5 className='mb-3 mt-3 faqHeadSamll'>{data && data.sec2_heading2 ? data.sec2_heading2 : ''}</h5>
                        <p>{data && data.sec2_content2 ? data.sec2_content2 : ''}</p>
                    </div>
                </div>
                <div className='col-lg-6 mt-5'>
                {data && data.sec2_img2 ? (
                    <img src={data.sec2_img2}  alt="Dynamic"  width="48" height="48" className='mb-4'/>
                  ) : (
                    <p>Image not available</p> 
                  )}
                    <div>
                        <h5 className='mb-3 mt-3 faqHeadSamll'>{data && data.sec2_heading1 ? data.sec2_heading1 : ''}</h5>
                        <p>{data && data.sec2_content1 ? data.sec2_content1 : ''}</p>
                    </div>
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

export default Faq_Page
