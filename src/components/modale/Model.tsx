import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ChatIcon } from "../icon";
import { useGetPostCommentsQuery } from "../../redux/api/post";

const Model: React.FC<any> = ({
  id,
  fullName,
  date,
  caption,
  imges,
  owber,
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { data } = useGetPostCommentsQuery({ id });
  console.log(data);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="flex gap-2 items-center bg-inherit border-non cursor-pointer"
        onClick={showModal}
      >
        <ChatIcon className="text-[#877EFF]" />
        <p className="text-[#fff] text-[16px] font-[600]">{data?.length}</p>
      </div>
      <Modal
        open={open}
        title=""
        className="bg-black"
        width={1109}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col h-[400px] md:flex-row gap-6 w-full max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 relative">
            <div className="carousel flex overflow-x-auto scroll-hide">
              {imges.map((url: any, inx: any) => {
                console.log(url);
                if (url.type == "IMAGE") {
                  return <img key={inx} className=" " src={url.url} alt="" />;
                } else {
                  return (
                    <video key={inx} className="" src={url.url} controls />
                  );
                }
              })}
            </div>
          </div>

          <div className="w-full md:w-1/2 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={owber}
                  alt="User Profile"
                />
                <div>
                  <p className="text-lg font-semibold">{fullName}</p>
                  <p className="text-gray-400 text-sm">{date}</p>
                </div>
              </div>
              <p className="mt-4">
                {caption}{" "}
                <span className="text-blue-400">#nature #mountains</span>
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {data?.map((item: any) => {
                return (
                  <div className="flex items-start space-x-3">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://via.placeholder.com/32"
                      alt="User Profile"
                    />
                    <div className="flex-1">
                      <p className="text-sm">{item.message}</p>
                      <div className="flex items-center text-gray-400 text-xs space-x-2 mt-1">
                        <span>1d</span>
                        <button className="hover:underline">Reply</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-4 border-t border-gray-800 pt-4">
              <div className="flex space-x-6">
                <button className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3.172 5.172a4 4 0 015.656 0l.172.172.172-.172a4 4 0 115.656 5.656L10 14.828l-5.172-5.172a4 4 0 010-5.656z" />
                  </svg>
                  <span>120</span>
                </button>
                <button className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7zm-8-3a1 1 0 00-1 1v4a1 1 0 001 1h.007a1 1 0 001-1V8a1 1 0 00-1-1H10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{}</span>
                </button>
                <button className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0zM5 8a3 3 0 11-6 0 3 3 0 016 0zm6 4a4 4 0 10-8 0 4 4 0 008 0z" />
                  </svg>
                  <span>74</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Model;
