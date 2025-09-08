import Button from "../components/Button";

const Confirmation = ({
  visible = true,
  previousPage,
  fullName,
  email,
  numberOfAdults,
  numberOfChildren,
  location,
  accommodationType,
  checkInDate,
  checkOutDate,
}) => (
  <div className={visible ? "block" : "hidden"}>
    <div className="flex justify-between bg-blue-100 px-6 py-3">
      <h2 className="text-2xl font-semibold">Confirmation</h2>
      <div className="flex gap-3">
        <Button type="button" onClick={previousPage}>
          Previous
        </Button>
        <Button key="submit" type="submit">
          Submit
        </Button>
      </div>
    </div>
    <div className="flex gap-3 p-6">
      <div className="flex-1 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Personal Details</h2>
        <p>Full Name: {fullName || <i>missing</i>}</p>
        <p>Email: {email || <i>missing</i>}</p>
        <p>Number of Adults: {numberOfAdults}</p>
        <p>Number of Children: {numberOfChildren}</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Destination and Dates</h2>
        <p>Location: {location}</p>
        <p>Accommodation: {accommodationType}</p>
        <p>
          Dates:{" "}
          {checkInDate && checkOutDate ? (
            `${checkInDate} to ${checkOutDate}`
          ) : (
            <i>missing</i>
          )}
        </p>
      </div>
    </div>
  </div>
);

export default Confirmation;
