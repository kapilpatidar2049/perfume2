import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Slider2 from "react-slick";
import Slider from "react-slick";
import "../Css/TravelKit.css";
import img1 from "../../assets/slider_img1.jpg";
import img22 from "../../assets/slider_img2.jpg";
import img33 from "../../assets/slider_img3.jpg";
import img2 from "../../assets/frag_img2.png";
import img3 from "../../assets/frag_img3.png";
import img4 from "../../assets/slider_img4.jpg";
import img_scent1 from "../../assets/travel_kit_img1.jpg";
import img_scent2 from "../../assets/travel_kit_img1.jpg";
import secnt_graph from "../../assets/graph2.png";
import TravelKit_video from "../../video/video.mp4";
import TravelKit_video2 from "../../video/Lavender.mp4";
import sldr_img from "../../assets/slider_img4.jpg";
import review_img from "../../assets/avatar.png";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import FAQ from "./FAQ";


const data = [
  { name: '', uv: 2000, amt: 6000 },
  { name: 'woody', uv: 2500, amt: 2210 },
  { name: 'Animalic', uv: 2900, amt: 2290 },
  { name: 'leathery', uv: 2780, amt: 2000 },
  { name: 'Floral', uv: 3090, amt: 2181 },
  { name: '', uv: 3200, amt: 2500 },
];

