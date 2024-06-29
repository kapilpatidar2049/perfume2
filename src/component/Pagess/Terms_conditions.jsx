import React, { useEffect, useState } from 'react';
import "../Css/Style.css";

const TermsConditions = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heading, setHeading] = useState('');
  const [bgImg, setBgImg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.0.107:2000/api/return-and-refund-multiple/');
        const result = await response.json();
        console.log('API response:', result.createNew);  // Debug: Log API response
        if (result.status === 'success' && Array.isArray(result.createNew)) {
          setData(result.createNew);
        } 
        if (Array.isArray(result.termsAllData) && result.termsAllData.length > 0) {
          const termData = result.termsAllData[0];
          if (termData.term_heading && termData.term_bg_img) {
            setHeading(termData.term_heading);
            setBgImg(termData.term_bg_img);
          } else {
            throw new Error('Expected properties are not available in the first element of termsAllData');
          }
        } else {
          throw new Error('API response is not in expected format');
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const term_img = {
    backgroundImage: bgImg ? `url(${bgImg})` : 'none',
  };

  return (
    <>
      <div className='container'>
        <div className='shippingImg img-fluid termImg' style={term_img}>
          <div className='shippingHeading'><h1>{heading}</h1></div>
        </div>
        <div className='shippingSmall mx-3'>
          {bgImg ? (
            <img src={bgImg} alt="Shipping Background" className='img-fluid shippingImgSmall' />
          ) : (
            <p>Image not available</p> // Fallback content if the image is not available
          )}
          <h1 className='shippingSmallHead text-center mt-3 p-3'>{heading}</h1>
        </div>
        <div className='Privacy'>
          <div className='mx-4'>
            {data.map((section) => (
              <div key={section._id}>
                <h2>{section.sec2_term_heading2}</h2>
                {section.sec2_term_content2 && <p dangerouslySetInnerHTML={{ __html: section.sec2_term_content2 }}></p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsConditions;
