import { Link, useLoaderData } from "react-router-dom";
import image1 from "../../assets/brides-couple-cutting-wedding-cake.jpg";
import "./Home.css";
import Footer from "../Shared/Footer/Footer";
import bg from "../../assets/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees.jpg";
import Event from "../event/event";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "../Gallery/Gallery";
import Loading from "../Shared/Loading/Loading";

const Home = () => {
  const { user } = useContext(AuthContext);
  const events = useLoaderData();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timing = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(timing);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <>
      {loader ? (
        <Loading></Loading>
      ) : (
        <div data-aos="flip-down" className="px-1 md:px-0 overflow-hidden">
          {/* banner section */}
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
                      <button className=" get-started">Register</button>
                    </Link>
                  ) : (
                    <Link to="/booking">
                      <button className=" get-started">Booking Now</button>
                    </Link>
                  )}
                  <Link to={"/about"}>
                    <button className="primary-btn">About Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* offer section */}

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
            <Link to={"/contact"}>
              <button className="offer-btn">Contact us</button>
            </Link>
          </div>

          {/* service section */}

          <div data-aos="fade" className="mb-8">
            <h2 className="text-5xl text-center bg-black text-white py-3 md:py-10 ">
              {" "}
              Our Services{" "}
            </h2>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              <div className="hero-overlay bg-black bg-opacity-80"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 lg:px-6">
                {events.map((event) => (
                  <Event key={event.id} event={event}></Event>
                ))}
              </div>
            </div>
          </div>

          {/* gallery section */}

          <div className="mt-4">
            <div data-aos="flip-down">
              <h2 className="text-3xl text-center">
                Anifa Events Gallery And Our Services
              </h2>
              <h2 className="text-5xl font-extrabold text-center pt-2 mb-16">
                Excellent & Unforgettable Moments
              </h2>
            </div>

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
