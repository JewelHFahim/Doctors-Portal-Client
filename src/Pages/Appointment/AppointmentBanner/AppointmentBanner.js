import chair from "../../../Assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentis chair"
          />

          <div className="mr-6 py-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              // onSelect={setSelectedDate}
              onSelect={(data)=>{
              if(data){
                setSelectedDate(data)
              }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
