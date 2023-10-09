import { Link } from "react-router-dom";
import "./Event.css";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Event = ({ event }) => {
  const { image, title, price, description, id } = event;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="card card-compact h-96 bg-transparent text-white border-gray-200 border shadow-xl"
      >
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p>
            {description.length > 50
              ? description.slice(0, 80) + " ..."
              : description}
          </p>

          <p className="text-xl text-[#ffbe30] font-bold">
            {" "}
            Price Starts From ${price}
          </p>

          <Link to={`/event/details/${id}`} className=" card-actions ">
            <button className=" card-btn ">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
