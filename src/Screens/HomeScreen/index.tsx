import HeaderComponent from "../../Components/HeaderComponent";
import SliderDecImg from "../../extra/assets/images/slider-dec.png";
import HeadingLincImg from "../../extra/assets/images/heading-line-dec.png";
import ContentBox from "../../Components/ContentBox";
import AboutRightDec from "../../extra/assets/images/about-right-dec.png";
import Quote from "../../extra/assets/images/quote.png";
import ClientImage from "../../extra/assets/images/client-image.jpg";
import PriceTableImg1 from "../../extra/assets/images/pricing-table-01.png";
import WhiteLogo from "../../extra/assets/images/white-logo.png";
import { useEffect } from "react";
import WowComponent from "../../WowComponent";

const boxText = [
  {
    heading: "App Development with React Native",
    text: `Crafting intuitive and powerful mobile experiences`,
    serviceType: "first-service",
  },
  {
    heading: "Web Development with Django",
    text: `Building robust and scalable web solutions`,
    serviceType: "second-service",
  },
  {
    heading: "Web Development with React.js",
    text: `Designing interactive and dynamic web applications`,
    serviceType: "third-service",
  },
  {
    heading: `AI Chatbots`,
    text: "Revolutionizing communication with intelligent bots ",
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
                        <h2>Explore Our Portfolio & Witness Innovation Unleashed</h2>
                        <p>
                        Chain App Dev is not just a team,
                        we're your creative partners, a dynamic squad of five experts, each excelling in diverse domains. 
                        Our mission is to turn your ideas into digital reality, and we're here to make that journey exhilarating
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-apple"></i>
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#contact">
                            Free Quote <i className="fab fa-google-play"></i>
                          </a>
                        </div>
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
                At Chain App Dev, our passion fuels innovation. 
                From crafting seamless apps with React Native to shaping dynamic web experiences with Django and React.js, 
                pioneering IoT device development, and revolutionizing communication with AI chatbots, our portfolio is a testament to excellence.
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
                  About <em>What We Do</em> &amp; Who We Are
                </h4>
                <img src={HeadingLincImg} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eismod tempor incididunt ut labore et dolore magna.
                </p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eismod tempor idunte ut labore et dolore adipiscing
                    magna.
                  </p>
                  <div className="gradient-button">
                    <a href="#">Start 14-Day Free Trial</a>
                  </div>
                  <span>*No Credit Card Required</span>
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
                  Check What <em>The Clients Say</em> About Our App Dev
                </h4>
                <img src={HeadingLincImg} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eismod tempor incididunt ut labore et dolore magna.
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
                                <h4>David Martino Co</h4>
                                <span className="date">30 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Financial Apps</span>
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
                                <h4>Jake Harris Nyo</h4>
                                <span className="date">29 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  Digital Business
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
                                <h4>May Catherina</h4>
                                <span className="date">27 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  Business &amp; Economics
                                </span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">4.7</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Random User</h4>
                                <span className="date">24 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  New App Ecosystem
                                </span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span className="rating">3.9</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="last-thumb">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Mark Amber Do</h4>
                                <span className="date">21 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  Web Development
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
                                      “Lorem ipsum dolor sit amet, consectetur
                                      adpiscing elit, sed do eismod tempor
                                      idunte ut labore et dolore magna aliqua
                                      darwin kengan lorem ipsum dolor sit amet,
                                      consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>David Martino</h4>
                                      <span>CEO of David Company</span>
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
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>Jake H. Nyo</h4>
                                      <span>CTO of Digital Company</span>
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
                                      “May, Lorem ipsum dolor sit amet,
                                      consectetur adpiscing elit, sed do eismod
                                      tempor idunte ut labore et dolore magna
                                      aliqua darwin kengan lorem ipsum dolor sit
                                      amet, consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>May C.</h4>
                                      <span>Founder of Catherina Co.</span>
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
                                      “Lorem ipsum dolor sit amet, consectetur
                                      adpiscing elit, sed do eismod tempor
                                      idunte ut labore et dolore magna aliqua
                                      darwin kengan lorem ipsum dolor sit amet,
                                      consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>Random Staff</h4>
                                      <span>Manager, Digital Company</span>
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
                                      “Mark, Lorem ipsum dolor sit amet,
                                      consectetur adpiscing elit, sed do eismod
                                      tempor idunte ut labore et dolore magna
                                      aliqua darwin kengan lorem ipsum dolor sit
                                      amet, consectetur picing elit massive big
                                      blasta.”
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>Mark Am</h4>
                                      <span>CTO, Amber Do Company</span>
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
                  We Have The Best Pre-Order <em>Prices</em> You Can Get
                </h4>
                <img src={HeadingLincImg} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$12</span>
                <h4>Standard Plan App</h4>
                <div className="icon">
                  <img src={PriceTableImg1} alt="" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>20 TB of Storage</li>
                  <li className="non-function">Life-time Support</li>
                  <li className="non-function">Premium Add-Ons</li>
                  <li className="non-function">Fastest Network</li>
                  <li className="non-function">More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-pro">
                <span className="price">$25</span>
                <h4>Business Plan App</h4>
                <div className="icon">
                  <img src={PriceTableImg1} alt="" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>50 TB of Storage</li>
                  <li>Life-time Support</li>
                  <li>Premium Add-Ons</li>
                  <li className="non-function">Fastest Network</li>
                  <li className="non-function">More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$66</span>
                <h4>Premium Plan App</h4>
                <div className="icon">
                  <img src={PriceTableImg1} alt="" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>120 TB of Storage</li>
                  <li>Life-time Support</li>
                  <li>Premium Add-Ons</li>
                  <li>Fastest Network</li>
                  <li>More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#">Purchase This Plan Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Join our mailing list to receive the news &amp; latest trends
                </h4>
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
                <h4>About Our Company</h4>
                <div className="logo">
                  <img src={WhiteLogo} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2022 Chain App Dev Company. All Rights Reserved.
                  <br />
                  Design:{" "}
                  <a
                    href="https://templatemo.com/"
                    target="_blank"
                    title="css templates"
                  >
                    TemplateMo
                  </a>
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
