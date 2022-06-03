import React from "react";
import { Carousel, Space } from "antd";
const contentStyle = {
  height: "160px",
  // color: '#fff',
  lineHeight: "160px",
  textAlign: "center",
  // background: '#364d79',
};

const carouselContent = [
  {
    text: "One way destination for budding authors and readers.",
    image: require("../../assets/images/carousel_book1.jpg"),
  },
  {
    text: "We are tied with 20+ publication houses and Awards Community.",
    image: require("../../assets/images/carousel_book2.jpg"),
  },
  {
    text: "We aim to provide a recognition to authors and readers.",
    image: require("../../assets/images/carousel_book3.jpg"),
  },
  {
    text: "Connect with us.",
    image: require("../../assets/images/carousel_book4.jpg"),
  },
];

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
      {carouselContent.map((item, index) => {
        return (
          <div className="carousel-color space-align-block" key={index}>
            <Space direction="horizontal">
              <img src={item.image} alt="" height={200} width={400} />
              <h3 style={contentStyle}>{item.text}</h3>
            </Space>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
