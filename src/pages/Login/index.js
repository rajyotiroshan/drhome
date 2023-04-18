import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";

export default function Login(props) {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Form layout="vertical" className="bg-white p-2" onFinish={onFinish}>
        <h2 className="my-1 uppercase">Login</h2>
        <hr />

        <Form.Item name="email" label="Email" className="w-400 ">
          <input type="email" />
        </Form.Item>
        <Form.Item name="password" label="Password" className="w-400 ">
          <input type="password" />
        </Form.Item>

        <button className="contained-btn" type="submit">
          Login
        </button>

        <div>
          Don't have an account?
          <Link to="/register" className="underline">
            <strong> Sign Up</strong>
          </Link>
        </div>
      </Form>
    </div>
  );
}
