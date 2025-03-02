import React from "react";
import { allDestinations } from "@/data/desinations";

const EnquireForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
          <div className="text-[22px] sm:text-2xl md:text-2xl lg:text-3xl fw-600">
            Request a Quote
          </div>
          <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
            <div className="col-sm-12 col-md-6">
              <div className="form-input">
                <input type="text" id="name" required />
                <label htmlFor="name" className="lh-1 text-16 text-light-1">
                  Your Name
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-input">
                <input type="text" id="contact" required />
                <label htmlFor="contact" className="lh-1 text-16 text-light-1">
                  Contact Number
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-input">
                <input type="email" id="email" required />
                <label htmlFor="email" className="lh-1 text-16 text-light-1">
                  Email
                </label>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-input">
                <input type="date" id="departure" required className="cursor-pointer" />
                <label
                  htmlFor="departure"
                  className="-mt-4 text-16 text-light-1"
                >
                  Departure Date
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-input">
                <input type="number" id="adults" required />
                <label htmlFor="adults" className="lh-1 text-16 text-light-1">
                  Adults
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-input">
                <input type="number" id="children" required />
                <label htmlFor="children" className="lh-1 text-16 text-light-1">
                  Children
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-input">
                <input type="number" id="ageOfChildren" required />
                <label
                  htmlFor="ageOfChildren"
                  className="lh-1 text-16 text-light-1"
                >
                  Age of Children
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-input">
                <input type="number" id="numberOfNights" required />
                <label
                  htmlFor="numberOfNights"
                  className="lh-1 text-16 text-light-1"
                >
                  Number of Nights
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-input">
                <input type="number" id="numberOfRooms" required />
                <label
                  htmlFor="numberOfRooms"
                  className="lh-1 text-16 text-light-1"
                >
                  Number of Rooms
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-input">
                <select
                  className="border lh-1 text-16 text-light-1 px-[10px] py-[21px] cursor-pointer"
                  id="boardBasis"
                  required
                >
                  <option value="" disabled selected>
                    Board Basis
                  </option>
                  <option value="room-only">Room Only</option>
                  <option value="b&b">B&B</option>
                  <option value="half-board">Half Board</option>
                  <option value="full-board-plus">Full Board Plus</option>
                  <option value="all-inclusive">All Inclusive</option>
                  <option value="ultra-all-inclusive">
                    Ultra All Inclusive
                  </option>
                  <option value="all-inclusive-dine-around">
                    All Inclusive Dine Around
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-input">
                <input type="text" id="airport" required />
                <label htmlFor="airport" className="lh-1 text-16 text-light-1">
                  Airport
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-input">
                <select
                  className="border lh-1 text-16 text-light-1 px-[10px] py-[21px] cursor-pointer"
                  id="flightClasses"
                  required
                >
                  <option value="" disabled selected>
                    Flight Class
                  </option>
                  <option value="economy">Economy</option>
                  <option value="premium-economy">Premium Economy</option>
                  <option value="business-class">Business Class</option>
                  <option value="first-class">First Class</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-input">
                <select
                  className="border lh-1 text-16 text-light-1 px-[10px] py-[21px] cursor-pointer"
                  id="destinations"
                  required
                >
                  <option value="" disabled selected>
                    Destination Type
                  </option>
                  {allDestinations.map((destination) => (
                    <option key={destination.id} value={destination.city}>
                      {destination.city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-input">
                <select
                  className="border lh-1 text-16 text-light-1 px-[10px] py-[21px] cursor-pointer"
                  id="hotels/offers"
                  required
                >
                  <option value="" disabled selected>
                    Hotel/Offer
                  </option>
                  <option value="hotel1">Hotel1</option>
                  <option value="hotel2">Hotel2</option>
                  <option value="hotel3">Hotel3</option>
                  <option value="hotel4">Hotel4</option>
                  <option value="hotel5">Hotel5</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-input">
                <textarea id="additionalInformation" required rows="4"></textarea>
                <label htmlFor="additionalInformation" className="lh-1 text-16 text-light-1">
                  Additional Information
                </label>
              </div>
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
              >
                Send a Quote Request <div className="icon-arrow-top-right ml-15"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireForm;
