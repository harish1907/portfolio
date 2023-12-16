import HeaderComponent from "../../Components/HeaderComponent";
import SliderDecImg from "../../extra/assets/images/slider-dec.png";
import HeadingLincImg from "../../extra/assets/images/heading-line-dec.png";
import ContentBox from "../../Components/ContentBox";
import AboutRightDec from "../../extra/assets/images/about-right-dec.png";
import Quote from "../../extra/assets/images/quote.png";
import ClientImage from "../../extra/assets/images/client-image.jpg";
import Harish from "../../extra/assets/images/harish.png";
import Yash from "../../extra/assets/images/yash.jpeg";
import WhiteLogo from "../../extra/assets/images/white-logo.png";
import { useEffect } from "react";
import WowComponent from "../../WowComponent";
import LinkedInComp from "../../Components/LinkedInComp";

const boxText = [
  {
    heading: "App Development with React Native.",
    text: `Crafting intuitive and powerful mobile experiences in React Native, where creativity meets functionality, to seamlessly connect users with innovative solutions.`,
    serviceType: "first-service",
  },
  {
    heading: "Backend microservices management.",
    text: `Building robust and scalable web solutions in React Native, bridging the gap between performance and user experience for a cutting-edge digital presence.`,
    serviceType: "second-service",
  },
  {
    heading: "Responsive Web Development.",
    text: `Designing interactive and dynamic web applications with React Native, where user engagement and performance converge to deliver a cutting-edge browsing experience.`,
    serviceType: "third-service",
  },
  {
    heading: `AI Chatbots and IoT devices`,
    text: "Empowering users through immersive experiences, leveraging the capabilities of React Native to bridge the gap between cutting-edge technology and user-centric design.",
    serviceType: "fourth-service",
  },
];

const boxText2 = [
  {
    heading: "App Development with React Native.",
    text: `Flexible pricing to match your app's needs.`,
    serviceType: "first-service",
  },
  {
    heading: "Backend microservices management.",
    text: `Tailored solutions at competitive rates.`,
    serviceType: "second-service",
  },
  {
    heading: "Responsive Web Development.",
    text: `Innovative web solutions with clear pricing.`,
    serviceType: "third-service",
  },
  {
    heading: `AI Chatbots and IoT devices`,
    text: "Shaping the future with transparent costs.",
    serviceType: "fourth-service",
  },
];

