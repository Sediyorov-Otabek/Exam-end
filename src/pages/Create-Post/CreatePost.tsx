import img from "../../assets/Gallery Add.png";
import Add from "../../components/add/Add";
import TopCreates from "../../components/top-creates/TopCreates";
const CreatePost = () => {
  return (
    <>
      <div className="bg-black w-full h-[200vh]   flex">
        <div className="grid grid-cols-[4fr_2fr] w-full ">
          <div className="w-full   px-[53px] pt-[60px]">
            <div className="flex gap-[4px] items-center">
              <img className="w-[36px] h-[36px]" src={img} alt="" />
              <p className=" text-[30px] font-[700] text-[#fff]">
                Create a Post
              </p>
            </div>
            <Add />
          </div>
          <TopCreates />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
