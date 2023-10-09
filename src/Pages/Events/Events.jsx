import { useLoaderData } from "react-router-dom";
import bg from "../../assets/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees.jpg";
import Event from "../event/event";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";

const Events = () => {
  const events = useLoaderData();
  const [loader, setLoader] = useState(true);
  // console.log(events);

  useEffect(() => {
    const timing = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(timing);
  }, []);

  return (
    <>
      {loader ? (
        <Loading></Loading>
      ) : (
        <div className="">
          <h2 className="text-5xl text-center bg-black text-white py-3">
            {" "}
            Our Events{" "}
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
      )}{" "}
      <Footer></Footer>
    </>
  );
};

export default Events;
