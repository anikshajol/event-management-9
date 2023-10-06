import { useNavigate, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../../public/animation_lnf013hb.json";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto">
      <section className="flex flex-col md:flex-row items-center justify-center">
        <div className=" w-1/2">
          <Lottie
            animationData={animationData}
            className=""
            loop={true}
            autoplay={true}
          />
        </div>
        <div className="text-center flex flex-col justify-center items-center gap-2 ">
          <h2 className="text-8xl font-extrabold">{error.status}</h2>
          <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
          <p className="text-red-600 text-3xl">
            Page {error.statusText || error.message}
          </p>
          <div className="text-center">
            <button className="btn-grad " onClick={handleGoHome}>
              Go Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
