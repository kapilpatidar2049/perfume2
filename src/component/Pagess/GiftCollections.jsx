import React from 'react'
import '../Css/GiftPerfume.css'
import gift_banner from '../../assets/gift_banner.webp';
import giftproduct1 from '../../assets/giftproduct1.jpg';
import halfImg from '../../assets/halfImg1.webp';
import halfImg2 from '../../assets/halfImg2.webp';
import video from '../../video/giftVideo.mp4'
import video2 from '../../video/giftVideo2.mp4'
import Slider from 'react-slick';
import FAQ from './FAQ';
const GiftCollections = () => {
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
    return (
        <>
            <div className='container mt-4'>
                <div className=' mainmargin'>
                    <div className='mt-4'>
                        <img src={gift_banner} alt="" />
                    </div>
                    <div className='text-center my-5'>
                        <h1 className='fonthead'>OUR POPULAR SCENT-PAIRING GIFT SETS</h1>
                    </div>
                    <div>
                        <video width="600" autoPlay loop className='giftvideo'>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className='text-center my-5 heaad'>
                        <h2 className='heaad mb-2'>MORE THAN JUST A PERFUME - A CREATIVE GIFT IDEA!</h2>
                        <p>Gift a personalized perfume to your loved ones and allow them to customize their Eau De Parfum however they want. Explore our curated collection of 3 best-selling fragrances and stand out from the crowd with your unique scent!</p>
                    </div>

                    <div className='row mt-5'>
                        <div className="col-lg-4 giftproduct mb-5">
                            <div className='giftproductbox'>
                                <img src={giftproduct1} alt="" width={280} height={280} className='giftproductImg' />
                            </div>
                            <div className='gifttitlee'>
                                <div className='priceCart'><h5>RS 205</h5><button className='Addbutton'>Add To Cart</button></div>
                                <h5 className='fonthead'>LA CREATION SAGE & OCEAN</h5>
                                <p>Perfume Best Creation</p>
                                <p>Aromatic & Marine</p>
                            </div>
                        </div>
                        <div className="col-lg-4 giftproduct mb-5">
                            <div className='giftproductbox'>
                                <img src={giftproduct1} alt="" width={280} height={280} className='giftproductImg' />
                            </div>
                            <div className='gifttitlee'>
                                <div className='priceCart'><h5>RS 205</h5><button className='Addbutton'>Add To Cart</button></div>
                                <h5 className='fonthead'>LA CREATION SAGE & OCEAN</h5>
                                <p>Perfume Best Creation</p>
                                <p>Aromatic & Marine</p>
                            </div>
                        </div>
                        <div className="col-lg-4 giftproduct mb-5">
                            <div className='giftproductbox'>
                                <img src={giftproduct1} alt="" width={280} height={280} className='giftproductImg' />
                            </div>
                            <div className='gifttitlee'>
                                <div className='priceCart'><h5>RS 205</h5><button className='Addbutton'>Add To Cart</button></div>
                                <h5 className='fonthead'>LA CREATION SAGE & OCEAN</h5>
                                <p>Perfume Best Creation</p>
                                <p>Aromatic & Marine</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <video width="600" autoPlay loop className='giftvideo'>
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                    <div className='text-center my-5'>
                        <h2 className='heaad mb-2'>GIFT A DISCOVERY BOX WITH MINI SCENTS - UNIQUE AND INNOVATIVE!</h2>
                        <p>Discover 3 box sizes of curated mini exclusive scents from 4 to 34, from a variety of olfactory families. Elevate your gift-giving game with an innovative, personalized gift that transcends the ordinary. It's more than just an assortment of fragrances; it's a unique experience—an invitation to craft your perfume identity. With Maison 21G, you're not just wearing a scent; you're wearing a story, a commitment to quality and luxury.</p>
                    </div>
                    <div className='slider-txt_him sildermain mb-5'>
                        <Slider {...settings}>
                            <div className='slidercontainer'>
                                <div className='sliderimgbox'>
                                    <img src={giftproduct1} alt="" width={280} height={280} className='giftsliderImg mb-3' />
                                </div>
                                <div className='gifttitle'>
                                    <div className='priceCart'><h5>RS 205</h5><button className='Addbutton2'>Add To Cart</button></div>
                                    <h5 className='fonthead'>LA CREATION SAGE & OCEAN</h5>
                                    <p className='sliderItemp'>Perfume Best Creation</p>
                                    <p className='sliderItemp'>Aromatic & Marine</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='sliderimgbox'>
                                    <img src={giftproduct1} alt="" width={280} height={280} className='giftsliderImg mb-3' />
                                </div>
                                <div className='gifttitle'>
                                    <div className='priceCart'><h5>RS 205</h5><button className='Addbutton2'>Add To Cart</button></div>
                                    <h5 className='fonthead'>LA CREATION SAGE & OCEAN</h5>
                                    <p className='sliderItemp'>Perfume Best Creation</p>
                                    <p className='sliderItemp'>Aromatic & Marine</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='sliderimgbox'>
                                    <img src={giftproduct1} alt="" width={280} height={280} className='giftsliderImg mb-3' />
                                </div>
                                <div className='gifttitle'>
                                    <div className='priceCart'><h5>RS 205</h5><button className='Addbutton2'>Add To Cart</button></div>
                                    <h5 className='fonthead'>LA CREATION SAGE & OCEAN</h5>
                                    <p>Perfume Best Creation</p>
                                    <p>Aromatic & Marine</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='sliderimgbox'>
                                    <img src={giftproduct1} alt="" width={280} height={280} className='giftsliderImg mb-3' />
                                </div>
                                <div className='gifttitle'>
                                    <div className='priceCart'><h5>RS 205</h5><button className='Addbutton2'>Add To Cart</button></div>
                                    <h5 className='fonthead'>LA CREATION SAGE & OCEAN</h5>
                                    <p>Perfume Best Creation</p>
                                    <p>Aromatic & Marine</p>
                                </div>
                            </div>
                            <div className=''>
                                <div className='sliderimgbox'>
                                    <img src={giftproduct1} alt="" width={280} height={280} className='giftsliderImg mb-3' />
                                </div>
                                <div className='gifttitle'>
                                    <div className='priceCart'><h5>RS 205</h5><button className='Addbutton2'>Add To Cart</button></div>
                                    <h5 className='fonthead'>LA CREATION SAGE & OCEAN</h5>
                                    <p >Perfume Best Creation</p>
                                    <p>Aromatic & Marine</p>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
            <div>
                <FAQ />
            </div>
        </>
    )
}

export default GiftCollections
