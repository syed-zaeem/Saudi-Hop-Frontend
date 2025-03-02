const LuxuryCallToActions = () => {
    return (
      <section className="layout-pt-md mt-[100px] layout-pb-md bg-gray-900">
        <div className="call_to_action_content">
          <div className="call_to_action_left_col">
            <div className="row y-gap-20 items-center">
              <h4 className="text-white call_to_action_left_heading">
                Receive Exclusive Discounted Deals Directly to Your Inbox!
              </h4>
              <div className="text-white">
                Sign up now to receive exclusive Umrah deals straight to your
                inbox! Don't miss out on limited-time offers, discounted deals,
                and special promotions.
              </div>
            </div>
          </div>
          {/* End .col */}
  
          <div className="single-field call_to_action_right_col x-gap-10 y-gap-20">
            <div className="call_to_action_email">
              <input
                className="bg-white h-60"
                type="text"
                placeholder="Your Email"
              />
            </div>
            {/* End email input */}
  
            <div className="call_to_action_button">
              <button
                className="button h-60 luxury_call_to_action_button"
                style={{ width: "100%" }}
              >
                Subscribe
              </button>
            </div>
            {/* End subscribe btn */}
          </div>
        </div>
        {/* End .col */}
      </section>
    );
  };
  
  export default LuxuryCallToActions;
  