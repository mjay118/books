import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "antd/dist/antd.css";
import CarouselComponent from "./CarouselComponent";

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
      <CarouselComponent />
    </>
  );
};

export default MainApp;
