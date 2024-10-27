import img1 from "../../../assets/login.svg";
import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "../../../redux/slice/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../../utils";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "../../../redux/api/user-api";

type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SingUp = () => {
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const [sigInRequest, {}] = useSignInMutation();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    sigInRequest(values)
      .unwrap()
      .then((res) => res)
      .then((data) => {
        dispatch(signIn(data.accessToken));
        navigete("/");
      });
    console.log(values);
  };

  return (
    <div className="grid grid-cols-1 bg-black w-full ">
      <div className="container mx-auto pt-40">
        <div className="flex items-center mb-9 justify-center ">
          <img className="h-7 w-7 " src={img1} alt="" />
          <p className="text-white text-3xl ">Snapgram</p>
        </div>
        <div className="mx-auto w-full max-w-md  px-6">
          <p className="font-bold text-3xl text-white  text-center">
            Hisobingizga kiring
          </p>
          <p className="text-base mt-3 text-[#8b8bbd] font-normal text-center ">
            Qaytib keldingiz! Iltimos, ma'lumotlaringizni kiriting.
          </p>
          <Form
            className="w-full text-black"
            name="basic"
            layout="vertical"
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<span className="text-white">Foydalanuvchi nomi</span>}
              name="username"
              rules={[
                { required: true, message: "Iltimos, user name kiriting!" },
              ]}
            >
              <Input className="text-black" />
            </Form.Item>
            <Form.Item
              label={<span className="text-white">Parol</span>}
              name="password"
              rules={[
                { required: true, message: "Iltimos, parolingizni kiriting!" },
              ]}
            >
              <Input.Password className="text-white" />
            </Form.Item>

            <Form.Item>
              <Button
                onClick={Loading}
                className="w-full text-white"
                type="primary"
                htmlType="submit"
              >
                Kirish
              </Button>
            </Form.Item>
          </Form>
          <Button className="w-full font-semibold  text-[#1F1F22] flex items-center justify-center">
            <FcGoogle className="text-lg mr-2" />
            Google orqali kirish
          </Button>
          <div className="flex items-center justify-center mt-2">
            <p className="text-[#EFEFEF] text-sm">Hisobingiz yo'qmi?</p>
            <Link to="/auth/singUp">
              <p className="ml-1 text-[#877EFF] text-sm ">Ro'yxatdan o'tish</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
