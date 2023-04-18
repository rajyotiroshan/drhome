import React from "react";
import { Form, Button } from "antd";

export default function Register(props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Form layout="vertical" className="bg-white p-2">
        <Form.Item label="Name" className="w-400 bg-white">
          <input type="text" />
        </Form.Item>
        <Form.Item label="Email" className="w-400 bg-white">
          <input type="email" />
        </Form.Item>
        <Form.Item label="Password" className="w-400 bg-white">
          <input type="password" />
        </Form.Item>

        <button className="contained-btn">Register</button>
      </Form>
    </div>
  );
}
