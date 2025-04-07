import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const index = () => {
  return (
    <footer className="footer -type-1">
      <div className="container">
        <div className="pt-60 pb-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <div>
                <img
                  className="w-44 sm:w-40 lg:w-52 xl:w-52"
                  src="/img/general/saudi_hop_logo_light-removebg.png"
                  alt="Saudi Hop"
                />
                <div className="flex flex-col gap-y-2 my-3 w-[60%] xl:w-full">
                  <div className="flex justify-between">
                    <img
                      className="w-[32%]"
                      src="/img/general/visa_logo.JPG"
                      alt="Visa"
                    />
                    <img
                      className="w-[32%]"
                      src="/img/general/master_card_logo.JPG"
                      alt="Visa"
                    />
                    <img
                      className="w-[32%]"
                      src="/img/general/american_express_logo.JPG"
                      alt="Visa"
                    />
                  </div>
                  <div className="">
                    <img src="/img/general/nusuk_logo.png" className="w-full" alt="Nusuk Umrah" />
                  </div>
                  <div className="">
                    <img
                      src="/img/general/ministry_logo.avif"
                      className="w-full"
                      alt="Ministry of Hajj and Umrah"
                    />
                  </div>
                </div>
              </div>
              <h5 className="text-16 fw-500">Contact Us</h5>
              <ContactInfo />
            </div>
            {/* End col */}

            <FooterContent />
            {/* End footer menu content */}

            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Mobile</h5>
              <AppButton />
            </div>
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
