import img from "../../assets/Avatar-Profile-Pic.png";
import img1 from "../../assets/Avatar-Profile-Pic (1).png";
import img2 from "../../assets/Group 1.png";
import img3 from "../../assets/Group 1 (1).png";
import img4 from "../../assets/Group 1 (2).png";
const JsoProStore = () => {
  return (
    <div className="flex items-center gap-[30px] mt-[32px]">
      <div className="flex flex-col gap-[6px] items-center">
        <img className="w-[72px] h-[72px] rounded-full" src={img} alt="" />
        <p className="text-[#EFEFEF] text-[12px]">JSM Pro</p>
      </div>
      <div className="flex flex-col gap-[6px] items-center">
        <img className="w-[72px] h-[72px] rounded-full" src={img1} alt="" />
        <p className="text-[#EFEFEF] text-[12px]">JSM Pro</p>
      </div>
      <div className="flex flex-col gap-[6px] items-center">
        <img className="w-[72px] h-[72px] rounded-full" src={img2} alt="" />
        <p className="text-[#EFEFEF] text-[12px]">JSM Pro</p>
      </div>
      <div className="flex flex-col gap-[6px] items-center">
        <img className="w-[72px] h-[72px] rounded-full" src={img3} alt="" />
        <p className="text-[#EFEFEF] text-[12px]">JSM Pro</p>
      </div>
      <div className="flex flex-col gap-[6px] items-center">
        <img className="w-[72px] h-[72px] rounded-full" src={img4} alt="" />
        <p className="text-[#EFEFEF] text-[12px]">JSM Pro</p>
      </div>
    </div>
  );
};

export default JsoProStore;
