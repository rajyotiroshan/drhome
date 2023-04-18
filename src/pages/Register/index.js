import React from "react";
import { Form, message } from "antd";
import { Link } from "react-router-dom";
import { CreateUser } from "../../apiCalls/users";

export default function Register(props) {
  const onFinish = async (values) => {
    try {
      const response = await CreateUser(values);
      if (response.success) {
        message.success(response.message);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Form layout="vertical" className="bg-white p-2" onFinish={onFinish}>
        <h2 className="my-1 uppercase">Register</h2>
        <hr />
        <Form.Item name="name" label="Name" className=" w-400 ">
          <input type="text" />
        </Form.Item>
        <Form.Item name="email" label="Email" className="w-400 ">
          <input type="email" />
        </Form.Item>
        <Form.Item name="password" label="Password" className="w-400 ">
          <input type="password" />
        </Form.Item>

        <button className="contained-btn" type="submit">
          Register
        </button>

        <div>
          Already have an account?
          <Link to="/login" className="underline">
            <strong> Sign In</strong>
          </Link>
        </div>
      </Form>
    </div>
  );
}
