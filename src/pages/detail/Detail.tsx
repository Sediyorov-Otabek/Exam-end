import { useParams } from "react-router-dom";
import { CreatePostIcon, ReelsIcon } from "../../components/icon";
import JsoProStore from "../../components/js-pro-istorya/JsoProStore";
import {
  useFollowMutation,
  useGetProfilQuery,
  useGetUserQuery,
  useOnFollowMutation,
} from "../../redux/api/user-api";
import { useGetUserPostsQuery } from "../../redux/api/post-api";
import { useState } from "react";
import img from "../../assets/Tag.svg";
const Detail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { username } = useParams();
  const { data } = useGetUserQuery(username);
  const { data: user } = useGetProfilQuery({});
  const { data: posts } = useGetUserPostsQuery(username);
  const [followUser] = useFollowMutation();
  const [unFollowUser] = useOnFollowMutation();
  console.log(data);

  const isFollowed = user?.following.some((item: any) => item._id === data._id);
  return (
    <>
      <div className="bg-black w-full h-[200vh]   flex">
        <div className=" w-full px-[53px] pt-[60px] ">
          <div className="w-full   ">
            <div className="flex gap-[30px] ">
              <div>
                <img
                  className="w-[150px] h-[150px] border rounded-full"
                  src={
                    data?.photo.includes("http")
                      ? data?.photo
                      : "https://files.moontv.uz" + data?.photo
                  }
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://files.moontv.uz/uploads/profile_not_found";
                  }}
                  alt=""
                />
              </div>
              <div>
                <div className="flex items-center gap-[48px]">
                  <div className="flex flex-col gap-[6.5px]">
                    <p className="text-[#fff] text-[36px] fontr-[600]">
                      {data.fullName}
                    </p>
                    <p className="text-[#7878A3] text-[18px]">
                      {data.username}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mb-[22px]">
                    <button
                      className={`w-[84px] rounded-lg h-[38px] ${
                        isFollowed ? "bg-red-500" : "bg-[#877EFF]"
                      } text-[#fff]`}
                      onClick={() => {
                        setLoading(true);

                        !isFollowed
                          ? followUser({ username: data?.username })
                              .unwrap()
                              .finally(() => setLoading(false))
                          : unFollowUser({ username: data?.username })
                              .unwrap()
                              .finally(() => setLoading(false));
                      }}
                    >
                      {loading
                        ? "Loading..."
                        : isFollowed
                        ? "Unfollow"
                        : "Follow"}
                    </button>
                    <button className="w-[102px] rounded-[8px] h-[38px] bg-[#fff] text-[#000]">
                      Message
                    </button>
                  </div>
                </div>
                <div className="flex gap-[40px] items-center mt-[22px]">
                  <p className="text-[#877EFF] text-[20px] font-[500] flex items-center gap-[8px]">
                    {data?.posts.length}
                    <p className="text-[#EFEFEF] text-[18px] font-[500]">
                      Posts
                    </p>
                  </p>
                  <p className="text-[#877EFF] text-[20px] font-[500] flex items-center gap-[8px]">
                    {data?.followers.length}k
                    <p className="text-[#EFEFEF] text-[18px] font-[500]">
                      Followers
                    </p>
                  </p>
                  <p className="text-[#877EFF] text-[20px] font-[500] flex items-center gap-[8px]">
                    {data?.following.length}
                    <p className="text-[#EFEFEF] text-[18px] font-[500]">
                      Following
                    </p>
                  </p>
                </div>
                <div className="flex flex-col gap-[1px] mt-[40px]">
                  <p className="text-[#EFEFEF] text-[16px]">
                    For Developers, By Developers
                  </p>
                  <p className="text-[#EFEFEF] text-[16px]">
                    💻 Web Development & Coding
                  </p>
                  <p className="text-[#EFEFEF] text-[16px]">
                    🎥 YouTube - JavaScript Mastery
                  </p>
                  <p className="text-[#EFEFEF] text-[16px]">
                    ✉️ Business Inquiries - Email or DM
                  </p>
                </div>
                <JsoProStore />
              </div>
            </div>
          </div>
          <div className="flex items-center mt-[68px]">
            <button className=" bg-[#101012] flex items-center gap-[10px] justify-center w-[173px] h-[46px] text-[#fff]">
              <CreatePostIcon className="text-[#877EFF]" />
              Posts
            </button>
            <hr className="w-[1px] h-[36px] bg-[#101012]" />
            <button className="border-t-none bg-[#09090A] flex items-center justify-center gap-[10px] w-[173px] h-[46px] text-[#fff]">
              {" "}
              <ReelsIcon className="text-[#877EFF]" />
              Rells
            </button>
            <hr className="w-[1px] h-[36px] bg-[#101012]" />
            <button className="border-l-[0] bg-[#09090A] flex items-center gap-[10px] w-[173px] justify-center h-[46px] text-[#fff]">
              <img src={img} alt="" />
              Tagged
            </button>
          </div>
          <div className="grid grid-cols-3 gap-[30px] mt-[57px]">
            {posts?.map((post: any) => {
              return (
                <div key={post._id}>
                  <img
                    className="rounded-[16px]"
                    src={
                      post.content[0].type === "IMAGE"
                        ? post.content[0].url
                        : post.content[1].type === "IMAGE"
                        ? post.content[1].url
                        : post.content[2].type === "IMAGE"
                        ? post.content[2].url
                        : post.content[3].type === "IMAGE"
                        ? post.content[3].url
                        : ""
                    }
                    alt={post.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
