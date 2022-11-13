import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(date, slot, name, email, phone);

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone
    }
    console.log(booking);
    setTreatment(null)

  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-8">
            <input value={date} disabled className="input text-center w-full" />

            <select name = "slot" className="select select-bordered w-full">
                {
                    slots.map((slot, i) => <option key ={i} value={slot} >{slot}</option>)
                }
            </select>

            <input
            name = "name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
            name = "email"
              type="email"
              placeholder="Your Email Address"
              className="input w-full input-bordered"
              required
            />
            <input
            name = "phone"
              type="text"
              placeholder="Your Phone Number"
              className="input w-full input-bordered"
            />
            <br />{" "}
            <input
              type="submit"
              value="Submit"
              className="bg-accent btn text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
