import Footer from "../Shared/Footer/Footer";

const About = () => {
  return (
    <>
      <div className=" px-4 lg:px-8 py-4 ">
        <div className="  flex gap-10  flex-col items-center justify-center lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-bold">Our Mission</h2>
            <p className="py-6 text-justify">
              At Anifa Event Management, our mission is to create unforgettable
              and seamless event experiences that exceed the expectations of our
              clients and leave a lasting impression on their guests. We are
              committed to bringing creativity, precision, and dedication to
              every event we undertake, ensuring that each celebration is a
              unique and cherished moment in our clients lives. Our mission is
              to be recognized as a trusted partner, guiding our clients through
              the entire event planning process with professionalism, passion,
              and a commitment to excellence.
            </p>
          </div>

          <div className="text-center lg:text-left ">
            <h2 className="text-5xl font-bold">Our Vision </h2>
            <p className="py-6 text-justify">
              Our vision at Anifa Event Management is to be the premier choice
              for individuals and businesses seeking unparalleled event planning
              services. We envision a future where our company is synonymous
              with innovation, reliability, and excellence in the events
              industry. We strive to continually raise the bar by staying ahead
              of industry trends, embracing cutting-edge technologies, and
              fostering a team of talented professionals who are passionate
              about turning dreams into reality. Our vision is to be the go-to
              event management company known for transforming visions into
              extraordinary events, creating memories that last a lifetime
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
