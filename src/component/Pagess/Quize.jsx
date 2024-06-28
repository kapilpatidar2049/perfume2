import React, { useState, useRef } from 'react';
import '../Css/Quize.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import matter_img1 from '../../assets/prfm.png';
import matter_img2 from '../../assets/pure1.jpg';
import m1 from '../../assets/prfm1.png';
import m2 from '../../assets/registor1.jpg';
import m3 from '../../assets/kid.png';
import m4 from '../../assets/pure3.jpg';
import m5 from '../../assets/pure3.png';
import m6 from '../../assets/pure-2.jpg';
import m7 from '../../assets/pure1.jpg';
import m8 from '../../assets/pure1.png';

const Quizes = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const steps = 10; // Total number of steps in the form
    const personalitySectionRef = useRef(null); // Ref for the personality section
    // const currentStep = 5; 

    const nextStep = () => {
        if (currentStep < steps) {
            setCurrentStep(currentStep + 1);
            scrollToNextStep();
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            scrollToPrevStep();
        }
    };

    const scrollToNextStep = () => {
        const nextStepElement = document.getElementById(`step${currentStep + 1}`);
        if (nextStepElement) {
            nextStepElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToPrevStep = () => {
        const prevStepElement = document.getElementById(`step${currentStep - 1}`);
        if (prevStepElement) {
            prevStepElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };


    const scrollToPersonalitySection = () => {
        if (personalitySectionRef.current) {
            personalitySectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <ul id="progressbar">
                {[...Array(steps).keys()].map((step) => (
                    <li key={step} className={currentStep >= step + 1 ? 'active' : ''} id={`step${step + 1}`}>
                        {step === 0 ? <i className="scent fa-solid fa-spray-can-sparkles" /> : null}
                        {step === 10 ? <i className="scent1 fa-solid fa-bottle-droplet" /> : <strong></strong>}
                    </li>
                ))}
            </ul>
            
            {/* Form steps */}
            <form id="form">
                {/* Step 1 */}
                <fieldset style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                    <div className="ques1">
                        <h1>FIRST WE'LL NEED AN INTRODUCTION FROM YOU</h1>
                    </div>
                    <button type="button" className="how_old_btn btn-primary" onClick={nextStep}>
                        Next<i class="nexxt fa-solid fa-arrow-right"></i>
                    </button>
                </fieldset>

                {/* Step 2 */}
                <fieldset style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                    <div className="ques2">
                            <h1>HOW OLD ARE YOU</h1>
                    </div>
                    <SliderComponent />
                    <button type="button" className="next-step btn-primary" onClick={nextStep}>
                        Next<i class="next fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" className="pre-step btn-light" onClick={prevStep}>
                        <i class="prv fa-solid fa-arrow-left"></i>Previous
                    </button>
                </fieldset>

                {/* Step 3 */}
                <fieldset style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                    <div className="gender_class">
                    <h1>WHAT IS YOUR GENDER</h1>
                    <div className="gender_section form-group">
                        <select className="gender form-control" id="exampleFormControlSelect1">
                            <option>MALE</option>
                            <option>FEMALE</option>
                            <option>GENDER NEUTRAL</option>
                        </select>
                    </div>
                    </div>
                    <button type="button" className="next-step btn-primary" onClick={nextStep}>
                        Next<i class="next fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" className="pre-step btn-light" onClick={prevStep}>
                        <i class="prv fa-solid fa-arrow-left"></i>Previous
                    </button>
                </fieldset>

                {/* Step 4 */}
                <fieldset style={{ display: currentStep === 4 ? 'block' : 'none' }}>
                    <div className="question1">
                        <h2>WHICH WOULD YOU RATHER DO</h2>
                    </div>
                    <div className="row">
                        <div className="matters1 col-6 img-container"onClick={nextStep} >
                            <img src={m1} alt="Take care of people" />
                            <p className="overlay-text">Take care of people</p>
                        </div>
                        <div className="matters2 col-6 img-container"onClick={nextStep}>
                            <img src={m2} alt="Lead & be in charge" />
                            <p className="overlay-text">Lead & be in charge</p>
                        </div>
                    </div>
                    <button type="button" className="next-step btn-primary" onClick={nextStep}>
                        Next<i class="next fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" className="pre-step btn-light" onClick={prevStep}>
                        <i class="prv fa-solid fa-arrow-left"></i>Previous
                    </button>
                </fieldset>

                {/* Step 5 */}
                <fieldset style={{ display: currentStep === 5 ? 'block' : 'none' }}>
                    <div className="question2">
                        <h2>WHICH COMES MOST NATURALLY TO YOU</h2>
                    </div>                    
                    <div className="row">
                        <div className="matters1 col-6 img-container"onClick={nextStep}>
                            <img src={m3} alt="Building on tradition" />
                            <p className="overlay-text">Building on tradition</p>
                        </div>
                        <div className="matters2 col-6 img-container" onClick={nextStep} >
                            <img src={m4} alt="Searching for success" />
                            <p className="overlay-text">Searching for success</p>
                        </div>
                    </div>
                    <button type="button" className="next-step btn-primary" onClick={nextStep}>
                        Next<i class="next fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" className="pre-step btn-light" onClick={prevStep}>
                        <i class="prv fa-solid fa-arrow-left"></i>Previous
                    </button>
                </fieldset>

                {/* Step 6 */}
                <fieldset style={{ display: currentStep === 6 ? 'block' : 'none' }}>
                    <div className="question3">
                        <h2>WHAT IS MOST IMPORTANT FOR YOU</h2>
                    </div>
                    <div className="row">
                        <div className="matters1 col-6 img-container"onClick={nextStep} >
                            <img src={m5} alt="Organize the future" />
                            <p className="overlay-text">Having a good time</p>
                        </div>
                        <div className="matters2 col-6 img-container"onClick={nextStep} >
                            <img src={m6} alt="Enjoy Surprises" />
                            <p className="overlay-text">Searching for success</p>
                        </div>
                    </div>
                    <button type="button" className="next-step btn-primary" onClick={nextStep}>
                        Next<i class="next fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" className="pre-step btn-light" onClick={prevStep}>
                        <i class="prv fa-solid fa-arrow-left"></i>Previous
                    </button>
                </fieldset>

                {/* Step 7 */}
                <fieldset style={{ display: currentStep === 7 ? 'block' : 'none' }}>
                    <div className="question4">
                        <h2>WHICH MATTERS THE MOST TO YOU</h2>
                    </div>                
                    <div className="row">
                        <div className="matters1 col-6 img-container"onClick={nextStep} >
                            <img src={m7} alt="Organize the future" />
                            <p className="overlay-text">Organize the future</p>
                        </div>
                        <div className="matters2 col-6 img-container" onClick={nextStep}>
                            <img src={m8} alt="Enjoy Surprises" />
                            <p className="overlay-text">Enjoy Surprises</p>
                        </div>
                    </div>
                    <button type="button" className="next-step btn-primary" onClick={nextStep}>
                        Next<i class="next fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" className="pre-step btn-light" onClick={prevStep}>
                        <i class="prv fa-solid fa-arrow-left"></i>Previous
                    </button>
                </fieldset>

                {/* Step 8 */}
                <fieldset style={{ display: currentStep === 8 ? 'block' : 'none' }}>
                    <div className="row ">
                            <div className="four_heading col-lg-6 col-md-12 col-sm-12 ">
                                <h1>HOW STRONG DO YOU LIKE YOUR PERFUME</h1>
                            </div>
                            <div className="four_img col-lg-6 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="pr col-4"onClick={nextStep}>
                                        <img src={matter_img2} alt="Perfume preference" />
                                    </div>
                                    <div className="pr1 col-4" onClick={nextStep}>
                                        <img src={matter_img2} alt="Perfume preference" />
                                    </div>
                                    <div className="pr2 col-4"onClick={nextStep}>
                                        <img src={matter_img2} alt="Perfume preference" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <button type="button" className="next-step btn-primary" onClick={nextStep}>
                        Next<i class="next fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" className="pre-step btn-light" onClick={prevStep}>
                        <i class="prv fa-solid fa-arrow-left"></i>Previous
                    </button>
                </fieldset>

                {/* Step 9 */}
                <fieldset style={{ display: currentStep === 9 ? 'block' : 'none' }}>
                    <div className="row mt-5">
                        <div className="last_one1 col-lg-6">
                        <h1>HOW WOULD YOU LIKE TO FEEL WITH YOUR PERFUME</h1>
                        </div>
                        <div className="last_two2 col-lg-6 "onClick={nextStep}>
                            <h1>FRESH AND ELEGANT<i class="last_arrow fa-solid fa-arrow-right"></i></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="last1 col-lg-6"></div>
                        <div className="last2 col-lg-6" onClick={nextStep}>
                            <h1>SEDUCTIVE AND BOLD<i class="last_arrow fa-solid fa-arrow-right"></i></h1>
                        </div>
                    </div>
                    <button type="button" className="next-step btn-primary " onClick={nextStep}>
                        Next<i class="next fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" className="pre-step btn-light " onClick={prevStep}>
                        <i class="prv fa-solid fa-arrow-left"></i>Previous
                    </button>
                </fieldset>

                {/* Step 10 */}
                
            <fieldset style={{ display: currentStep === 10 ? 'block' : 'none' }}>
                <div className='Submit_email'>
                <div className="comment">
                <input
                    type="email"
                    placeholder="dazy@gmail.com"
                    className="input_type_kit2"
                />              
                </div>
                </div>
                <div className='comment1 text-center'>
                <button type="button" className="pre-step1 btn-light " onClick={prevStep}>
                <i className="prv fa-solid fa-arrow-left"></i>Previous
            </button>
                    <button type="button" className="next-step1 btn-primary " onClick={handleSubmit}>
                        Submit
                    </button>
                   
                </div>
                </fieldset>
            </form>
            <div className="done">
            {isSubmitted && <p>Done! Thank you for submitting the form.</p>}
            </div>
            
        </div>
    );
};


// Component for age slider
const SliderComponent = () => {
    const [age, setAge] = useState(30); // Default age

    const handleChange = (event, newValue) => {
        setAge(newValue);
    };

    const marks = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 30, label: '30' },
        { value: 40, label: '40' },
        { value: 50, label: '50' },
        { value: 60, label: '60' },
        { value: 70, label: '70' },
        { value: 80, label: '80' },
        { value: 90, label: '90' },
    ];

    return (
        // age section
        <Box className="age-slider-container">
            <Typography variant="h6" gutterBottom>
            </Typography>
            <Slider
                value={age}
                onChange={handleChange}
                aria-labelledby="age-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={5}
                max={100}
                className="css-ltlhnc-MuiSlider-root age-slider"
            />
            <Typography variant="subtitle1">Your Age: {age}</Typography>
        </Box>
    );
};

export default Quizes;