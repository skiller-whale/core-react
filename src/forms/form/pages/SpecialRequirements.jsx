import Fieldset from "../../components/Fieldset"
import Checkbox from "../../inputs/Checkbox"
import camelCaseToString from "../../utils/camelCaseToString"
import { accessibilityRequirements, dietaryRequirements } from "../data"

const SpecialRequirements = ({
  visible,
  dietaryRequirements,
  setDietaryRequirements,
  accessibilityRequirements,
  setAccessibilityRequirements,
}) => (
  <div className={visible ? "flex flex-col gap-6" : "hidden"}>
    <Fieldset legend="Dietary Requirements">
      {Object.keys(dietaryRequirements).map((key) => (
        <Checkbox
          key={key}
          label={camelCaseToString(key)}
          id={key}
          checked={dietaryRequirements[key]}
          onChange={setDietaryRequirements[key]}
        />
      ))}
    </Fieldset>
    <Fieldset legend="Accessibility Requirements">
      {Object.keys(accessibilityRequirements).map((key) => (
        <Checkbox
          key={key}
          label={camelCaseToString(key)}
          id={key}
          checked={accessibilityRequirements[key]}
          onChange={setAccessibilityRequirements[key]}
        />
      ))}
    </Fieldset>
  </div>
)

export default SpecialRequirements
