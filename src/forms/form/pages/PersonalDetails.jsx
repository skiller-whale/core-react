import Fieldset from "../../components/Fieldset"
import Input from "../../inputs/Input"
import TextArea from "../../inputs/TextArea"
import { initialFormData } from "../state"

const PersonalDetails = ({ visible, personalDetails, setPersonalDetails }) => (
  <div className={visible ? "" : "hidden"}>
    <Fieldset legend="Personal Details">
      <Input
        label="Full Name"
        type="text"
        id="fullName"
        required
        // defaultValue={initialFormData.get("fullName") as string}
        value={personalDetails.fullName}
        onChange={setPersonalDetails.fullName}
      />
      <div className="flex gap-4">
        <Input
          label="Email"
          type="email"
          id="email"
          required
          // defaultValue={initialFormData.get("email") as string}
          value={personalDetails.email}
          onChange={setPersonalDetails.email}
        />
        <Input
          label="Phone Number"
          type="tel"
          id="phoneNumber"
          value={personalDetails.phoneNumber}
          onChange={setPersonalDetails.phoneNumber}
        />
      </div>
      <TextArea
        label="Address"
        id="address"
        rows={4}
        // defaultValue={initialFormData.get("address") as string}
        value={personalDetails.address}
        onChange={setPersonalDetails.address}
      />
      <div className="flex gap-4">
        <Input
          label="Number of Adults"
          type="number"
          min="1"
          id="numberOfAdults"
          required
          // defaultValue={initialFormData.get("numberOfAdults") as string}
          value={personalDetails.numberOfAdults}
          onChange={setPersonalDetails.numberOfAdults}
        />
        <Input
          label="Number of Children"
          type="number"
          min="0"
          id="numberOfChildren"
          required
          // defaultValue={initialFormData.get("numberOfChildren") as string}
          value={personalDetails.numberOfChildren}
          onChange={setPersonalDetails.numberOfChildren}
        />
      </div>
    </Fieldset>
  </div>
)

export default PersonalDetails
