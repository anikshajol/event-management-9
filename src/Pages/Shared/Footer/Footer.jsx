import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-black  text-primary-content">
        <aside>
          <img className="w-1/2" src={logo} alt="" />
          <p className="font-bold">Providing reliable events since 2001</p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link className="">
              <FaFacebook className="text-3xl  rounded-full text-[#0866FF] " />
            </Link>
            <Link className=" ">
              <FaYoutube className="text-3xl text-[#c4302b] " />
            </Link>
            <Link>
              <FaTwitter className="text-3xl text-[#0866FF] " />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
