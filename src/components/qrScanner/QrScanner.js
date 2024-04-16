import { qrData } from "../../../public/data/qrData";
import Container from "../container/Container";
import ContainerFluid from "../container/ContainerFulid";
import QrScannerCard from "./QrScannerCard";

const QrScanner = () => {
  return (
    <section className=" mb-[100px]">
      <ContainerFluid>
        <Container>
          <div>
            <div className="lg:w-[544px] mx-auto ">
              <h1 className="text-4xl text-[#111] font-bold text-center">
                Automated QR Scanner
              </h1>
            </div>
            <div className="lg:w-[659px] mt-4 z-10 mb-7 lg:h-[58px] mx-auto  ">
              <h1 className=" text-transparent bg-clip-text text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-2xl ">
                Scan & Verify The Attendees Directly By Our QR Scanning
                Solution.
              </h1>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {qrData?.map((qr) => (
              <QrScannerCard key={qr.title} qr={qr} />
            ))}
          </div>
        </Container>
      </ContainerFluid>
    </section>
  );
};

export default QrScanner;
