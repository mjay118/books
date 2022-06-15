import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Modal, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import axios from 'axios';
import { instance } from "../../util/connection/axios";

const LoginModal = ({
  isModalVisible,
  showModal,
  setToken,
  cookies,
  setCookie,
  removeCookie,
  setIsModalVisible,
}) => {
  const [signup, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form] = Form.useForm();

  console.log(email);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const login = () => {
    instance
      .post("api/auth/local", {
        identifier: email,
        password: password,
      })
      .then((response) => {
        // Handle success.

        if (!localStorage.getItem("token")) {
          localStorage.setItem("token", response.data.jwt);
        }
        setToken(response.data.jwt);
        handleCancel();
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <>
      <Modal
        title={signup ? "Sign Up" : "Log In"}
        visible={isModalVisible}
        onOk={handleOk}
        footer={[<p>powered by @copyright gugubooks.com</p>]}
        onCancel={handleCancel}
      >
        <div className="modalform">
          <Form
            name="normal_login"
            form={form}
            className="login-form"
            initialValues={{
              remember: false,
            }}
            //   onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                value={email}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                onClick={() => login()}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {signup ? "Sign Up" : "Log In"}
              </Button>
              <a className="register pt-4" onClick={() => setSignUp(!signup)}>
                {signup ? "Login" : "register now!"}
              </a>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
