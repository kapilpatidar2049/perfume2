import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider2 from "react-slick";
import Slider from "react-slick";
import "../Css/TravelKit.css";
import Sldr_img1 from "../../assets/him_herKit1.png";
import Sldr_img2 from "../../assets/sliderKit2.png";
import Sldr_img3 from "../../assets/sliderKit1.png";
import Sldr_img4 from "../../assets/slider_img4.jpg";
import img1 from "../../assets/frag_img1.png";
import img2 from "../../assets/frag_img2.png";
import img3 from "../../assets/frag_img3.png";
import img_scent1 from "../../assets/travel_kit_img1.jpg";
import img_scent2 from "../../assets/travel_kit_img1.jpg";
// import secnt_graph from "../../assets/graph2.png";
import TravelKit_video from "../../video/video.mp4";
import TravelKit_video2 from "../../video/Lavender.mp4";
import sldr_img from "../../assets/slider_img4.jpg";
import review_img from "../../assets/avatar1.png";
import review_img1 from "../../assets/avatar.png";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FAQ from "./FAQ";
import offer from "../../assets/discount.png";



const data  = [
    { name: '', uv: 2000,  amt: 0 },
    { name: 'woody', uv: 2500, amt: 0 },
    { name: 'Animalic', uv: 2900,  amt:0 },
    { name: 'leathery', uv: 2780,  amt: 0 },
    { name: 'Floral', uv: 3090, amt: 1 },
    { name: '', uv: 3190,  amt: 0 },
  ];

