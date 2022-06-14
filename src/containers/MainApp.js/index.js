import React, { useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import CarouselComponent from "./CarouselComponent";
import VideoComp from "./VideoComp";
import LoginModal from "./LoginModal";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// Request API.
import axios from "axios";
import VendorList from "./VendorList";
const MainApp = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  console.log("xxxxx", cookies);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [uname, setUname] = React.useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };
  const logout = () => {
    setToken(localStorage.removeItem("token"));
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      var decoded = jwt_decode(token);
      var id = decoded.id;
    }
    axios
      .get(`https://hidden-beyond-89915.herokuapp.com/api/users/${id}`)
      .then((response) => {
        // Handle success.
        setUname(response.data.username);
      })
      .catch((error) => {
        // Handle error.
      });
  }, []);

  return (
    <>
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">
            <h2>Gugu Books</h2>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="justify-content-end me-5"
              style={{ width: "100%" }}
              navbar
            >
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">GitHub</NavLink>
              </NavItem>

              {token && (
                <>
                  <NavItem>
                    <UncontrolledDropdown inNavbar nav>
                      <DropdownToggle caret nav>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar>{uname[0]?.toUpperCase()}</Avatar>
                        </StyledBadge>{" "}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={logout}>Log Out</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                </>
              )}
              {!token && (
                <>
                  <NavItem>
                    <NavLink onClick={showModal}>Login</NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <VideoComp />
      <LoginModal
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
        isModalVisible={isModalVisible}
        showModal={showModal}
        setIsModalVisible={setIsModalVisible}
        setToken={setToken}
      ></LoginModal>
      {/* <VendorList/> */}
    </>
  );
};

export default MainApp;
