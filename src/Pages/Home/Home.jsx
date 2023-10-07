import { Link } from "react-router-dom";
import image1 from "../../assets/brides-couple-cutting-wedding-cake.jpg";
import "./Home.css";

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
    </div>
  );
};

export default Home;
