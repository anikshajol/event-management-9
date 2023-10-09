import { Link } from "react-router-dom";
import image1 from "../../assets/brides-couple-cutting-wedding-cake.jpg";
import "./Home.css";
import Footer from "../Shared/Footer/Footer";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "../Gallery/Gallery";
import Loading from "../Shared/Loading/Loading";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timing = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(timing);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {loader ? (
        <Loading></Loading>
      ) : (
        <div data-aos="flip-down" className="px-1 md:px-0 overflow-hidden">
          <div
            className="hero min-h-screen "
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className="hero-overlay  bg-black bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md ">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Our One Stop Services are Weddings, Birthday Parties,
                  Anniversaries,Engagement Parties, Retirement Parties, Baby
                  shower, etc.
                </p>
                <div className="flex flex-col items-center md:flex-row-reverse justify-center gap-5 ">
                  {!user ? (
                    <Link to="/register">
                      <button className=" get-started">Get Started</button>
                    </Link>
                  ) : (
                    <Link to="/events">
                      <button className=" get-started">Our Events</button>
                    </Link>
                  )}
                  <Link to={"/about"}>
                    <button className="primary-btn">About Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="  md:px-2 discount-offer flex flex-col justify-center  lg:flex-row md:justify-around items-center ">
            <div data-aos="flip-down" className="px-4 ">
              <h2 className="text-white font-semibold text-2xl">
                <span className="text-4xl font-bold text-[#ffbe30;]">30%</span>{" "}
                Off In November-December For Wedding Events
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

          {/* gallery section */}

          <div className="mt-4" data-aos="flip-down">
            <h2 className="text-3xl text-center">
              Anifa Events Gallery And Our Services
            </h2>
            <h2 className="text-5xl font-extrabold text-center pt-2 mb-16">
              Excellent & Unforgettable Moments
            </h2>

            <div className="px-1">
              <Gallery></Gallery>
            </div>
          </div>
        </div>
      )}
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
