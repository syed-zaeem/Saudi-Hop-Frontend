import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import CurrenctyMegaMenu from "../CurrenctyMegaMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";
import { FaPhoneAlt, FaTags } from "react-icons/fa";

import MobileMenu from "../MobileMenu";
import MainMenuForWhiteBg from "../MainMenuForWhiteBg";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link to="/" className="header-logo mr-20">
                  {/* <img src="/img/general/logo-dark.svg" alt="logo icon" />
                  <img src="/img/general/logo-dark.svg" alt="logo icon" /> */}
                  <img
                    src="/img/general/saudi_hop_logo_light-removebg.png"
                    alt="Saudi Hop"
                  />
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    {/* <MainMenu style="text-dark-1" /> */}
                    <MainMenuForWhiteBg />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="row x-gap-20 items-center xxl:d-none">
                  {/* <CurrenctyMegaMenu textClass="text-dark-1" /> */}
                  {/* End Megamenu for Currencty */}

                  {/* Start vertical devider*/}
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  {/* End vertical devider*/}

                  {/* <LanguageMegaMenu textClass="text-dark-1" /> */}
                  {/* End Megamenu for Language */}
                </div>
                {/* End language and currency selector */}

                {/* Start btn-group */}
                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  {/* <Link
                    to="/login"
                    className="button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white"
                  >
                    Become An Expert
                  </Link> */}
                  {/* <Link
                    to="/signup"
                    className="button px-30 fw-400 text-14 -outline-blue-1 h-50 text-blue-1 ml-20"
                  >
                    Sign In / Register
                  </Link> */}

                  {/* {pathname === "/" && ( */}
                  <Link
                    to="/enquire"
                    className={`button px-30 fw-400 text-14 border-black text-dark -outline-black h-50 ml-20`}
                  >
                    <FaPhoneAlt size={20} className="" />

                    {/* Right Content */}
                    <div className=" ml-20">
                      <h4 className="text-14 fw-500 ls-2 lh-16">
                        020 8944 9145
                      </h4>
                    </div>
                  </Link>
                  {/* )} */}

                  <div className="col-auto">
                    <div className="w-1 mr-4 ml-20 h-20 bg-white-20" />
                  </div>

                  {/* {pathname === "/" && ( */}
                  <Link
                    to="/enquire"
                    className={`button px-30 fw-400 text-14 border-black text-black -outline-black h-50 ml-20`}
                  >
                    Enquire
                  </Link>
                  {/* )} */}
                </div>
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <Link
                      to="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
    </>
  );
};

export default Header1;
