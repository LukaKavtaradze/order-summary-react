function PayCancel() {
  return (
    <div className="flex flex-col items-center gap-[24px] pt-[24px] pb-[32px]">
      <button
        id="pay"
        className="w-[279px] h-[50px] rounded-[11px] hover: cursor-pointer hover:bg-[#766CF1] bg-[#382AE1] font-black  text-[white] xl:w-[354px] xl:h-[50px] ;
]"
      >
        {" "}
        Proceed to Payment
      </button>
      <button
        className="text-[15px] hover:cursor-pointer hover:text-[#1F2E55] text-[#717FA6] font-black"
      >
        {" "}
        Cancel Order
      </button>
    </div>
  );
}

export default PayCancel;
