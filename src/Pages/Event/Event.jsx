import { Link } from "react-router-dom";
import "./Event.css";
import PropTypes from "prop-types";

const Event = ({ event }) => {
  const { image, title, price, description, id } = event;
  return (
    <div>
      <div className="card card-compact h-96 bg-transparent text-white border-gray-200 border shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p>{description}</p>

          <p className="text-xl text-[#ffbe30] font-bold">${price}</p>

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
