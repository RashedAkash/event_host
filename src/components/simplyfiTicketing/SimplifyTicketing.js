import Image from "next/image";
import Container from "../container/Container";
import ContainerFluid from "../container/ContainerFulid";
import SectionSubtitle from "../sectionTitle/SectionSubtitle";
import SectionTitle from "../sectionTitle/SectionTitle";

const SimplifyTicketing = () => {
  return (
    <ContainerFluid>
      <Container>
        <section>
          <div>
            <div className="lg:w-[424px] mx-auto ">
              <h1 className="text-4xl text-[#111] font-bold text-center">
                SIMPLIFY TICKETING
              </h1>
            </div>
            <div className="lg:w-[480px] mt-4 mb-7 lg:h-[58px] mx-auto  ">
              <h1 className=" text-transparent bg-clip-text text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-2xl ">
                First Ever Unique  QR Ticketing <br />  Platform For Event
                Registration & Booking
              </h1>
            </div>
            <div className="flex lg:w-[317px] items-center justify-center mx-auto rounded-[10px] gap-[10px] py-3 px-4 bg-gradient-to-r from-purple-600 opacity-80  via-purple-500 to-indigo-600 ">
              <div>
                <Image
                  src="/Resourcess/r.png"
                  alt="img"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h1 className="text-2xl font-medium text-[#F1F3FF]">
                  Secure Payment with
                </h1>
              </div>
            </div>
          </div>
          <div
            className="lg:-mt-36"
          >
            <Image
              src="/Resourcess/payment.png"
              alt="img"
              width={1160}
              height={400}
            />
          </div>
        </section>
      </Container>
    </ContainerFluid>
  );
};

export default SimplifyTicketing;