const TravelKit = () => {
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
  const [tabKitImg, setTabKitImg] = useState(222);
  const [clickedDiv, setClickedDiv] = useState(111);

  const handleTabKitImg = (id) => {
    setTabKitImg(id);
    setClickedDiv(id);
  };

  const handleClick1 = (img) => {
    setSelectedImage1(img);
    setshowGraph(!showGraph);
  };

  const handleClick2 = (img) => {
    setSelectedImage2(img);
    setshowGraph(!showGraph);
  };

  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [showGraph, setshowGraph] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


  // back btn
  const handleBackClick = () => {
    setshowGraph(false);
  };
  // end back btn
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

  // const handleClick1 = (img) => {
  //   setSelectedImage1(img);
  //   setIsOpen1(false); // Close sidebar after selecting an image
  // };

  // const handleClick2 = (img) => {
  //   setSelectedImage2(img);
  //   setIsOpen2(false); // Close sidebar after selecting an image
  // };
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
      <div className="travel_txt">Travel Kit</div>      
      </div>
      <div className="travelll">
        <div className="container travel_kit">
            <div className="row">
            <div className="col-lg-5">
              <div className="slider_kit">
                <Slider2 {...settings1} className="mt-5">
                  <div>
                    <img src={img1} className="img_slider1" />
                  </div>
                  <div>
                    <img src={img22} className="img_slider1" />
                  </div>
                  <div>
                    <img src={img33} className="img_slider1" />
                  </div>
                  <div>
                    <img src={img4} className="img_slider1" />
                  </div>
                </Slider2>
              </div>
            </div>

            <div className="col-lg-7 text_kit">
              <h3 className="text-center1">
                {" "}
                Create Your Travel Kit in few steps{" "}
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
                <div className="col-lg-4 creation2">
                  <p onClick={() => handleTabKit(33)} className="headingKit ">
                    Scent Characteristics
                  </p>
                  <div className={tabKit == 33 ? "show-content" : "content"}>
                                        <span className="descriptionLine"></span></div>
                </div>
              </div>
              {/***********************END content-Desc-scent chara *******************/}

              {/*********************** Content *******************/}

              <div className={tabKit == 11 ? "show-content" : "content"}>
                <div>
                  {isOpen1 && (
                    <div className={`sidebar1 ${isOpen1 ? "open" : ""}`}>
                      <div className="select_kit ">
                        <div className="ms-3 select_kitinnerbox">
                          <button
                            className="close-btn"
                            onClick={() => {
                              setIsOpen1(false);
                              setshowGraph(false);
                              setSelectedImage1(null);
                            }}
                          >
                            <i className="cancel_btn_kit fa-solid fa-xmark" />
                          </button>
                          <h2 className="head mt-3 mb-3">
                            Choose your First Fragrance
                          </h2>
                          <div className="row text-white ">
                          <div className="col-lg-3 col-12 filtr">
                          <label >Filter</label>
                          <select class="form-select form-control custom-select" aria-label="Default select example">
                            <option selected>Family</option>
                            <option value="1">Mother</option>
                            <option value="2">Father</option>
                            <option value="3">Kids</option>
                          </select>
                          </div>
                          <div className="col-lg-2 col-0"></div>
                          <div className="col-lg-6 col-12 filtr2">
                              <div className="">
                                <label htmlFor="">Search</label>
                                <InputGroup className="mb-3">
                                  <FormControl className="custom_input searchbuttonbox"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                  />
                                  <Button variant="dark" className="searchbuttoniconbox">
                                    <FontAwesomeIcon icon={faSearch} />
                                  </Button>
                                </InputGroup>
                                </div>
                          </div>
                          </div>
                          <div className="container sidbarcontainerbox">
                            <div className="row mt-4">
                              <h3 className="text-white mb-4">Aromatic and Green</h3>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img"
                                  onClick={() => handleClick1(img1)}
                                  className={selectedImage1 === img1 ? "selected" : ""}
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img1"
                                  onClick={() => handleClick1(img1)}
                                  className={
                                    selectedImage1 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img2}
                                  alt="img2"
                                  onClick={() => handleClick1(img2)}
                                  className={
                                    selectedImage1 === img2 ? "selected" : ""
                                  }
                                />
                              </div>
                            </div>
                            <div className="row mt-4">
                              <h3 className="text-white mb-4">Aromatic and Green</h3>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img"
                                  onClick={() => handleClick1(img1)}
                                  className={
                                    selectedImage1 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img1"
                                  onClick={() => handleClick1(img1)}
                                  className={
                                    selectedImage1 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img2}
                                  alt="img2"
                                  onClick={() => handleClick1(img2)}
                                  className={
                                    selectedImage1 === img2 ? "selected" : ""
                                  }
                                />
                              </div>
                            </div>
                            <div className="row mt-4">
                              <h3 className="text-white mb-4">Aromatic and Green</h3>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img"
                                  onClick={() => handleClick1(img1)}
                                  className={
                                    selectedImage1 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img1"
                                  onClick={() => handleClick1(img1)}
                                  className={
                                    selectedImage1 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img2}
                                  alt="img2"
                                  onClick={() => handleClick1(img2)}
                                  className={
                                    selectedImage1 === img2 ? "selected" : ""
                                  }
                                />
                              </div>
                            </div>
                          </div>                         
                        </div>
                        <div className="sidbarbottonbuttonbox">
                        <div className="row">
                          <div className="col-lg-6">
                            <button className="sidbarcancelbutton"
                              onClick={() => {
                                setIsOpen1(false);
                                setshowGraph(false);
                                setSelectedImage1(null);
                              }}>Cancel</button>
                          </div>
                          <div className="col-lg-6"><button className="sidbarapplybutton" onClick={() => {
                            setIsOpen1(false);
                            setshowGraph(false);
                          }}>Apply</button></div>
                        </div>
                        </div>                        
                      </div>
                    </div>
                  )}
                  {isOpen2 && (
                    <div className={`sidebar1 ${isOpen2 ? "open" : ""}`}>
                      <div className="select_kit">
                        <div className="ms-3 select_kitinnerbox">
                          <button
                            className="close-btn"
                            onClick={() => {
                              setIsOpen2(false);
                              setshowGraph(false);
                              setSelectedImage2(null);
                            }}
                          >
                            <i className="cancel_btn_kit fa-solid fa-xmark" />
                          </button>
                          <h2 className="head mt-3 mb-3">
                            Choose your Second Fragrance
                          </h2>

                          <div className="row text-white ">
                          <div className="col-lg-3 col-12 filtr">
                          <label >Filter</label>
                          <select class="form-select form-control custom-select" aria-label="Default select example">
                            <option selected>Family</option>
                            <option value="1">Mother</option>
                            <option value="2">Father</option>
                            <option value="3">Kids</option>
                          </select>
                          </div>
                          <div className="col-lg-2 col-0"></div>
                          <div className="col-lg-6 col-12 filtr2">
                              <div className="">
                                <label htmlFor="">Search</label>
                                <InputGroup className="mb-3">
                                  <FormControl className="custom_input searchbuttonbox"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                  />
                                  <Button variant="dark" className="searchbuttoniconbox">
                                    <FontAwesomeIcon icon={faSearch} />
                                  </Button>
                                </InputGroup>
                                </div>
                          </div>
                          </div>

                          <div className="container sidbarcontainerbox">
                            <div className="row mt-4">
                              <h3 className="text-white mb-4">Aromatic and Green</h3>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img"
                                  onClick={() => handleClick2(img1)}
                                  className={
                                    selectedImage2 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img1"
                                  onClick={() => handleClick2(img1)}
                                  className={
                                    selectedImage2 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img2}
                                  alt="img2"
                                  onClick={() => handleClick2(img2)}
                                  className={
                                    selectedImage2 === img2 ? "selected" : ""
                                  }
                                />
                              </div>
                            </div>
                            <div className="row mt-4">
                              <h3 className="text-white mb-4">Aromatic and Green</h3>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img"
                                  onClick={() => handleClick2(img1)}
                                  className={
                                    selectedImage2 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img1"
                                  onClick={() => handleClick2(img1)}
                                  className={
                                    selectedImage2 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img2}
                                  alt="img2"
                                  onClick={() => handleClick2(img2)}
                                  className={
                                    selectedImage2 === img2 ? "selected" : ""
                                  }
                                />
                              </div>
                            </div>
                            <div className="row mt-4">
                              <h3 className="text-white mb-4">Aromatic and Green</h3>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img"
                                  onClick={() => handleClick2(img1)}
                                  className={
                                    selectedImage2 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img1}
                                  alt="img1"
                                  onClick={() => handleClick2(img1)}
                                  className={
                                    selectedImage2 === img1 ? "selected" : ""
                                  }
                                />
                              </div>
                              <div className="fragnace_kit col-lg-2 col-4">
                                <img
                                  src={img2}
                                  alt="img2"
                                  onClick={() => handleClick2(img2)}
                                  className={
                                    selectedImage2 === img2 ? "selected" : ""
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sidbarbottonbuttonbox">
                        <div className="row">
                          <div className="col-lg-6">
                            <button className="sidbarcancelbutton"
                              onClick={() => {
                                setIsOpen2(false);
                                setshowGraph(false);
                                setSelectedImage2(null);
                              }}>Cancel</button>
                          </div>
                          <div className="col-lg-6"><button className="sidbarapplybutton" onClick={() => {
                            setIsOpen2(false);
                            setshowGraph(false);
                          }}>Apply</button></div>
                        </div>
                        </div>
                      </div>
                      
                    </div>
                  )}
                  <div className="steps_kit mt-4">
                    <h5>Select Your first fragrance</h5>
                    {selectedImage1 && (
                      <div className="contained">
                        <img
                          src={selectedImage1}
                          alt="Selected Image"
                          className="select-img_kit"
                        />
                        <i
                          className="delete-icon fa-solid fa-trash"
                          onClick={clearImage1}
                        />
                      </div>
                    )}
                    {!selectedImage1 && (
                      <button
                        type="button"
                        className="select-btn btn-info"
                        onClick={Select_scent1}
                      >
                        Select scent
                      </button>
                    )}
                  </div>
                  <div className="steps_kit mt-4">
                    <h5>Select Your second fragrance</h5>
                    {selectedImage2 && (
                      <div className="contained">
                        <img
                          src={selectedImage2}
                          alt="Selected Image"
                          className="select-img_kit"
                        />
                        <i
                          className="delete-icon fa-solid fa-trash"
                          onClick={clearImage2}
                        />
                      </div>
                    )}
                    {!selectedImage2 && (
                      <button
                        type="button"
                        className="select-btn btn-info"
                        onClick={Select_scent2}
                      >
                        Select scent
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <hr />
                  {/***********************Start Payment *******onClick={handleAddToCart}************/}
                  <div className="row">
                    <div className="text-end">
                      <h3> ₹ 450</h3>
                    </div>
                  </div>
                  {/***********************END  Payment *******************/}
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

              {showGraph && (
                <div className="showgraph">
                  <div className="row">
                    <div className="col-lg-5 ms-3">
                      <div className="backk_btn" onClick={handleBackClick}><i className="fa-solid fa-less-than" /></div>
                      <div className="ScentImgOuterBox2 mt-3">
                        <div className="text-center align-center ScentImgInnerBox2">
                          <h5>FRESHand ESCAPING</h5>
                          <h2>OCEAN ODYSSEY</h2>
                          <span className="ScentTagbutton">STYLISH</span><span className="ScentTagbutton">CONFIDENT</span><span className="ScentTagbutton">FRESH</span>
                        </div>
                      </div>
                      <div className="scent_graph  mt-2">
                        <div className="row">
                          <div className="col-lg-12 ">
                            <LineChart
                              width={600}
                              height={350}
                              data={data}
                              margin={{ top: 20, right: 0, left: 50, bottom: 0 }}
                            >
                              <XAxis dataKey="name" />
                              <Tooltip />
                              <CartesianGrid stroke="#f5f5f5" />
                              <Line
                                type="monotone"
                                dataKey="uv"
                                stroke="#ff7300"
                                yAxisId={0}
                              />
                            </LineChart>
                          </div>
                          <div className="col-lg-6 scent_graph_txt2">
                            <h5> Olfactive Family : <span className="para_txt">fragranace</span></h5>
                            <h5> Lasting             : <span className="para_txt">9 hours</span></h5>
                          </div>
                          <div className="col-lg-6 scent_graph_txt">
                            <div className="row">
                              <div className="">
                                <h5>Confident</h5>
                                <div className="red"></div>
                                <h5>Fresh</h5>
                                <div className="fresh"></div>
                                <h5>Stylish</h5>
                                <div className="stylish"></div>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-4">
                            <h3>Scent Desciption </h3>
                            <p>
                              Lavender the Calming Scent This iconic scent combines
                              fresh aromatic and floral notes for a crisp fragrance It
                              revitalizes your body bringing balance and confidence to
                              your daily life{" "}
                            </p>
                          </div>
                        </div>
                        </div>
                        
                      <div className="TravelKit_video">
                        <video
                          className="TravelKit_video_section"
                          ref={videoRef}
                          autoPlay
                          muted
                          loop
                        >
                          <source src={TravelKit_video} type="video/mp4" />
                        </video>
                      </div>
                      </div>
                    <div className="col-lg-7"></div>
                  </div>


                </div>
              )}
              {/*********************** Description *******************/}
              <div className={tabKit == 22 ? "show-content mt-4 mb-4" : "content"}>
                <p>
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
              <div className={tabKit == 33 ? "show-content mt-4 mb-4" : "content"}>
            
          <div className={tabKitImg == 222 ? "show-content" : "content"}>
              <div className="Scent_image">
                  <div className="row ">
                      <div className="col-lg-4 scent_kit_img2 text-center" onClick={() => handleTabKitImg(222)}><img src={img2} /><p>Rose</p></div>
                      <div className="col-lg-4 scent_kit_img2 text-center" onClick={() => handleTabKitImg(333)}><img src={img3} /><p>Lavender</p></div>
                      
                  </div>
              </div>
             
              <div className="ScentImgOuterBox2 mt-3">
                 <div className="text-center align-center ScentImgInnerBox2">
                 <h5>FRESH & ESCAPING</h5>
                 <h2>OCEAN ODYSSEY</h2>
                  <span className="ScentTagbutton">STYLISH</span><span className="ScentTagbutton">CONFIDENT</span><span className="ScentTagbutton">FRESH</span>
                  </div>
                 
              </div>

              <div className="row scent_graph">
                  <div className="col-lg-12 ">
                      <LineChart
                          width={600}
                          height={350}
                          data={data}
                          margin={{ top: 20, right: 0, left: 50, bottom: 0 }}
                      >
                          <XAxis dataKey="name" />
                          <Tooltip />
                          <CartesianGrid stroke="#f5f5f5" />
                          <Line
                              type="monotone"
                              dataKey="uv"
                              stroke="#ff7300"
                              yAxisId={0}
                          />
                      </LineChart>
                  </div>
                  <div className="col-lg-6 scent_graph_txt2">
                      <h5> Olfactive Family : <span className="para_txt">fragranace</span></h5>
                      <h5> Lasting             : <span className="para_txt">9 hours</span></h5>
                  </div>
                  <div className="col-lg-6 scent_graph_txt">
                      <div className="row">
                          <div className="">
                              <h5>Confident</h5>
                              <div className="red"></div>
                              <h5>Fresh</h5>
                              <div className="fresh"></div>
                              <h5>Stylish</h5>
                              <div className="stylish"></div>
                          </div>
                      </div>
                  </div>

                  <div className="row mt-4">
                      <h3>Scent Desciption </h3>
                      <p>
                          Lavender the Calming Scent This iconic scent combines
                          fresh aromatic and floral notes for a crisp fragrance It
                          revitalizes your body bringing balance and confidence to
                          your daily life{" "}
                      </p>
                  </div>
              </div>
              <div className="TravelKit_video ">
              <h5>Visualization of Scent</h5>
              <video
                  className="TravelKit_video_section"
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
              >
                  <source src={TravelKit_video2} type="video/mp4" />
              </video>
          </div>
          </div>
          <div className={tabKitImg == 333 ? "show-content" : "content"}>
              <div className="Scent_image">
                  <div className="row ">
                      <div className="col-lg-4 scent_kit_img2 text-center" onClick={() => handleTabKitImg(222)}><img src={img2} /><p>Rose</p></div>
                      <div className="col-lg-4 scent_kit_img2 text-center" onClick={() => handleTabKitImg(333)}><img src={img3} /><p>Lavender</p></div>
                     
                  </div>
              </div>
              
              <div className=" mt-3 ScentImgOuterBox3">
              <div className="text-center align-center ScentImgInnerBox2">
              <h5>AROMATIC & CONFIDENT</h5>
              <h2>SAGE SUPREME</h2>
               <span className="ScentTagbutton">LIBERATING</span><span className="ScentTagbutton">CONFIDENT</span><span className="ScentTagbutton">FRESH</span>
               </div>
              
           </div>

              <div className="row scent_graph">
                  <div className="col-lg-12 ">
                      <LineChart
                          width={600}
                          height={350}
                          data={data}
                          margin={{ top: 20, right: 0, left: 50, bottom: 0 }}
                      >
                          <XAxis dataKey="name" />
                          <Tooltip />
                          <CartesianGrid stroke="#f5f5f5" />
                          <Line
                              type="monotone"
                              dataKey="uv"
                              stroke="#ff7300"
                              yAxisId={0}
                          />
                      </LineChart>
                  </div>
                  <div className="col-lg-6 scent_graph_txt2">
                      <h5> Olfactive Family : <span className="para_txt">fragranace</span></h5>
                      <h5> Lasting             : <span className="para_txt">9 hours</span></h5>
                  </div>
                  <div className="col-lg-6 scent_graph_txt">
                      <div className="row">
                          <div className="">
                              <h5>Confident</h5>
                              <div className="red"></div>
                              <h5>Fresh</h5>
                              <div className="fresh"></div>
                              <h5>Stylish</h5>
                              <div className="stylish"></div>
                          </div>
                      </div>
                  </div>

                  <div className="row mt-4">
                      <h3>Scent Desciption </h3>
                      <p>
                          Lavender the Calming Scent This iconic scent combines
                          fresh aromatic and floral notes for a crisp fragrance It
                          revitalizes your body bringing balance and confidence to
                          your daily life{" "}
                      </p>
                  </div>
              </div>
              <div className="TravelKit_video ">
                  <h5>Visualization of Scent</h5>
                  <video
                      className="TravelKit_video_section"
                      ref={videoRef}
                      autoPlay
                      muted
                      loop
                  >
                      <source src={TravelKit_video} type="video/mp4" />
                  </video>
              </div>
          </div>
        
        
              </div>
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
              <img src={review_img} />
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
  );
};

export default TravelKit;
