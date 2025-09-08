import type { Dispatch, SetStateAction } from "react";
import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

type Props = {
  visible: boolean;
  nextPage: () => void;
  fullName: string;
  email: string;
  numberOfAdults: string;
  numberOfChildren: string;
  setFullName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setNumberOfAdults: Dispatch<SetStateAction<string>>;
  setNumberOfChildren: Dispatch<SetStateAction<string>>;
};

const PersonalDetails = ({
  visible,
  nextPage,
  fullName,
  setFullName,
  email,
  setEmail,
  numberOfAdults,
  setNumberOfAdults,
  numberOfChildren,
  setNumberOfChildren,
}: Props) => {
  return (
    <div className={visible ? "block" : "hidden"}>
      <div className="flex justify-between bg-blue-100 px-6 py-3">
        <h2 className="text-2xl font-semibold">Personal Details</h2>
        <div className="flex gap-3">
          <Button type="button" disabled>
            Previous
          </Button>
          <Button type="button" onClick={nextPage}>
            Next
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <Input
          label="Full Name"
          name="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.currentTarget.value)}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <div className="flex gap-4">
          <Input
            label="Number of Adults"
            name="numberOfAdults"
            type="number"
            min="1"
            required
            value={numberOfAdults}
            onChange={(e) => setNumberOfAdults(e.currentTarget.value)}
          />
          <Input
            label="Number of Children"
            name="numberOfChildren"
            type="number"
            min="0"
            required
            value={numberOfChildren}
            onChange={(e) => setNumberOfChildren(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
