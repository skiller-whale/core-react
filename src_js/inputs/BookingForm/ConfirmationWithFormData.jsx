import Button from "../components/Button";

const Confirmation = ({ visible = true, previousPage, formData }) => (
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
        <p>
          Full Name: {formData.get("fullName") || <i>missing</i>}
        </p>
        <p>Email: {formData.get("email") || <i>missing</i>}</p>
        <p>Number of Adults: {formData.get("numberOfAdults")}</p>
        <p>Number of Children: {formData.get("numberOfChildren")}</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Destination and Dates</h2>
        <p>Location: {formData.get("location")}</p>
        <p>Accommodation: {formData.get("accommodationType")}</p>
        <p>
          Dates:{" "}
          {formData.get("checkInDate") && formData.get("checkOutDate") ? (
            `${formData.get("checkInDate")} to ${formData.get("checkOutDate")}`
          ) : (
            <i>missing</i>
          )}
        </p>
      </div>
    </div>
  </div>
);

export default Confirmation;
