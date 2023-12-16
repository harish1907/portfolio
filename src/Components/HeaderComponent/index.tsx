import { useEffect, useState } from "react";
import Logo from "../../extra/assets/images/logo.png";
import $ from "jquery";

const HeaderComponent = () => {
  const [clickResponsiveMenu, setClickResponsiveMenu]: any = useState(false);

  useEffect(() => {
    if (clickResponsiveMenu) {
      $(".menu-trigger").toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    }
  }, [clickResponsiveMenu]);

  return (
    <>
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src={Logo} alt="Chain App Dev" />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#newsletter">Newsletter</a>
                  </li>
                  <li>
                    <div className="gradient-button">
                      <a id="modal_trigger" href="#modal">
                        <i className="fa fa-sign-in-alt"></i> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a
                  className="menu-trigger"
                  onClick={() => setClickResponsiveMenu(!clickResponsiveMenu)}
                >
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div id="modal" className="popupContainer" style={{ display: "none" }}>
        <div className="popupHeader">
          <span className="header_title">Login</span>
          <span className="modal_close">
            <i className="fa fa-times"></i>
          </span>
        </div>

        <section className="popupBody">
          <div className="social_login">
            <div className="">
              <a href="#" className="social_box fb">
                <span className="icon">
                  <i className="fab fa-facebook"></i>
                </span>
                <span className="icon_title">Connect with Facebook</span>
              </a>

              <a href="#" className="social_box google">
                <span className="icon">
                  <i className="fab fa-google-plus"></i>
                </span>
                <span className="icon_title">Connect with Google</span>
              </a>
            </div>

            <div className="centeredText">
              <span>Or use your Email address</span>
            </div>

            <div className="action_btns">
              <div className="one_half">
                <a href="#" id="login_form" className="btn">
                  Login
                </a>
              </div>
              <div className="one_half last">
                <a href="#" id="register_form" className="btn">
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <div className="user_login">
            <form>
              <label>Email / Username</label>
              <input type="text" />
              <br />

              <label>Password</label>
              <input type="password" />
              <br />

              <div className="checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me on this computer</label>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">
                    Login
                  </a>
                </div>
              </div>
            </form>

            <a href="#" className="forgot_password">
              Forgot password?
            </a>
          </div>

          <div className="user_register">
            <form>
              <label>Full Name</label>
              <input type="text" />
              <br />

              <label>Email Address</label>
              <input type="email" />
              <br />

              <label>Password</label>
              <input type="password" />
              <br />

              <div className="checkbox">
                <input id="send_updates" type="checkbox" />
                <label htmlFor="send_updates">
                  Send me occasional email updates
                </label>
              </div>

              <div className="action_btns">
                <div className="one_half">
                  <a href="#" className="btn back_btn">
                    <i className="fa fa-angle-double-left"></i> Back
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" className="btn btn_red">
                    Register
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeaderComponent;