const ExploreKit = () => {
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
      const [tabKit, setTabKit] = useState(11);
      const handleTabKit = (id) => {
        setTabKit(id);
      };
      const [tabKitImg, setTabKitImg] = useState(111);
      const [clickedDiv, setClickedDiv] = useState(111);
    
      const handleTabKitImg = (id) => {
        setTabKitImg(id);
        setClickedDiv(id);
      };
    
      const [selectedImage1, setSelectedImage1] = useState(null);
      const [selectedImage2, setSelectedImage2] = useState(null);
      const [isOpen1, setIsOpen1] = useState(false);
      const [isOpen2, setIsOpen2] = useState(false);
    
      const Select_scent1 = () => {
        setIsOpen1(true);
      };
    
      const Select_scent2 = () => {
        setIsOpen2(true);
      };
    
      const clearImage1 = () => {
        setSelectedImage1(null);
      };
    
      const clearImage2 = () => {
        setSelectedImage2(null);
      };
    
      const handleClick1 = (img) => {
        setSelectedImage1(img);
        setIsOpen1(false); // Close sidebar after selecting an image
      };
    
      const handleClick2 = (img) => {
        setSelectedImage2(img);
        setIsOpen2(false); // Close sidebar after selecting an image
      };
      // ADd to cart
      // const navigate = useNavigate();
      // const handleAddToCart = () => {
      //   navigate(`/addToCart?selectedImage=${encodeURIComponent(selectedImage)}`);
      // };
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
    
      const [sidebarVisible, setSidebarVisible] = useState(false);

      const copyToClipboard = () => {
        const textToCopy = "Hello, World!";
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setSidebarVisible(true);
            setTimeout(() => {
              setSidebarVisible(false);
            }, 3000); // Hide the sidebar after 3 seconds
          })
          .catch(err => {
            console.error("Could not copy text: ", err);
          });
      };
      
      const videoRef = useRef(null);
      useEffect(() => {
        const video = videoRef.current;
        const handleEnded = () => {
          video.currentTime = 0; // Reset video to start
          video.play(); // Play video again
        };
        video.addEventListener("ended", handleEnded);
        return () => {
          video.removeEventListener("ended", handleEnded);
        };
      }, []);

      


  return (
    <>
    <div className="container travel_bg">
    <div className="travel_txt">Explore Kit</div>      
    </div>
    <div className="travelll">
    <div className="container travel_kit">
      <div className="row">
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

        <div className="col-lg-7 text_kit">
          <h3 className="text-center1">
            {" "}
           Explore purefume kit
          </h3>
          {/***********************START content-Desc-scent chara *******************/}
          <div className="row">
            <div className=" col-lg-2 creation">
              <p onClick={() => handleTabKit(11)} className="headingKit ">
                Creation
              </p>
              <div className={tabKit == 11 ? "show-content" : "content"}>
                  <span className="descriptionLine"></span></div>
            </div>
            <div className="col-lg-2 creation1">
              <p onClick={() => handleTabKit(22)} className="headingKit ">
                Description
              </p>
              <div className={tabKit == 22 ? "show-content" : "content"}>
                  <span className="descriptionLine"></span></div>
            </div>
            
          </div>
          {/***********************END content-Desc-scent chara *******************/}

          {/*********************** Content *******************/}

          <div className={tabKit == 11 ? "show-content11" : "content"}>
            <div className="explore_kit pt-3">
             
             <p><span className="txxt">Collection : </span> Elegant</p>
             <p><span className="txxt">Chic & Luxurious : </span> Mood </p>
             <p><span className="txxt">Set Content : </span> 5 x 5ml sprays of Eau de Parfum: Rose Ritual, Sleek Sandalwood, Vetiver Virtuoso, Mimosa Mantra, Amber Affair </p>
         
            </div>
            <div>                       
            </div>
          </div>
          {/*********************** Description *******************/}
          <div className={tabKit == 22 ? "show-content mt-4 mb-4" : "content"}>
            <p className="my-3">
              Innovative, creative and game-changing, the Dual Scented Crayon
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
              your 2 scents together to unleash your own signature scent.{" "}
            </p>
          </div>
          {/*********************** Scent characteristics *******************/}
          

           {/***********************Start Payment *******onClick={handleAddToCart}************/}
           <div className="row">
           <div className="text-end">
            <hr />
             <h3> ₹ 649</h3>
           </div>
         </div>
         {/***********************END  Payment *******************/}
         {/***********************START Offer *******************/}
         <div className="offer_code1">  
         <div className="offer">
           <img src={offer} /> Limited Offer
           </div>
         <div className="offer_code">Add 2 sets at checkout and use promo code to get 2 sets for     the price of 1:PURE77
           <button onClick={copyToClipboard} className="copy_btn"><i className="fa-regular fa-copy cope-btn" /></button>
         </div>
         </div>
         {/***********************END  Offer *******************/}
         {/***********************Start ADD to cart *******onClick={handleAddToCart}************/}
         <div className="add_buttn">
           <div className="row">
             <Link to="/AddCart" className="col">
               <p>
                 <button className="add1 "> Add To Cart </button>{" "}
               </p>
             </Link>
             <div className="col-lg-3">
             <p className="add2">
                 <button
                   onClick={() => updateCount("item", "decrement")}
                   className="cart-buton fw-bold"
                 >
                 − 
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
         {/***********************END ADD to cart *******************/}
        </div>
      </div>
    </div>

    {/********************START Review Section********************* */}
    <div className="container review mt-4">
      <div className="review_text text-center">
        <h4>Customer Review</h4>
        <p> 5/5 </p>
        <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
      </div>
      <hr />
     
      <div className="row mt-4">
        <div className="col-lg-3 mt-4 text-center">
          <img src={review_img} />
        </div>
        <div className="col-lg-8 mt-4 comment_txt">
          <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p>
            Lorem Ipsum is a piece of text, used by designers to fill a space
            where the content will eventually sit.{" "}
          </p>
          <p>Dazy Bonez , May 14th 2024</p>
        </div>
        <div className="col-lg-3 mt-4 text-center">
          <img src={review_img1} />
        </div>
        <div className="col-lg-8 mt-4 comment_txt">
          <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p>
            Lorem Ipsum is a piece of text, used by designers to fill a space
            where the content will eventually sit.{" "}
          </p>
          <p>Janiee K Shaz , May 29th 2024</p>
        </div>
        <div className="col-lg-3 mt-4 text-center">
          <img src={review_img} />
        </div>
        <div className="col-lg-8 mt-4 comment_txt">
          <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          <p>
            Lorem Ipsum is a piece of text, used by designers to fill a space
            where the content will eventually sit.{" "}
          </p>
          <p>kim JS , June 9th 2024</p>
        </div>
      </div>
    </div>
    {/********************END REview Section********************* */}
    {/********************VIdeo Section********************* */}
    <div className="TravelKit_video2 mt-4">
      <video
        className="TravelKit_video_section2"
        ref={videoRef}
        autoPlay
        muted
        loop
      >
        <source src={TravelKit_video} type="video/mp4" />
      </video>
    </div>
    {/********************END VIdeo Section********************* */}

    {/********************START slider Section********************* */}
    <div className="container slider_cont_kit">
      <div className="slider_txt_kit">
        <Slider {...settingsKit}>
          <div className="slider_txt_kit3">
            <img src={sldr_img} />
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

    <div>
      <FAQ />
    </div>
    </div>
    </>
  )
}

export default ExploreKit
