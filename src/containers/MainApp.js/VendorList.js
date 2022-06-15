import React from "react";
import "antd/dist/antd.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
// import axios from 'axios';
import { instance } from "../../util/connection/axios";

const VendorList = () => {
  instance
    .get(`api/award-vendors?populate=*`)
    .then((response) => {
      // Handle success.
      console.log(
        response.data.data[0].attributes.vendorimage.data.attributes,
        "ttr"
      );
    })
    .catch((error) => {
      // Handle error.
    });

  return (
    <>
      <div>
        <Avatar
          size={64}
          src="https://hidden-beyond-89915.herokuapp.com/thumbnail_download_94b708df94.png"
        />
        <Avatar size={64} src="" />

        <Avatar size={64} src="" />

        <Avatar size={64} src="" />

        <Avatar size={64} src="" />
        <Avatar size={64} src="" />
        <Avatar size={64} src="" />
        <Avatar size={64} src="" />
        <Avatar size={64} src="" />
      </div>
    </>
  );
};
export default VendorList;
