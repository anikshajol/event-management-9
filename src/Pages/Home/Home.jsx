import { Link } from "react-router-dom";
import image1 from "../../assets/brides-couple-cutting-wedding-cake.jpg";
import "./Home.css";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Our One Stop Services are Weddings, Birthday Parties,
              Anniversaries,Engagement Parties, Retirement Parties, Baby shower,
              etc.
            </p>
            <div className="flex flex-row-reverse justify-center gap-5">
              <Link>
                {" "}
                <button className=" get-started">Get Started</button>
              </Link>
              <Link to={"/about"}>
                <button className="primary-btn">About Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="discount-offer flex justify-around items-center ">
        <div>
          <h2 className="text-white font-semibold text-2xl">
            <span className="text-4xl font-bold text-[#ffbe30;]">30%</span> Off
            In November-December For Wedding Events
          </h2>
          <p className="">
            {" "}
            Contact us and make your event unique & unforgettable{" "}
          </p>
        </div>
        <div>
          <button className="offer-btn">Contact us</button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
