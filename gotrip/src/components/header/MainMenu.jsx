import { Link } from "react-router-dom";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  packageItems
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const MainMenu = ({ style = "" }) => {
  const [navbar, setNavbar] = useState(false);
  const { pathname } = useLocation();
  const [isActiveParent, setIsActiveParent] = useState(false);

  const changeTextColor = () => {
      if (window.scrollY >= 150) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", changeTextColor);
      return () => {
        window.removeEventListener("scroll", changeTextColor);
      };
    }, []);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : navbar? "text-dark" : "text-white"
          } menu-item-has-children`}
        >
          <Link to="/">
            <span className="mr-10">Home</span>
          </Link>
          {/* <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul> */}
        </li>
        {/* End home page menu */}

        {/* <li
          className={
            isActiveParent
              ? "menu-item-has-children -has-mega-menu current"
              : "menu-item-has-children -has-mega-menu"
          }
        >
          <Link to="/">
            <span className="mr-10">Packages</span>
            <i className="icon icon-chevron-sm-down" />
          </Link>
          <div className="mega">
            <CategoriesMegaMenu setIsActiveParent={setIsActiveParent} />
          </div>
        </li> */}
        {/* End categories menu items */}

        <li
          className={`${
            isActiveParentChaild(packageItems, pathname) ? "current" : navbar? "text-dark" : "text-white"
          } menu-item-has-children`}
        >
          <Link href="/">
            <span className="mr-10">Umrah Packages</span>
            <i className="icon icon-chevron-sm-down" />
          </Link>
          <ul className="subnav">
            {packageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
                // onClick={()=>{alert(menu.routePath + "The pathname is: " + pathname)}}
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End Packages single menu */}

        <li className={pathname === "/destinations" ? "current" : navbar? "text-dark" : "text-white"}>
          <Link to="/destinations">Saudi Destinations</Link>
        </li>
        {/* End Destinatinos single menu */}

        <li className={pathname === "/flights" ? "current" : navbar? "text-dark" : "text-white"}>
          <Link to="/flights">Flights</Link>
        </li>
        {/* End Flights single menu */}

        <li className={pathname === "/hotels" ? "current" : navbar? "text-dark" : "text-white"}>
          <Link to="/hotels">Hotels</Link>
        </li>
        {/* End Flights single menu */}

        <li
          className={pathname === "/blog-list" ? "current" : navbar? "text-dark" : "text-white"}
        >
          <Link to="/blog-list">
            <span className="mr-10">News</span>
            {/* <i className="icon icon-chevron-sm-down" /> */}
          </Link>
          {/* <ul className="subnav">
            {blogItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul> */}
        </li>
        {/* End blogIems */}
{/* 
        {pathname!=="/" ? <li
          className={pathname === "/enquire" ? "current" : navbar? "text-dark" : "text-white"}
        >
          <Link to="/enquire">
            <span className="mr-10">Enquire</span>
          </Link>
        </li> : ""} */}
        {/* End Enquire */}

        {/* <li
          className={`${
            isActiveParentChaild(pageItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End pages items */}

        {/* <li
          className={`${
            pathname.split("/")[1] == "dashboard" ||
            pathname.split("/")[1] == "vendor-dashboard"
              ? "current"
              : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        {/* {pathname !== "/" ? <li className={pathname === "/contact" ? "current" : navbar? "text-dark" : "text-white"}>
          <Link to="/contact">Contact Us</Link>
        </li>: ""} */}
      </ul>
    </nav>
  );
};

export default MainMenu;
