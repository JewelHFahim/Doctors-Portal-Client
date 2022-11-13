const AppointmentOptions = ({ option, setTreatment }) => {
  const { name, slots } = option;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl text-center">
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p>{ slots.length > 0 ? slots[0] : 'Try another day' }</p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space' } available</p>
          <div className="card-actions justify-center mt-2">
            <label disabled={slots.length === 0} label htmlFor="booking-modal" onClick={()=>setTreatment(option)} className="btn btn-primary">Book Appointment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
