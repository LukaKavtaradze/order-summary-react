import musicLogo from "../../assets/icon-music.svg";

function Price() {
  return (
    <div
      id="price"
      className="flex items-center bg-[#F7F9FF] rounded-[11px] mt-[24px] h-[81px] justify-between w-[279px] xl:w-[354px] xl:h-[98px]"
    >
      <img src={musicLogo} alt="music-icon" className="pl-[16px]" />
      <div className="flex flex-col pr-[40px]">
        <span className="text-[#1F2E55] text-[14px] font-black w-[88px] xl:w-[117px]">
          Annual Plan
        </span>
        <span className="w-[81px] font-medium text-[14px] text-[#717FA6] xl:w-[92px]">
          $59.99/year
        </span>
      </div>
      <a
        href=""
        className="text-[#382AE1] text-[13px] hover:cursor-pointer hover:text-[#766CF1] font-bold pr-[35px] underline underline-offset-1"
      >
        Change
      </a>
    </div>
  );
}

export default Price;
