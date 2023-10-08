import { Link } from "react-router-dom";
import image1 from "../../assets/brides-couple-cutting-wedding-cake.jpg";
import "./Home.css";
import Footer from "../Shared/Footer/Footer";

import grid1 from "../../assets/gridGallery/andrea-mininni-VLlkOJdzLG0-unsplash.jpg";
import grid2 from "../../assets/gridGallery/young-joyful-friends-celebrating.jpg";
import grid3 from "../../assets/gridGallery/antenna-ZDN-G1xBWHY-unsplash.jpg";
import grid4 from "../../assets/gridGallery/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees.jpg";
import grid5 from "../../assets/gridGallery/ben-rosett-nYugmV-SY6s-unsplash.jpg";
import grid6 from "../../assets/gridGallery/bride-groom-wedding-reception.jpg";
import grid7 from "../../assets/gridGallery/brides-couple-cutting-wedding-cake.jpg";
import grid8 from "../../assets/gridGallery/cheerful-young-woman-singing-her-friends-party-room-with-neon-lights-smoke.jpg";
import grid9 from "../../assets/gridGallery/front-view-beautiful-baby-shower-concept.jpg";
import grid10 from "../../assets/gridGallery/marc-babin-aQWmCH_b3MU-unsplash.jpg";
import grid11 from "../../assets/gridGallery/pineapple-supply-co-qWlkCwBnwOE-unsplash.jpg";
import grid12 from "../../assets/gridGallery/wout-vanacker-l4HBYkURqvE-unsplash.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
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
              {!user ? (
                <Link className="/register">
                  {" "}
                  <button className=" get-started">Get Started</button>
                </Link>
              ) : (
                <Link className="/events">
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

      {/* gallery section */}

      <div className="mt-4">
        <h2 className="text-3xl text-center">Anifa Events Gallery</h2>
        <h2 className="text-5xl font-extrabold text-center pt-2 mb-16">
          Excellent & Unforgettable Moments
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          <div className="grid  gap-4">
            <div className="">
              <img
                className=" h-96 object-fill max-w-full rounded-lg"
                src={grid1}
                alt=""
              />
            </div>
            <div>
              <img className="h-72 max-w-full rounded-lg" src={grid2} alt="" />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={grid3}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={grid4}
                alt=""
              />
            </div>
            <div>
              <img className="h-80 max-w-full rounded-lg" src={grid5} alt="" />
            </div>
            <div>
              <img className=" max-w-full rounded-lg" src={grid6} alt="" />
            </div>
          </div>
          <div className="grid ">
            <div>
              <img className="h-96 max-w-full rounded-lg" src={grid7} alt="" />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={grid8}
                alt=""
              />
            </div>
            <div>
              <img className="h-72 max-w-full rounded-lg" src={grid9} alt="" />
            </div>
          </div>
          <div className="grid ">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={grid10}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={grid11}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={grid12}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
