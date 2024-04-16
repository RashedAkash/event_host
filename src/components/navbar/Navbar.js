import Container from "../container/Container";
import ContainerFluid from "../container/ContainerFulid";
import Image from "next/image";

const Navbar = () => {
  return (
    <ContainerFluid>
      <Container>
        <nav>
          <div className="navbar bg-[#7B4AFF] rounded-3xl mb-[50px]">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Events</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">
                <Image
                  src="/Resourcess/icon/EventHost.png"
                  alt="Shoes"
                  width={114}
                  height={27}
                  className="text-white"
                />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Events</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <Image
                src="/Resourcess/man.png"
                alt="Shoes"
                width={30}
                height={30}
                className="text-white "
              />
              <Image
                src="/Resourcess/icon/Group 7.png"
                alt="Shoes"
                width={28}
                height={28}
                className="text-white ml-3 mr-7"
              />
            </div>
          </div>
        </nav>
      </Container>
    </ContainerFluid>
  );
};

export default Navbar;