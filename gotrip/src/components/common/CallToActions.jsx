const CallToActions = () => {
  return (
    <section className="layout-pt-md layout-pb-md bg-dark-2">
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
              className="button h-60 bg-blue-1 text-white"
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

export default CallToActions;
