import Container from "../container/Container";
import ContainerFluid from "../container/ContainerFulid";
import Image from "next/image";

const Footer = () => {
  return (
    <ContainerFluid>
      <div
        style={{
          backgroundImage: "url(/Resourcess/footer.jpg)",
        }}
        className=" relative py-[100px] "
      >
        <div className="absolute inset-0 bg-[#591BFF] opacity-85"></div>
        <Container>
          <div className="hero-content text-center text-neutral-content">
            <footer className="footer   text-white ">
              <aside>
                <div className="text-white z-10">
                  <Image
                    src="/Resourcess/icon/EventHost.png"
                    alt="Shoes"
                    width={189}
                    height={45}
                    className="text-white"
                  />
                </div>
                <p className=" text-white mt-4 z-10 lg:w-[298px] text-left ">
                  IDEA Project, ICT Tower (0th Floor), <br /> Plot: E-14X,
                  Agargaon, Dhaka - 1207 <br /> 02222-222222, 01111111111
                </p>
              </aside>
              <nav className=" text-white z-10">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Events</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
              </nav>
              <nav className=" text-white z-10">
                <a className="link link-hover">Event Dashboard</a>
                <a className="link link-hover">Terms & Condition</a>
                <a className="link link-hover">Privacy & Refund Policy</a>
              </nav>
              <nav>
                <a className="link link-hover text-white z-10 mb-3">
                  Follow Us
                </a>
                <div className=" flex items-center gap-7">
                  <div className="text-white z-10">
                    <Image
                      src="/Resourcess/link1.png"
                      alt="Shoes"
                      width={23}
                      height={23}
                    />
                  </div>
                  <div className="text-white z-10">
                    <Image
                      src="/Resourcess/link2.png"
                      alt="Shoes"
                      width={23}
                      height={23}
                    />
                  </div>
                  <div className="text-white z-10">
                    <Image
                      src="/Resourcess/link3.png"
                      alt="Shoes"
                      width={23}
                      height={23}
                    />
                  </div>
                  <div className="text-white z-10">
                    <Image
                      src="/Resourcess/link4.png"
                      alt="Shoes"
                      width={23}
                      height={23}
                    />
                  </div>
                </div>
              </nav>
            </footer>
          </div>
          <div className="md:flex justify-between items-center z-10 border-t-2 border-white pt-7 mt-[50px] ">
            <div className=" flex md:justify-between items-center gap-5 ">
              <h1 className="text-white z-10">Pay with</h1>
              <div className="flex items-center gap-5">
                <div className="text-white z-10">
                  <Image
                    src="/Resourcess/image 9.png"
                    alt="Shoes"
                    width={61}
                    height={27}
                  />{" "}
                </div>
                <div className="text-white z-10">
                  <Image
                    src="/Resourcess/nogod.png"
                    alt="Shoes"
                    width={61}
                    height={27}
                  />{" "}
                </div>
                <div className="text-white z-10">
                  <Image
                    src="/Resourcess/roc.png"
                    alt="Shoes"
                    width={46}
                    height={29}
                  />
                </div>
              </div>
            </div>
            <div className=" text-white z-10">
              <h1>©2023 TickHost & UVTR. All right reserved</h1>
            </div>
          </div>
        </Container>
      </div>
    </ContainerFluid>
  );
};

export default Footer;
