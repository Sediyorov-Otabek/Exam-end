import { useState } from "react";
import { PeopleIcon } from "../../components/icon";
import {
  useFollowMutation,
  useGetProfilQuery,
  useGetUsersQuery,
  useOnFollowMutation,
} from "../../redux/api/user-api";
import { User } from "../../types";

const AllUser = () => {
  const { data: userData } = useGetProfilQuery({});
  const [limit, setLimit] = useState(9);
  const { data } = useGetUsersQuery({ limit });
  const [unfollow, { isLoading: unfollowing }] = useOnFollowMutation();
  const [followUser, { isLoading: follow }] = useFollowMutation();
  console.log(userData);
  console.log(data);

  const userItem: JSX.Element[] = data?.map(
    (user: User): JSX.Element => (
      <div
        className="border-[3px] border-[#101012] w-[303px] h-[319px] rounded-[20px] flex flex-col gap-3 bg-[#09090A] items-center justify-center"
        key={user._id}
      >
        <img
          className="w-[90px] h-[90px] rounded-full"
          src={
            user.photo?.includes("http")
              ? user.photo
              : import.meta.env.VITE_APP_BASE_URL + user.photo
          }
          alt=""
        />
        <div>
          <h3 className="text-[#fff] text-[24px] font-[700]">
            {user.fullName}
          </h3>
          <p className="text-[#7878A3] text-[18px]">{user.username}</p>
        </div>
        {user.followers.some((item: any) => item._id == userData?._id) ? (
          <button
            className="w-[110px] h-[38px] rounded-[8px] bg-[#877EFF]  text-[#fff]"
            onClick={() => unfollow({ username: user.username })}
          >
            {unfollowing && user._id == userData?._id ? (
              <div>Loading...</div>
            ) : (
              "Unfollow"
            )}
          </button>
        ) : (
          <button
            className="w-[130px] h-[38px] rounded-[8px] bg-[#877EFF]  text-[#fff]"
            onClick={() => followUser({ username: user.username })}
          >
            {follow && user._id == userData?._id ? (
              <div>Loading...</div>
            ) : (
              "follow"
            )}
          </button>
        )}
      </div>
    )
  );
  return (
    <>
      <div className="bg-black w-full    flex">
        <div className=" w-full ">
          <div className="w-full   px-[53px] pt-[60px]">
            <div className="flex gap-[10px] items-center">
              <PeopleIcon className="text-[#fff]" />
              <p className=" text-[30px] font-[700] text-[#fff]">
                Create a Post
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[48px] mt-[40px]">
              {userItem}
            </div>
            <button
              onClick={() => setLimit((prev) => prev + 3)}
              className="w-[20%] flex m-auto border-none py-1 bg-[#877EFF] items-center justify-center mt-[26px] mb-9 rounded-lg text-[#fff] "
            >
              {" "}
              see more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUser;
