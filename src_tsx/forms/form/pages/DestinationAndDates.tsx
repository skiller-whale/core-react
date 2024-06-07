import type { ChangeEventHandler } from "react";
import Fieldset from "../../components/Fieldset";
import Checkbox from "../../inputs/Checkbox";
import Input from "../../inputs/Input";
import Select from "../../inputs/Select";
import {
  type DestinationAndDatesData,
  accommodationTypes,
  locations,
} from "../data";
import { initialFormData } from "../state";

type Props = {
  visible: boolean;
  destinationAndDates: DestinationAndDatesData;
  setDestinationAndDates: Record<
    keyof DestinationAndDatesData,
    ChangeEventHandler<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  >;
};

const DestinationAndDates = ({
  visible,
  destinationAndDates,
  setDestinationAndDates,
}: Props) => (
  <div className={visible ? "" : "hidden"}>
    <Fieldset legend="Destination and Dates">
      <Select
        label="Location"
        options={locations}
        id="location"
        required
        value={destinationAndDates.location}
        onChange={setDestinationAndDates.location}
      />
      <Select
        label="Accommodation"
        id="accommodation"
        options={accommodationTypes}
        required
        value={destinationAndDates.accommodation}
        onChange={setDestinationAndDates.accommodation}
      />
      <div className="flex gap-4">
        <Input
          label="Check In"
          type="date"
          id="checkIn"
          required
          // defaultValue={initialFormData.get("checkIn") as string}
          value={destinationAndDates.checkIn}
          onChange={setDestinationAndDates.checkIn}
        />
        <Input
          label="Check Out"
          type="date"
          id="checkOut"
          required
          // defaultValue={initialFormData.get("checkOut") as string}
          value={destinationAndDates.checkOut}
          onChange={setDestinationAndDates.checkOut}
        />
      </div>
      <Checkbox
        label="Flexible on Dates"
        id="flexibleOnDates"
        checked={destinationAndDates.flexibleOnDates}
        onChange={setDestinationAndDates.flexibleOnDates}
      />
    </Fieldset>
  </div>
);

export default DestinationAndDates;
