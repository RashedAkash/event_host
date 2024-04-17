import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const EventsCard = ({ event }) => {
  return (
    <div className="bg-[#F1F3FF] p-5 rounded-xl">
      <div>
        <Image
          className=" pb-2 "
          src={event?.image}
          alt="Shoes"
          width={329}
          height={216}
        />
        <p className="text-[#7342F9] text-[15px]">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </p>
      </div>
      <div className=" flex justify-between mt-2">
        <div className=" text-start">
          <p className="bg-[#7342F9] inline-block rounded py-1 text-white px-[10px]">
            Music
          </p>
          <div className="flex gap-2 items-center my-3">
            <FaLocationDot className="text-[#591BFF]" />
            <p className="text-[14px] w-[191px] text-[#111]">
              Celebrity Convention Hall
            </p>
          </div>
          <h2 className="text-[22px] w-[232px] inline-block font-semibold text-[#111]">
            ROUFIAN’S HSC-24 RAG Day
          </h2>
        </div>
        <div className="rounded-lg bg-white p-1 w-[81px] h-[95px]">
          <p className="text-[14px]  text-[#111]">Apr</p>
          <h2 className="text-[#591BFF] font-semibold text-[32px]">20</h2>
          <p className="text-[14px]  text-[#111]">10.00 PM</p>
        </div>
      </div>
      <div className="flex gap-2 items-center mt-3">
        <div className="flex  justify-start items-center   rounded-[10px] gap-[10px] p-3 bg-[#7342F9]">
          <div>
            <Image
              src="/Resourcess/icon/Vector.png"
              alt="img"
              width={16}
              height={16}
            />
          </div>
          <div>
            <h1 className="text-base  text-[#F1F3FF]">Get Ticket</h1>
          </div>
        </div>
        <div className=" flex items-center bg-white rounded px-5 py-2">
          <h4 className="text-[#591BFF] font-semibold text-[24px]">20</h4>
          <p className="text-[10px] capitalize text-[#111]">
            seat <br /> left
          </p>
        </div>
        <div className=" text-end flex justify-end ml-3">
          <p className="text-[#591BFF] text-base capitalize">See more</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
