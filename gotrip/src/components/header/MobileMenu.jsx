import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  categorieMegaMenuItems,
  packageItems,
} from "../../data/mainMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const { pathname } = useLocation();

  const [isActiveParent, setIsActiveParent] = useState(false);
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false);
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    categorieMegaMenuItems.map((megaMenu) => {
      megaMenu?.menuCol?.map((megaCol) => {
        megaCol?.menuItems?.map((item) => {
          item?.menuList?.map((list) => {
            if (list.routePath?.split("/")[1] == pathname.split("/")[1]) {
              setIsActiveParent(true);
              setisActiveNestedParentTwo(item?.title);
              setisActiveNestedParent(megaMenu?.id);
            }
          });
        });
      });
    });
  }, []);

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link to="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => navigate("/")}
            className={pathname === "/" ? "menu-active-link" : ""}
          >
            Home
          </MenuItem>
          {/* End  All Home Menu */}

          <SubMenu
            label="Umrah Packages"
            className={
              packageItems.some(
                (item) =>
                  item.routePath?.split("/")[1] == pathname.split("/")[1]
              )
                ? "menu-active-link"
                : ""
            }
          >
            {packageItems.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => navigate(item.routePath)}
                className={
                  isActiveLink(item.routePath, pathname)
                    ? "menu-active-link"
                    : "inactive-menu"
                }
              >
                {item.name}
              </MenuItem>
            ))}
          </SubMenu>
          {/* End  All Pages Menu */}

          {/* <SubMenu
            label="Categories"
            className={isActiveParent ? "menu-active-link" : ""}
          >
            {categorieMobileItems.map((item) => (
              <SubMenu
                label={item.title}
                key={item.id}
                className={
                  isActiveNestedParent == item.id
                    ? "menu-active-link"
                    : "inactive-menu"
                }
              >
                {item.menuItems.map((single) => (
                  <SubMenu
                    label={single.title}
                    key={single.id}
                    className={
                      isActiveNestedParentTwo == single.title
                        ? "menu-active-link"
                        : "inactive-menu"
                    }
                  >
                    {single.menuList.map((menu, i) => (
                      <MenuItem
                        key={i}
                        onClick={() => navigate(menu.routePath)}
                        className={
                          isActiveLink(menu.routePath, pathname)
                            ? "menu-active-link"
                            : "inactive-menu"
                        }
                      >
                        {menu.name}
                      </MenuItem>
                    ))}
                  </SubMenu>
                ))}
              </SubMenu>
            ))}
          </SubMenu> */}
          {/* End  All Categories Menu */}

          <MenuItem
            onClick={() => navigate("/destinations")}
            className={pathname === "/destinations" ? "menu-active-link" : ""}
          >
            Saudi Desitinations
          </MenuItem>
          {/* End  Desitinations Menu */}

          <MenuItem
            onClick={() => navigate("/")}
            className={pathname === "/flights" ? "menu-active-link" : ""}
          >
            Flights
          </MenuItem>
          {/* End  Flights Menu */}

          <MenuItem
            onClick={() => navigate("/hotels")}
            className={pathname === "/hotels" ? "menu-active-link" : ""}
          >
            Hotels
          </MenuItem>
          {/* End  Hotels Menu */}

          <MenuItem
            onClick={() => navigate("/")}
            className={pathname === "/blogs" ? "menu-active-link" : ""}
          >
            Blogs
          </MenuItem>
          {/* End Blogs Menu */}

          <MenuItem
            onClick={() => navigate("/")}
            className={pathname === "/enquire" ? "menu-active-link" : ""}
          >
            Enquire
          </MenuItem>
          {/* End Enquire Menu */}

          <MenuItem
            onClick={() => navigate("/contact")}
            className={pathname === "/contact" ? "menu-active-link" : ""}
          >
            Contact Us
          </MenuItem>
          {/* End Contact  Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
