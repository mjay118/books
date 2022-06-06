import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "antd/dist/antd.css";
import CarouselComponent from "./CarouselComponent";
import VideoComp from "./VideoComp";

const MainApp = () => {
  return (
    <>
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">
            <h2>Gugu Books</h2>
          </NavbarBrand>
        </Navbar>
      </div>
      <VideoComp />
    </>
  );
};

export default MainApp;
