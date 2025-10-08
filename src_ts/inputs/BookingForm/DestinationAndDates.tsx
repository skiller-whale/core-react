import type { Dispatch, SetStateAction } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

type Props = {
  visible: boolean;
  previousPage: () => void;
  nextPage: () => void;
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  accommodationType: string;
  setAccommodationType: (type: string) => void;
  checkInDate: string;
  setCheckInDate: (date: string) => void;
  checkOutDate: string;
  setCheckOutDate: (date: string) => void;
};

const DestinationAndDates = ({
  visible,
  previousPage,
  nextPage,
  location,
  setLocation,
  accommodationType,
  setAccommodationType,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}: Props) => (
  <div className={visible ? "block" : "hidden"}>
    <div className="flex justify-between bg-blue-100 px-6 py-3">
      <h2 className="text-2xl font-semibold">Destination and Dates</h2>
      <div className="flex gap-3">
        <Button type="button" onClick={previousPage}>
          Previous
        </Button>
        <Button type="button" onClick={nextPage}>
          Next
        </Button>
      </div>
    </div>
    <div className="flex flex-col gap-3 p-6">
      <Select
        label="Location"
        name="location"
        options={locations}
        required
        value={location}
        onChange={(e) => setLocation(e.currentTarget.value)}
      />
      <Select
        label="Accommodation"
        name="accommodationType"
        options={accommodationTypes}
        required
        value={accommodationType}
        onChange={(e) => setAccommodationType(e.currentTarget.value)}
      />
      <div className="flex gap-4">
        <Input
          label="Check In"
          name="checkIn"
          type="date"
          required
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.currentTarget.value)}
        />
        <Input
          label="Check Out"
          name="checkOut"
          type="date"
          required
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.currentTarget.value)}
        />
      </div>
    </div>
  </div>
);

export default DestinationAndDates;

export const locations = [
  "Cape Cod",
  "Carpenhagen",
  "Charborough",
  "Clamsterdam",
  "Coralifornia",
  "Costa Del Sole",
  "Fish Stock Holm",
  "The Maldeels",
  "Salmonaco",
  "Squidney",
  "Whales",
];

export const accommodationTypes = [
  "Beach House",
  "Bed and Breakfast",
  "Camp Site",
  "Hotel",
];
