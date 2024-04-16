"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ContainerFluid from "../container/ContainerFulid";
import Container from "../container/Container";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <ContainerFluid>
        <Container>
          <Slider {...settings}>
            <div className="relative lg:mb-[100px] mb-30px">
              <Image
                src="/Resourcess/banner.png"
                alt="img"
                width={1160}
                height={441}
              />
              <div
                className="lg:flex absolute top-0  lg:-top-10
               lg:left-5"
              >
                <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-full">
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-[40px] lg:w-[190px]">
                      CMA Fest
                    </h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-white lg:w-[605px] capitalize lg:text-xl ">
                      Make memories that will last a lifetime. See your favorite{" "}
                      <br />
                      artists live at CMA Fest!
                    </p>

                    <div className="flex flex-col justify-start mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                      <div className="flex lg:w-[140px] justify-start items-center   rounded-[10px] gap-[10px] py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
                        <div>
                          <Image
                            src="/Resourcess/icon/Vector.png"
                            alt="img"
                            width={16}
                            height={16}
                          />
                        </div>
                        <div>
                          <h1 className="text-base  text-[#F1F3FF]">
                            Get Ticket
                          </h1>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="block px-4 py-3 border border-[#F1F3FF] text-base  text-[#F1F3FF]   text-center  transition-colors duration-300 transform  rounded-[10px] lg:mx-4 "
                      >
                        Explore All Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Resourcess/banner.png"
                alt="img"
                width={1160}
                height={441}
              />
              <div
                className="lg:flex absolute top-0  lg:-top-10
               lg:left-5"
              >
                <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-full">
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-[40px] lg:w-[190px]">
                      CMA Fest
                    </h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-white lg:w-[605px] capitalize lg:text-xl ">
                      Make memories that will last a lifetime. See your favorite{" "}
                      <br />
                      artists live at CMA Fest!
                    </p>

                    <div className="flex flex-col justify-start mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                      <div className="flex lg:w-[140px] justify-start items-center   rounded-[10px] gap-[10px] py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
                        <div>
                          <Image
                            src="/Resourcess/icon/Vector.png"
                            alt="img"
                            width={16}
                            height={16}
                          />
                        </div>
                        <div>
                          <h1 className="text-base  text-[#F1F3FF]">
                            Get Ticket
                          </h1>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="block px-4 py-3 border border-[#F1F3FF] text-base  text-[#F1F3FF]   text-center  transition-colors duration-300 transform  rounded-[10px] lg:mx-4 "
                      >
                        Explore All Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Resourcess/banner.png"
                alt="img"
                width={1160}
                height={441}
              />
              <div
                className="lg:flex absolute top-0  lg:-top-10
               lg:left-5"
              >
                <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-full">
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-[40px] lg:w-[190px]">
                      CMA Fest
                    </h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-white lg:w-[605px] capitalize lg:text-xl ">
                      Make memories that will last a lifetime. See your favorite{" "}
                      <br />
                      artists live at CMA Fest!
                    </p>

                    <div className="flex flex-col justify-start mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                      <div className="flex lg:w-[140px] justify-start items-center   rounded-[10px] gap-[10px] py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
                        <div>
                          <Image
                            src="/Resourcess/icon/Vector.png"
                            alt="img"
                            width={16}
                            height={16}
                          />
                        </div>
                        <div>
                          <h1 className="text-base  text-[#F1F3FF]">
                            Get Ticket
                          </h1>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="block px-4 py-3 border border-[#F1F3FF] text-base  text-[#F1F3FF]   text-center  transition-colors duration-300 transform  rounded-[10px] lg:mx-4 "
                      >
                        Explore All Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </Slider>
        </Container>
      </ContainerFluid>
    </section>
  );
};

export default Hero;