const HomeScreen = () => {
  useEffect(() => {
    new WowComponent({
      animateClass: "animated",
      offset: 50,
      boxClass: "wow", // Add a default value for boxClass
      mobile: true, // Add a default value for mobile
    });
  }, []);
  return (
    <div>
      <HeaderComponent />
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>
                          Embark on a Journey Through Our Work | Where
                          Innovation Takes Center Stage
                        </h2>
                        <p>
                          Chain App Dev is not just a team, we're your creative
                          partners, a dynamic squad of five experts, each
                          excelling in diverse domains. Our mission is to turn
                          your ideas into digital reality, and we're here to
                          make that journey exhilarating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={SliderDecImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  Amazing <em>Services &amp; Features</em> for you
                </h4>
                <img src={HeadingLincImg} alt="" />
                <p>
                  At Chain App Dev, our passion fuels innovation. From crafting
                  seamless apps with React Native to shaping dynamic web
                  experiences with Django and React.js, pioneering IoT device
                  development, and revolutionizing communication with AI
                  chatbots, our portfolio is a testament to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {boxText.map((item: any) => {
              return (
                <ContentBox
                  key={item.heading}
                  heading={item.heading}
                  text={item.text}
                  serviceType={item.serviceType}
                  icon
                />
              );
            })}
          </div>
        </div>
      </div>

      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h4>
                  <em>What We Do</em> &amp; Who We Are
                </h4>
                <img src={HeadingLincImg} alt="" />
                <p>Discover Our Expertise and Ready for a transformation</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Maintance Problems</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">24/7 Support &amp; Help</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Fixing Issues About</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#">Co. Development</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p>
                    At Chain App Dev, we tailor our comprehensive services to
                    meet your unique needs. Dive into our world of expertise
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img src={AboutRightDec} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="clients" className="the-clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Your vision, our expertise. <em>Meet the Team</em>
                </h4>
                <img src={HeadingLincImg} alt="" />
                <p>
                  At Chain App Dev, meet our team of five passionate experts who
                  have successfully delivered over 90+ projects, blending
                  creativity with technical prowess. <br />
                  We don't just create; we innovate.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-7 align-self-center">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Harish Chaudhary</h4>
                                <LinkedInComp url="https://www.linkedin.com/in/harish1903/" />
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  MERN Stack with React Native Developer
                                </span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Yash Garg</h4>
                                <LinkedInComp url="https://www.linkedin.com/in/yashgarg11131/" />
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  IoT and AI developer
                                </span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Piyush Sharma</h4>
                                <LinkedInComp url="https://www.linkedin.com/in/piyush-sharma-20b029202/" />
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  Full Stack Developer
                                </span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Deepak Pradhan</h4>
                                <LinkedInComp url="https://www.linkedin.com/in/piyush-sharma-20b029202/" />
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  Front End Developer
                                </span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      "I am Harish, a dedicated MERN STACK
                                      developer specializing in REACT NATIVE,
                                      with over 4 years of experience in
                                      development. My primary focus is on
                                      delivering seamless applications with
                                      clean code to ensure client satisfaction.
                                      I possess a deep understanding of client
                                      requirements, allowing me to craft the
                                      best application architecture tailored to
                                      their needs."
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={Harish} alt="" />
                                    <div className="right-content">
                                      <h4>Harish Chaudhary</h4>
                                      <span>Team Lead</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      “CTO, Lorem ipsum dolor sit amet,
                                      consectetur adpiscing elit, sed do eismod
                                      tempor idunte ut labore et dolore magna
                                      aliqua darwin kengan lorem ipsum dolor sit
                                      amet, consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={Yash} alt="" />
                                    <div className="right-content">
                                      <h4>Yash Garg</h4>
                                      <span>IoT and AI developer</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      “Hello, I'm Piyush, a dedicated Full Stack
                                      Developer with a strong emphasis on
                                      Python. My passion lies in crafting AI
                                      chatbots, and I thrive on the challenges
                                      of model training. Let's build innovative
                                      solutions together!”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>Piyush Sharma</h4>
                                      <span>Full Stack Developer</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      "I'm Deepak, a passionate frontend
                                      developer with a focus on creating
                                      seamless user experiences. My expertise
                                      lies in harnessing the power of React.js
                                      and Next.js to build dynamic and
                                      responsive web applications."
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>Deepak Pradhan</h4>
                                      <span>Front End Developer</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  We Have The Best <em>Prices</em> You Can Get
                </h4>
                <img src={HeadingLincImg} alt="" />
                <p>
                  Transparent Pricing for Quality Services Experience
                  transparency in every aspect, including pricing. While each
                  project is unique, here's a glimpse of our pricing structure
                </p>
              </div>
            </div>
              <div className="row">
                {boxText2.map((item: any) => {
                  return (
                    <ContentBox
                      key={item.heading}
                      heading={item.heading}
                      text={item.text}
                      serviceType={item.serviceType}
                    />
                  );
                })}
              </div>
          </div>
        </div>
      </div>

      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>Stay Updated with Chain App Dev</h4>
                <h5 style={{ color: "#FFF" }}>
                  {" "}
                  Subscribe to our newsletter for the latest trends, industry
                  insights, and exciting projects.
                </h5>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <input
                        type="address"
                        name="address"
                        className="email"
                        placeholder="Email Address..."
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        Subscribe Now <i className="fa fa-angle-right"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
                <h6
                  style={{ color: "#FFF", textAlign: "center", margin: "1rem" }}
                >
                  Enter your email above to stay ahead in the digital innovation
                  game.
                </h6>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Contact Us</h4>
                <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                <p>
                  <a href="#">010-020-0340</a>
                </p>
                <p>
                  <a href="#">info@company.co</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Free Apps</a>
                  </li>
                  <li>
                    <a href="#">App Engine</a>
                  </li>
                  <li>
                    <a href="#">Programming</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">App News</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">App Dev Team</a>
                  </li>
                  <li>
                    <a href="#">Digital Web</a>
                  </li>
                  <li>
                    <a href="#">Normal Apps</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h4>About Our Team</h4>
                <div className="logo">
                  <img src={WhiteLogo} alt="" />
                </div>
                <p>
                  Your journey with Chain App Dev begins here – where creativity
                  meets experience.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright-text">
                <p>
                  Copyright © {(new Date()).getFullYear()} Chain App Dev Company. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
