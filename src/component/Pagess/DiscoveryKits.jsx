import React, { useState } from 'react';
import '../Css/KidsPage.css';
import Slider2 from "react-slick";
import Slider from "react-slick";
import "../Css/TravelKit.css";
import Sldr_img1 from "../../assets/him_herKit1.png";
import Sldr_img2 from "../../assets/sliderKit2.png";
import Sldr_img3 from "../../assets/sliderKit1.png";
import Sldr_img4 from "../../assets/slider_img4.jpg";
import banner from '../../assets/KitsBannerImg.png';
import SmallImg1 from '../../assets/KitssmallImg1.png';
import SmallImg1_1 from '../../assets/kitssmallImg1.1.png';
import SmallImg2 from '../../assets/KitssmallImg2.png';
import SmallImg2_1 from '../../assets/KitssmallImg2.1.png';

const DiscoveryKits = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const toggleReadMore = () => {
        setShowMore(!showMore);
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

    return (
        <>
            <div className='container' >
                <div className='discover_kit_bg'>
                    <img src={banner} alt="Banner" />
                </div>

                <div className="row my-5 pt-5">
                    <div className="col-lg-5">
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
                    <div className="col-lg-7 pt-5">
                        <div className='mt-3'>
                            <h3>Description</h3>
                            <p>Innovative, creative and game-changing, the Dual Scented Crayon
                                boasts a pair of scents of your choice, enabling you to spray
                                and discover, one by one, the two perfumes of your choice.
                                Unleash your fun side and select a fresh and warm scent, a bold
                                and delicate one or an awakening fragrance for your morning… and
                                one sexy and unmissable scent for your nights out. The dual
                                crayon is a real portable mini scent wardrobe, enabling you to
                                touch up your perfume all day long, and switch up your scent
                                mood whenever you desire. Sleek and stylish, this iconic item
                                fits in your pocket or bag, to keep close at your side all day
                                long. Spray individually on your pulse points, or dare to layer
                                your 2 scents together to unleash your own signature scent.</p>
                            <div className='mt-5'>
                                <p className='mt-5'>SKINN Discovery Set - Women</p>
                                <p>₹345</p>
                                <p>2 ML</p>
                            </div>
                            <div className='mt-3'><button className='btn btn-dark px-3'>Buy Now</button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-5">
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
                    <div className="col-lg-7 pt-5">
                        <div className='mt-3'>
                            <h3>Description</h3>
                            <p>Innovative, creative and game-changing, the Dual Scented Crayon
                                boasts a pair of scents of your choice, enabling you to spray
                                and discover, one by one, the two perfumes of your choice.
                                Unleash your fun side and select a fresh and warm scent, a bold
                                and delicate one or an awakening fragrance for your morning… and
                                one sexy and unmissable scent for your nights out. The dual
                                crayon is a real portable mini scent wardrobe, enabling you to
                                touch up your perfume all day long, and switch up your scent
                                mood whenever you desire. Sleek and stylish, this iconic item
                                fits in your pocket or bag, to keep close at your side all day
                                long. Spray individually on your pulse points, or dare to layer
                                your 2 scents together to unleash your own signature scent.</p>
                            <div className='mt-5'>
                                <p className='mt-5'>SKINN Discovery Set - Women</p>
                                <p>₹345</p>
                                <p>2 ML</p>
                            </div>
                            <div className='mt-3'><button className='btn btn-dark px-3'>Buy Now</button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-5">
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
                    <div className="col-lg-7 pt-5">
                        <div className='mt-3'>
                            <h3>Description</h3>
                            <p>Innovative, creative and game-changing, the Dual Scented Crayon
                                boasts a pair of scents of your choice, enabling you to spray
                                and discover, one by one, the two perfumes of your choice.
                                Unleash your fun side and select a fresh and warm scent, a bold
                                and delicate one or an awakening fragrance for your morning… and
                                one sexy and unmissable scent for your nights out. The dual
                                crayon is a real portable mini scent wardrobe, enabling you to
                                touch up your perfume all day long, and switch up your scent
                                mood whenever you desire. Sleek and stylish, this iconic item
                                fits in your pocket or bag, to keep close at your side all day
                                long. Spray individually on your pulse points, or dare to layer
                                your 2 scents together to unleash your own signature scent.</p>
                            <div className='mt-5'>
                                <p className='mt-5'>SKINN Discovery Set - Women</p>
                                <p>₹345</p>
                                <p>2 ML</p>
                            </div>
                            <div className='mt-3'><button className='btn btn-dark px-3'>Buy Now</button></div>
                        </div>
                    </div>
                </div>

                <div className='readmorebox mt-5 pt-5 mx-3'>
                    <h6>Discovery Kits</h6>
                    <p>Introducing the discovery kit by Titan Skinn, designed to be your perfect introduction to the world of fragrances. Discovery kits are packed with a variety of scents waiting to be explored. Our discovery kit is your passport to discovering the finest perfumes for men and women, offering a delightful array of fragrances to suit every taste and preference. Dive in, explore, and find the scent that speaks to you!</p>
                    <div className='text-end readmore'>
                        <p onClick={toggleReadMore} style={{ cursor: 'pointer', color: 'blue' }}>
                            {showMore ? 'Show Less' : 'Read More'}
                        </p>
                    </div>
                    {showMore && (
                        <p>Introducing the discovery kit by Titan Skinn, designed to be your perfect introduction to the world of fragrances. Discovery kits are packed with a variety of scents waiting to be explored. Our discovery kit is your passport to discovering the finest perfumes for men and women, offering a delightful array of fragrances to suit every taste and preference. Dive in, explore, and find the scent that speaks to you!</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default DiscoveryKits;
