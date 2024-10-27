import { useGetProfilQuery } from "../../redux/api/user-api";

const TopCreates = () => {
  const { data: userData } = useGetProfilQuery({});
  return (
    <div className=" w-full    pr-[24px]">
      <p className="mt-[48px] text-[24px] text-[#fff] mb-[40px] font-[700] text-center">
        Top Creators
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[24px]  ">
        <div className=" flex flex-col gap-1 items-center">
          <img
            className="w-[54px] h-[54px] rounded-full border-[3px] border-[#675CFF]"
            src={
              userData?.photo?.includes("http")
                ? userData?.photo
                : import.meta.env.VITE_APP_BASE_URL + userData?.photo
            }
            alt=""
          />
          <p className="text-[#fff] text-[18px]">{userData?.username}</p>
          <p className="text-[#7878A3] text-[12px]">{userData?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TopCreates;
