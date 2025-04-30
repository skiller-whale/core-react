import camelCaseToString from "../../utils/camelCaseToString";
import {
  type DestinationAndDatesData,
  type PersonalDetailsData,
  type PreferredActivitiesData,
  getDataFromFormData,
  getDataFromProps,
} from "../data";

type Props = {
  visible: boolean;
  personalDetails: PersonalDetailsData;
  destinationAndDates: DestinationAndDatesData;
  preferredActivities: PreferredActivitiesData;
};

const Confirmation = ({
  visible,
  personalDetails,
  destinationAndDates,
  preferredActivities,
}: Props) => {
  const data = getDataFromProps(
    personalDetails,
    destinationAndDates,
    preferredActivities,
  );

  return (
    <div className={visible ? "flex flex-col gap-4" : "hidden"}>
      <h1 className="text-3xl font-semibold">Confirmation</h1>
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Personal Details</h2>
          <p>Full Name: {data.personalDetails.fullName}</p>
          <p>Email: {data.personalDetails.email}</p>
          <p>
            Phone Number:{" "}
            {data.personalDetails.phoneNumber.length > 0
              ? data.personalDetails.phoneNumber
              : "none"}
          </p>
          <p>
            Address:{" "}
            {data.personalDetails.address.length > 0
              ? data.personalDetails.address
              : "none"}
          </p>
          <p>Number of Adults: {data.personalDetails.numberOfAdults}</p>
          <p>Number of Children: {data.personalDetails.numberOfChildren}</p>
          <h2 className="text-2xl font-semibold">Destination and Dates</h2>
          <p>
            Location: {camelCaseToString(data.destinationAndDates.location)}
          </p>
          <p>
            Accommodation:{" "}
            {camelCaseToString(data.destinationAndDates.accommodation)}
          </p>
          <p>
            Dates: {data.destinationAndDates.checkIn} to{" "}
            {data.destinationAndDates.checkOut}
          </p>
          <p>
            Flexible on Dates:{" "}
            {data.destinationAndDates.flexibleOnDates ? "Yes" : "No"}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Preferred Activities</h2>
          <ul>
            {data.selectedPreferredActivities.length > 0 ? (
              data.selectedPreferredActivities.map((key) => (
                <li key={key}>{camelCaseToString(key)}</li>
              ))
            ) : (
              <li>None</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
