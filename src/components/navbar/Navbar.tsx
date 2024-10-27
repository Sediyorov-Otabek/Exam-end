import { useGetProfilQuery, useGetUsersQuery } from "../../redux/api/user-api";
import { User } from "../../types";

const Navbar = () => {
  const { data: userData } = useGetProfilQuery({});
  const { data } = useGetUsersQuery({});
  return (
    <div className="">
      <div className="flex gap-3 overflow-x-auto scroll-hide overscroll-x-none wrapper">
        <div className=" flex flex-col gap-1 items-center">
          <div className="flex flex-col items-end">
            <img
              className="w-[54px] h-[54px] rounded-full border-[3px] border-[#675CFF]"
              src={
                userData?.photo?.includes("http")
                  ? userData?.photo
                  : import.meta.env.VITE_APP_BASE_URL + userData?.photo
              }
              alt=""
            />
            <sub className=" w-[10px] h-[10px] rounded-full mt-[-13px] border-[#675CFF] text-[#675CFF] cursor-pointer flex items-center justify-center border">
              +
            </sub>
          </div>
          <p className="text-[#fff] text-[12px]">
            {userData?.username.slice(0, 8)}
          </p>
        </div>
        {data?.map(
          (el: User): JSX.Element => (
            <div
              key={el._id}
              className=" flex flex-col min-w-[54px] gap-1 items-center"
            >
              <img
                className="w-[54px] h-[54px] rounded-full border-[3px] border-[#675CFF]"
                src={
                  el.photo?.includes("http")
                    ? el.photo
                    : import.meta.env.VITE_APP_BASE_URL + el.photo
                }
                alt=""
              />
              <p className="text-[#fff] text-[12px]">
                {el.username.slice(0, 10)}
              </p>
            </div>
          )
        )}
      </div>
      <h3 className="text-[#fff] text-[30px] font-[700] mt-[42px] ">
        Home Feed
      </h3>
    </div>
  );
};

export default Navbar;
