import Image from "next/image";
import Container from "../container/Container";
import ContainerFluid from "../container/ContainerFulid";


const HostEvnet = () => {
  return (
    <section>
      <ContainerFluid>
        <Container>
          <div className="  md:flex  gap-12 bg-[#7342F9] py-[100px] px-12 rounded-3xl mb-[100px] relative">
            <div className="mb-7 md:mb-0">
              <Image
                src="/Resourcess/Group 29.png"
                alt="img"
                width={400}
                height={350}
              />
            </div>
            <div>
              <h1 className=" text-white text-3xl capitalize font-medium ">
                host your event easily & automatedly <br /> with us
              </h1>
              <h4 className=" text-[#F1F3FF] my-7 text-xl capitalize">
                we provide the best event ticketing <br /> & management
                solutions
              </h4>
              <div>
                <div className="flex items-center mb-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300 capitalize">
                    Host your event with easy steps!
                  </span>
                </div>
                <div className="flex items-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300 capitalize">
                    automated payment system & ticket will be sent to mail.
                  </span>
                </div>
                <div className="flex items-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300 capitalize">
                    access to registration and transaction reports
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 dark:text-gray-300 capitalize">
                    send bulk personalized mail with attachments
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image
                src="/Resourcess/Group.png"
                alt="img"
                width={200}
                height={200}
              />
            </div>
          </div>
        </Container>
      </ContainerFluid>
    </section>
  );
};

export default HostEvnet;