import Footer from "../Shared/Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="w-9/12 mx-auto py-10 ">
        <h5 className="mb-6 text-base text-center font-semibold text-gray-500 uppercase dark:text-gray-400">
          Contact us
        </h5>

        <div className="card w-96 mx-auto bg-black shadow-xl image-full">
          <figure>
            <img
              src="https://i.ibb.co/g4bhVHf/antenna-ZDN-G1x-BWHY-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title text-2xl">Anifa Event Management</h2>
            <address className="text-xl">
              <p>
                Nam villa, Building-03, Road-2b, Block-I,
                <br /> Banani, Dhaka
              </p>
              <p>
                Mobile: +880XXXXXXXXX <br /> Phone: +8802XXXXXXXX
              </p>
            </address>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default ContactUs;
