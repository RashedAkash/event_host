import Image from "next/image";


const QrScannerCard = ({qr}) => {
  return (
    <div>
      <div className=" p-5 lg:w-[275px] h-[209px]  bg-[#F1F3FF] rounded-3xl borderCard ">
        <figure className=" mb-5">
          <Image src={qr?.image} alt="Shoes" width={60} height={60} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[32px] font-bold text-[#111]">{qr?.title}</h2>
          <p className="text-[#111] opacity-60">{qr?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default QrScannerCard;