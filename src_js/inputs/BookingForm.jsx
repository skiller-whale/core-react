import { useState } from "react";
import Confirmation from "./BookingForm/ConfirmationWithObjectData";
// import Confirmation from "./BookingForm/ConfirmationWithFormData";
import DestinationAndDates, {
  locations,
  accommodationTypes,
} from "./BookingForm/DestinationAndDates";
import PersonalDetails from "./BookingForm/PersonalDetails";
import useFormData from "./hooks/useFormData";
import useFormPages from "./hooks/useFormPages";

const BookingForm = () => {
  const [page, previousPage, nextPage] = useFormPages([
    "Personal Details",
    "Destination and Dates",
    "Confirmation",
  ]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfAdults, setNumberOfAdults] = useState("1");
  const [numberOfChildren, setNumberOfChildren] = useState("0");
  const [location, setLocation] = useState(locations[0]);
  const [accommodationType, setAccommodationType] = useState(
    accommodationTypes[0]
  );
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  return (
    <form
      noValidate
      className="flex flex-col shadow-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <PersonalDetails
        visible={page === "Personal Details"}
        nextPage={nextPage}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        numberOfAdults={numberOfAdults}
        setNumberOfAdults={setNumberOfAdults}
        numberOfChildren={numberOfChildren}
        setNumberOfChildren={setNumberOfChildren}
      />
      <DestinationAndDates
        visible={page === "Destination and Dates"}
        previousPage={previousPage}
        nextPage={nextPage}
        location={location}
        setLocation={setLocation}
        accommodationType={accommodationType}
        setAccommodationType={setAccommodationType}
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
      />
      <Confirmation
        visible={page === "Confirmation"}
        previousPage={previousPage}
        fullName={fullName}
        email={email}
        numberOfAdults={numberOfAdults}
        numberOfChildren={numberOfChildren}
        location={location}
        accommodationType={accommodationType}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
      />
    </form>
  );
};

export default BookingForm;
