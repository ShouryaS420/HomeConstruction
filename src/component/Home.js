import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Carousel1 from 'react-elastic-carousel';
import Item from './Item';
import Item1 from './Item1';

const breakPoints = [
    { width: 1, itemsToShow: 6 },
    { width: 550, itemsToShow: 6 },
    { width: 768, itemsToShow: 6 },
    { width: 1200, itemsToShow: 6 },
]
const breakPoints1 = [
    { width: 1, itemsToShow: 3.5 },
    { width: 550, itemsToShow: 3.5 },
    { width: 768, itemsToShow: 3.5 },
    { width: 1200, itemsToShow: 3.5 },
]

export default function Home() {
    const [fix, setFix] = useState(false);
    
    function setFixed() {
        if (window.scrollY >= 610) {
            setFix(true);
        } else {
            setFix(false);
        }
    }
    window.addEventListener("scroll", setFixed);

    const [fix1, setFix1] = useState(false);
    
    function setFixed1() {
        if (window.scrollY >= 200) {
            setFix1(true);
        } else {
            setFix1(false);
        }
    }
    window.addEventListener("scroll", setFixed1);
    
    const [hideBox, setHideBox] = useState(true);
    const hideBoxfunc = () => {
        setHideBox(false);
    }

    const [selects, setSelects] = useState("");
    const [credentials, setCredentials] = useState(
        {
            fName: "",
            lName: "",
            mobile: "",
            email: "",
            city: "",
            lookingFor: "",
        }
    );
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const xyz = () => {
        setCredentials(
            {
                fName: credentials.fName,
                lName: credentials.lName,
                mobile: credentials.mobile,
                email: credentials.email,
                city: selects,
                lookingFor: credentials.lookingFor,
            }
        )
    }
    const [alertInput, setAlertInput] = useState(false);
    const handleClick = async (e) => {
        e.preventDefault();
        if (credentials.fName === '') {
            setAlertInput(true)
        }if (credentials.lName === '') {
            setAlertInput(true)
        }if (credentials.mobile === '') {
            setAlertInput(true)
        }if (credentials.email === '') {
            setAlertInput(true)
        }if (credentials.city === '') {
            setAlertInput(true)
        }if (credentials.lookingFor === '') {
            setAlertInput(true)
        } else {
            setAlertInput(false);
            const {fName, lName, mobile, email, city, lookingFor} = credentials;
            const response = await fetch(`${process.env.REACT_APP_API_URL}/consultation/addConsultation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({fName, lName, mobile, email, city, lookingFor})
            });
            const json = await response.json();
            console.log(json);
        }
    }

    return (
        <>
            {/* --========== Header Start ==========-- */}
                <header id="header" className={fix ? 'fixed-top d-flex align-items-center header-transparent fixed' : 'fixed-top d-flex align-items-center header-transparent'}>
                    <div class="container d-flex align-items-center justify-content-between">
                        <div class="logo">
                            <a href="/">
                                <img src="/img/logo2.png" alt="" class="img-fluid" />
                            </a>
                        </div>
                        <nav id="navbar" class="navbar">
                            <ul>
                                <li>
                                    <a class="nav-link scrollto" target="_blank" href="https://wa.me/918378960089" style={{color: fix ? 'black' : 'white'}}>Talk to us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            {/* --========== Header End ==========-- */}

            {/* --========== Hero Section Start ==========-- */}
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <section id="contact" class="contact contact-img mt-5">
                        <div class="container" style={{ marginBottom: '0.2rem'}}>
                            <div class="row mt-5">
                                <div class="bg-image"></div>
                                <div class="col-lg-6 firstCol">
                                    <div class="info">
                                        <div class="homepage_overlay-wrapper__EeZrD">
                                            <h1 class="homepage_expTitle__2F6q9">
                                                Construct Your Dream Home
                                                <br/>
                                                <strong> With AskResidenci Home construction's. </strong>
                                            </h1>
                                            <br/>
                                            <h3 class="homepage_expMiddleTitle__1mP5_">Get your 
                                                <font color="#ed1c24">
                                                    <strong> Plot Inspection</strong>
                                                </font> And<br/>
                                                <span>
                                                    <font color="#ed1c24">
                                                        <strong>Construction Quotation</strong>
                                                    </font> for 
                                                    <font color="#ed1c24">
                                                        <strong>FREE</strong>
                                                    </font>.
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-5 mt-lg-0" style={{ justifyContent: 'end', display: 'flex'}}>
                                    <form class="consult-form">
                                        <div class="row">
                                            <input type="text" name="fName" id="fName" class={`form-control mb-2 ${alertInput === true ? 'active' : 'deActive'}`} placeholder="First Name" value={credentials.fName} onChange={onChange} required />
                                            <input type="text" class={`form-control mb-2 ${alertInput === true ? 'active' : 'deActive'}`} name="lName" id="lName" placeholder="Last Name" value={credentials.lName} onChange={onChange} required />
                                            <input type="number" name="mobile" id="mobile" minlength="10" class={`form-control number mb-2 ${alertInput === true ? 'active' : 'deActive'}`} placeholder="Your mobile" value={credentials.mobile} onChange={onChange} required />
                                            <input type="email" class={`form-control mb-2 ${alertInput === true ? 'active' : 'deActive'}`} name="email" id="email" placeholder="Your Email" value={credentials.email} onChange={onChange} required />
                                        </div>
                                        <div class="row" style={{ marginBottom: '-17px' }}>
                                            <select
                                                name="city"
                                                class={`custom-select ${alertInput === true ? 'active' : 'deActive'}`}
                                                onClick={e=>setSelects(e.target.value)}
                                                required
                                            >
                                                <option>--Select City--</option>
                                                <option value="pune">Pune</option>
                                                <option value="aurangabad">Aurangabad</option>
                                                <option value="mumbai">Mumbai</option>
                                                <option value="nashik">Nashik</option>
                                                <option value="nagpur">Nagpur</option>
                                                <option value="solapur">Solapur</option>
                                                <option value="amravati">Amravati</option>
                                                <option value="kohlapur">Kolhapur</option>
                                                <option value="yevatmal">Yevatmal</option>
                                                <option value="nanded">Nanded</option>
                                                <option value="hydrabad">Hydrabad</option>
                                            </select>
                                            <input type="text" class={`form-control mt-2 ${alertInput === true ? 'active' : 'deActive'}`} name="lookingFor" id="lookingFor" placeholder="What are you looking for? EX- Construction of a Home" value={credentials.lookingFor} onChange={onChange} required />
                                            <div class="termsandconditions">
                                                <input type="checkbox" name="checkbox" id="checkbox" class="checkbox" required onClick={xyz} />
                                                <span>I accept<a href="#" style={{ color: 'rgb(237, 28, 36)'}}>Terms and conditions</a></span>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" name="submit" class="mt-3" onClick={handleClick}>Book A Visit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            {/* --========== Hero Section End ==========-- */}

            {/* --========== Turn key Services Start ==========-- */}
                <section id="pricing" class="pricing">
                    <div class="container howitwork-container">
                        <div class="section-title">
                            <p>Complete <font color="#ed1c24">Turnkey Services</font></p>
                            <span>Building Your Dream Home with Our Home Construction and Interior Services</span>
                        </div>
                        <div class="OurService_trunkeyIn__9Aegl">
                            <div class="OurService_services__1naKo OurService_homeConstrctn__vlOjb">
                                <div class="OurService_serviceDetails__kFk1_">
                                    <label class="OurService_text__W4XpJ text222 f500">Home Construction</label>
                                    <p class="OurService_subText__2in_7  font14 text666">Expert construction services with personalized consultations, skilled craftsmanship, and attention to detail.</p>
                                    <span class="OurService_toKnowMore__VB1KL">
                                        <button type="button" class="OurService_knowBtn__YptuR" data-bs-toggle="modal" data-bs-target="#exampleModal">Know More </button>
                                        <svg width="20" height="10" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M.5 6h9.286H.5zm5-5 5 5-5 5" fill="#fff"></path>
                                            <path d="m5.5 1 5 5-5 5m-5-5h9.286H.5z" stroke="#4a4cf6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                                <figure>
                                    <img alt="Home Construction Services" src="/services/home-construction.png" width="180" height="100" decoding="async" data-nimg="1" class="imgFluid" loading="lazy" style={{ color: 'transparent' }} />
                                </figure>
                            </div>
                            <div class="OurService_services__1naKo OurService_interiorSrvs__wzXli">
                                <div class="OurService_serviceDetails__kFk1_">
                                    <label class="OurService_text__W4XpJ text222 f500">Interior Services</label>
                                    <p class="OurService_subText__2in_7  font14 text666">Expert interior design services with personalized guidance, attention to detail, and quality materials.</p>
                                    <span class="OurService_toKnowMore__VB1KL">
                                        <button type="button" class="OurService_knowBtn__YptuR" data-bs-toggle="modal" data-bs-target="#exampleModal">Know More </button>
                                        <svg width="10" height="10" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m5.5 1 5 5-5 5m-5-5h9.286H.5z" stroke="#d53939" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </div>
                                <figure>
                                    <img alt="Interior Design Services" src="/services/interior-services.png" width="284" height="160" decoding="async" data-nimg="1" class="imgFluid" loading="lazy" style={{ color: 'transparent' }} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
            {/* --========== Turn key Services End ==========-- */}

            {/* --========== How It Work Start ==========-- */}
                <section id="pricing" class="pricing howItWork">
                    <div class="container howitwork-container">
                        <div class="section-title">
                            <p>How it <font color="#ed1c24">works</font></p>
                            <span>Our home construction and services process is simple and streamlined, with five easy steps from booking a consultation to moving into your dream home</span>
                        </div>
                        <div class="container" style={{ maxWidth: '863px'}}>
                            <div class="row">
                                <div class="col">
                                    <div class="main-timeline">
                                        <div class="timeline">
                                            <a href="#" class="timeline-content">
                                                <p class="timeline-year">Step 1</p>
                                                <div class="timeline-icon">
                                                    <img src="/img/howItWork/consultation.png" width="67" height="70" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">Book a <font color="#ed1c24">consultation</font></h3>
                                                    <p class="description">The first step is to schedule a consultation with one of our expert home builders to discuss your vision and goals for your home construction project. During this consultation, we will gather information about your budget, timeline, and any specific requirements you have.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="timeline">
                                            <a href="#" class="timeline-content">
                                                <p class="timeline-year">Step 2</p>
                                                <div class="timeline-icon">
                                                    <img src="/img/howItWork/interior.png" width="67" height="70" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">Design and <font color="#ed1c24">planning</font></h3>
                                                    <p class="description">Based on your consultation, our team of architects and designers will work with you to create a custom home design that meets your unique needs and preferences. We will provide you with detailed plans and 3D renderings to help you visualize the final product.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="timeline">
                                            <a href="#" class="timeline-content">
                                                <p class="timeline-year">Step 3</p>
                                                <div class="timeline-icon">
                                                    <img src="/img/howItWork/permit.png" width="67" height="70" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">Permits and <font color="#ed1c24">approvals</font></h3>
                                                    <p class="description">Before construction can begin, we will take care of all the necessary permits and approvals from local authorities to ensure that your project is fully compliant with all regulations and zoning requirements.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="timeline">
                                            <a href="#" class="timeline-content">
                                                <p class="timeline-year">Step 4</p>
                                                <div class="timeline-icon">
                                                    <img src="/img/howItWork/construction.png" width="67" height="70" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">Construction</h3>
                                                    <p class="description">Once all the necessary approvals are in place, we will begin construction on your new home. Our team of skilled builders will work with the highest quality materials and attention to detail to bring your vision to life.</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="timeline">
                                            <a href="#" class="timeline-content">
                                                <p class="timeline-year">Step 5</p>
                                                <div class="timeline-icon">
                                                    <img src="/img/howItWork/key.png" width="67" height="70" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                                </div>
                                                <div class="content">
                                                    <h3 class="title">Completion and <font color="#ed1c24">handover</font></h3>
                                                    <p class="description">Finally, we will complete the finishing touches on your new home and conduct a thorough quality inspection to ensure that everything is up to our high standards. We will then hand over the keys to your new home, ready for you to move in and start enjoying your dream home.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* --========== How It Work End ==========-- */}

            {/* --========== Why Choose Us Start ==========-- */}
                <section id="pricing" class="pricing">
                    <div class="container howitwork-container">
                        <div class="section-title">
                            <p>Why choose <font color="#ed1c24">us</font></p>
                            <span>At our company, we are committed to providing our clients with exceptional turnkey services that take care of every aspect of their home construction and interior design projects.</span>
                        </div>
                        <div class="whyChooseus_whyInteriorBox__4NFp7 displayGrid grid5">
                            <div class="whyChooseus_whyItem__oCHhb plr">
                                <figure>
                                    <img alt="made order" src="/whychooseus/idea.png" width="47" height="50" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                </figure>
                                <h3 class="f500 font16 text000 mb12 mt16 textCenter lineheight20">Comprehensive Project Management</h3>
                                <p class="textCenter">We handle everything from initial planning and design to construction, installation, and finishing touches, so you can enjoy a stress-free experience and a seamless result.</p>
                            </div>
                            <div class="whyChooseus_whyItem__oCHhb plr">
                                <figure>
                                    <img alt="made order" src="/whychooseus/sketch.png" width="47" height="50" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                </figure>
                                <h3 class="f500 font16 text000 mb12 mt16 textCenter lineheight20">Customized Design Solutions</h3>
                                <p class="textCenter">Our team of experienced designers will work with you to create a customized plan that meets your specific needs, preferences, and budget, while ensuring a functional and aesthetic outcome.</p>
                            </div>
                            <div class="whyChooseus_whyItem__oCHhb plr">
                                <figure>
                                    <img alt="made order" src="/whychooseus/quality.png" width="47" height="50" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                </figure>
                                <h3 class="f500 font16 text000 mb12 mt16 textCenter lineheight20">High-Quality Materials and Workmanship</h3>
                                <p class="textCenter">We use only the finest materials and employ skilled craftsmen to ensure that every detail of your project is executed to the highest standards of quality and durability.</p>
                            </div>
                            <div class="whyChooseus_whyItem__oCHhb plr">
                                <figure>
                                    <img alt="made order" src="/whychooseus/express-delivery.png" width="47" height="50" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }} />
                                </figure>
                                <h3 class="f500 font16 text000 mb12 mt16 textCenter lineheight20">Timely Completion and Competitive Pricing</h3>
                                <p class="textCenter">We understand the importance of delivering projects on time and within budget, which is why we strive to complete every project efficiently and at a competitive cost that maximizes your investment.</p>
                            </div>
                        </div>
                    </div>
                </section>
            {/* --========== Why Choose Us End ==========-- */}

            {/* --========== Book A Free Consultation Start ==========-- */}
                <section id="cta" class="cta">
                    <div class="container ctacontainer">
                        <div class="row">
                            <div class="col-lg-9 text-center text-lg-start">
                                <h3>Book your Consultation And get a free Quotation</h3>
                                <p> Fill form sit back and relax we will consult you on new home construction, designs, interior, renovation, painting and if you don't like our packages you can Customise as per your requirement.</p>
                            </div>
                            <div class="col-lg-3 cta-btn-container text-center">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="cta-btn align-middle" href="#contact">Book A Consultation</button>
                            </div>
                        </div>
                    </div>
                </section>
            {/* --========== Book A Free Consultation End ==========-- */}

            {/* --========== Brand For You Start ==========-- */}
                <section id="clients" class="clients">
                    <div class="container clientcontainer">
                        <div class="section-title">
                            <p>THE<font color="#ed1c24"> BEST BRANDS</font> FOR YOU</p>
                            <span>We carefully select our partners based on their reputation for quality, innovation, and value. Some of the brands we work with </span>
                        </div>
                        <div style={{ marginTop: '-4rem' }}>
                            <Carousel
                                breakPoints={breakPoints}
                                pagination={false}
                                showArrows={false}
                                enableSwipe={true}
                                enableAutoPlay={true}
                                autoPlaySpeed={3000}
                            >
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand1.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand2.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="0" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand3.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="0" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand4.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="0" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand5.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="0" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand6.png" alt="" width="200rem" class="img-fluid" naptha_cursor="text" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="0" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand7.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="0" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand8.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand9.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand10.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand11.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand12.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand13.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand14.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand15.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand16.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand17.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand18.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                                <Item>
                                    <div tabindex="-1" class="sc-fsQiph XxSAY">
                                        <img src="/img/clients/brand19.png" alt="" width="200rem" class="img-fluid" />
                                    </div>
                                </Item>
                            </Carousel>
                        </div>
                    </div>
                </section>
            {/* --========== Brand For You End ==========-- */}

            {/* --========== Testimonials Start ==========-- */}
                <section id="testimonials" class="testimonials">
                    <div class="container testimonialcontainer">
                        <div class="section-title">
                            <p>What they are<font color="#ed1c24"> saying about</font> us</p>
                        </div>
                        <div class="mb">
                            <Carousel1
                                breakPoints={breakPoints1}
                                pagination={false}
                                showArrows={false}
                                enableSwipe={true}
                                enableAutoPlay={true}
                                autoPlaySpeed={3000}
                                onNextStart={true}
                            >
                                <Item1>
                                    <div tabindex="-1" class="sc-qRumB hPSzWg">
                                        <div class="testimonial-item">
                                            <p><span>"</span>I couldn't be happier with the home construction and interior services provided by AskResidenci Home-Construction. They took the time to understand my vision and brought it to life in a way that exceeded my expectations.<span>"</span></p>
                                            <h3>Pritesh Mahajan</h3>
                                            <h4>Kothrud, Pune</h4>
                                        </div>
                                    </div>
                                </Item1>
                                <Item1>
                                    <div tabindex="-1" class="sc-qRumB hPSzWg">
                                        <div class="testimonial-item">
                                            <p><span>"</span>The attention to detail in the construction of my home was outstanding. AskResidenci Home-Construction made sure every aspect of the project was done right, and their interior design team helped me create a space that is both beautiful and functional.<span>"</span></p>
                                            <h3>Suresh Bhujbal</h3>
                                            <h4>Hinjewadi, Pune</h4>
                                        </div>
                                    </div>
                                </Item1>
                                <Item1>
                                    <div tabindex="-1" class="sc-qRumB hPSzWg">
                                        <div class="testimonial-item">
                                            <p><span>"</span>From start to finish, AskResidenci Home-Construction made the process of building my dream home easy and stress-free. Their team of experts handled everything from permits to design, and the end result is a home that I'm proud to show off.<span>"</span></p>
                                            <h3>Rohini Tyagi</h3>
                                            <h4>Koregaon Park, Pune</h4>
                                        </div>
                                    </div>
                                </Item1>
                                <Item1>
                                    <div tabindex="0" class="sc-qRumB hPSzWg">
                                        <div class="testimonial-item">
                                            <p><span>"</span>I hired AskResidenci Home-Construction for their interior design services, and I couldn't be happier with the results. They listened to my needs and preferences and created a space that is comfortable, stylish, and reflective of my personality.<span>"</span></p>
                                            <h3>Rohit Mishra</h3>
                                            <h4>Punawale, Pune</h4>
                                        </div>
                                    </div>
                                </Item1>
                                <Item1>
                                    <div tabindex="0" class="sc-qRumB hPSzWg">
                                        <div class="testimonial-item">
                                            <p><span>"</span>Working with AskResidenci Home-Construction was a pleasure from start to finish. They were always available to answer my questions and kept me updated on the progress of the construction. The end result is a home that is both beautiful and functional.<span>"</span></p>
                                            <h3>Mahira Baig</h3>
                                            <h4>Koregaon Park, Pune</h4>
                                        </div>
                                    </div>
                                </Item1>
                                <Item1>
                                    <div tabindex="0" class="sc-qRumB hPSzWg">
                                        <div class="testimonial-item">
                                            <p><span>"</span>I was impressed with the level of creativity and innovation that AskResidenci Home-Construction brought to the table when designing my home's interior. They helped me achieve a look that is unique and personalized, and I am so grateful for their expertise.<span>"</span></p>
                                            <h3>Suman Kothari</h3>
                                            <h4>Talegaon Dabhade, Pune</h4>
                                        </div>
                                    </div>
                                </Item1>
                            </Carousel1>
                        </div>
                    </div>
                </section>
            {/* --========== Testimonials End ==========-- */}

            {/* --========== Footer Start ==========-- */}
                <footer id="footer">
                    <div class="footer-top">
                        <div class="container footer-container">
                            <div class="row" style={{ justifyContent: 'center' }}>
                                <div class="col-lg-3 col-md-6 footer-info">
                                    <h3>About <strong>Ashrayam</strong></h3>
                                    <p>We are india's leading Home Construction company we are having 7+ years of experience we are now expanding our work in other cities &amp; states.</p>
                                    <div class="social-links mt-3">
                                        <a href="https://www.facebook.com/profile.php?id=100092224478458" target="_blank" class="facebook">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                            </svg>
                                        </a>
                                        <a href="https://www.instagram.com/homeconstructionbyaskresidenci/" target="_blank" class="instagram">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 footer-links">
                                        <h4>Useful Links</h4>
                                        <ul>
                                            <li>
                                                <i class="bx bx-chevron-right"></i> 
                                                <a target="_blank" href="https://wa.me/918378960089">talk to us</a>
                                            </li>
                                            <li>
                                                <i class="bx bx-chevron-right"></i> 
                                                <a href="#contact">Book A Visit</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 col-md-6 footer-contact">
                                        <h4>Contact Us</h4>
                                        <p>C-213 Gravity Commercial Complex <br />behind Mitcon Balewadi, pune,<br />Maharashtra - 411045. <br /><br /><strong>Phone:</strong> +91 8378960089<br /><strong>Email:</strong> enquiry@ashrayam.in<br /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
            {/* --========== Footer End ==========-- */}

            {/* --========== Copyright Start ==========-- */}
                <section class="copyright-section">
                    <div class="container">
                        <div class="copyright">© Copyright 
                        <strong>
                            <span> <font color="#ed1c24">ASk Residenci Home Construction</font></span>
                        </strong>. 2023 All Rights Reserved</div>
                    </div>
                </section>
            {/* --========== Copyright End ==========-- */}

            {/* --========== Talk To Us Start ==========-- */}
                <div class="whatsapp_float">
                    <a action="_blank" className={fix1 ? 'show' : 'hide'}>
                        <div class={hideBox ? "talkToUs show" : "talkToUs hide"}>
                            <span>Book free consultation</span>
                            <div class="FloatingWidget_closeIcon__6M_hu" onClick={hideBoxfunc}></div>
                            <a target="_blank" href="https://wa.me/918262939755">Talk to us!</a>
                        </div>
                        <a href="https://wa.me/918262939755" action="_blank">
                            <img src="\img\whatsapp.png" width="50px" class="whatsapp_float1" />
                        </a>
                    </a>
                </div>
            {/* --========== Talk To Us End ==========-- */}
        </>
    )
}
