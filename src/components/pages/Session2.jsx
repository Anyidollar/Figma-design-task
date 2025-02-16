import Frame from "../../assets/Frame1.svg";

const Session2 = () => {
  return (
    <div className="flex justify-center w-[100%] mt-20">
      <div className=" flex flex-col justify-left item-center pl-[150px] pt-[20px] w-[60%]">
        <p className="text-sm text-yellow-300">
          Simplified cross-border payment
        </p>
        <p className="text-8xl text-white mt-1 mb-3">
          We are the <br /> payments people
        </p>
        <p className="text-white text-sm">
          Transalliance Group.’s cross-border payments solutions connect <br />
          organisations and communities globally to the network they need <br />
          to thrive. Together, we make money move.
        </p>
      </div>
      <div className=" flex flex-col relative w-[40%] pt-[20px]">
        <div><img className="mt-[-135px] ml-10" src={Frame} alt="Header" /></div>
        <div className="absolute bg-[#FFFFFFB2] top-10 p-2 rounded-lg left-0 h-[70px] mt-3">
        <p className="flex item-center justify-center pt-3.5">
          24/7, 365 transaction tracking
        </p>
        </div>
       
      </div>
    </div>
  );
};

export default Session2;
