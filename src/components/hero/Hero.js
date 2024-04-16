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
            <div className="relative">
              <Image
                src="/Resourcess/banner.png"
                alt="img"
                width={1160}
                height={441}
              />
              <div className="lg:flex absolute -top-10
               left-5">
                <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-full">
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                      CMA Fest
                    </h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                      Make memories that will last a lifetime. See your favorite <br />
                      artists live at CMA Fest!
                    </p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                      <a
                        href="#"
                        className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
                      >
                        Get Started
                      </a>
                      <a
                        href="#"
                        className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/Resourcess/banner.png"
                alt="img"
                width={1160}
                height={441}
              />
              <div></div>
            </div>
            <div>
              <Image
                src="/Resourcess/banner.png"
                alt="img"
                width={1160}
                height={441}
              />
              <div></div>
            </div>
          </Slider>
        </Container>
      </ContainerFluid>
    </section>
  );
};

export default Hero;
