import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../redux/api/user-api";
import { useEffect } from "react";
import { Loading } from "../../../utils";

type FieldType = {
  full_name?: string;
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SingUp = () => {
  const navigete = useNavigate();
  const [signUpRequest, { data, isSuccess }] = useRegisterUserMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signUpRequest(values);
  };
  useEffect(() => {
    if (isSuccess) {
      navigete(`/auth/login`);
      console.log(data);
      localStorage.setItem("token", data.accessToken);
    }
  }, [isSuccess]);

  return (
    <div className="grid grid-cols-1 w-full bg-black">
      <div className="container mx-auto">
        <div className="w-full max-w-md h-auto mt-52 mx-auto px-6">
          <p className="text-3xl text-white font-bold text-center">
            Create a new account
          </p>
          <p className="text-base text-[#7878A3] font-normal text-center mt-3">
            To use Snapgram, please enter your details.
          </p>
          <Form
            className="w-full text-white"
            name="basic"
            layout="vertical"
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<span className="text-white">Name</span>}
              name="full_name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              label={<span className="text-white">Username</span>}
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item
              label={<span className="text-white">Email</span>}
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<span className="text-white">Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="w-full" />
            </Form.Item>

            <Form.Item>
              <Button
                onClick={Loading}
                className="w-full text-white"
                type="primary"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <Button className="w-full text-[#1F1F22] font-semibold flex items-center justify-center">
            <FcGoogle className="text-lg mr-2" />
            Sign up with Google
          </Button>
          <div className="flex items-center justify-center mt-2">
            <p className="text-[#EFEFEF] text-sm">Don’t have an account?</p>
            <Link to="/auth/login">
              <p className="text-[#877EFF] text-sm ml-1">Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
