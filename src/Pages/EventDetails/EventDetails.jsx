import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image1 from "../../assets/brides-couple-cutting-wedding-cake.jpg";
import Footer from "../Shared/Footer/Footer";

const EventDetails = () => {
  const [eventsData, setEventsData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setEventsData(data));
  }, []);

  const eventData = eventsData.find((event) => event.id == id);

  return (
    <>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-80"></div>
        <div className="card w-1/2 pb-10   bg-transparent text-white shadow-2xl">
          <figure>
            <img
              className="h-1/2"
              src={eventData?.image}
              alt={eventData?.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl text-[#f09819]">
              {eventData?.title}
            </h2>
            <p className="text-justify text-lg">{eventData?.description}</p>
            <p className="text-[#f09819] font-bold text-xl">
              {" "}
              Price: ${eventData?.price}{" "}
            </p>
            <div className="card-actions justify-end">
              {eventData?.features?.map((feature) => (
                <>
                  <div className="badge badge-outline text-[#f09819] ">
                    {feature}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
};

export default EventDetails;
