import type { ChangeEventHandler } from "react"
import Fieldset from "../../components/Fieldset"
import Checkbox from "../../inputs/Checkbox"
import camelCaseToString from "../../utils/camelCaseToString"
import {
  type AccessibilityRequirement,
  type AccessibilityRequirementsData,
  type DietaryRequirement,
  type DietaryRequirementsData,
  accessibilityRequirements,
  dietaryRequirements,
} from "../data"

type Props = {
  visible: boolean
  dietaryRequirements: DietaryRequirementsData
  setDietaryRequirements: Record<
    DietaryRequirement,
    ChangeEventHandler<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  >
  accessibilityRequirements: AccessibilityRequirementsData
  setAccessibilityRequirements: Record<
    AccessibilityRequirement,
    ChangeEventHandler<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  >
}

const SpecialRequirements = ({
  visible,
  dietaryRequirements,
  setDietaryRequirements,
  accessibilityRequirements,
  setAccessibilityRequirements,
}: Props) => (
  <div className={visible ? "flex flex-col gap-6" : "hidden"}>
    <Fieldset legend="Dietary Requirements">
      {Object.keys(dietaryRequirements).map((key) => (
        <Checkbox
          key={key}
          label={camelCaseToString(key)}
          id={key}
          checked={dietaryRequirements[key as DietaryRequirement]}
          onChange={setDietaryRequirements[key as DietaryRequirement]}
        />
      ))}
    </Fieldset>
    <Fieldset legend="Accessibility Requirements">
      {Object.keys(accessibilityRequirements).map((key) => (
        <Checkbox
          key={key}
          label={camelCaseToString(key)}
          id={key}
          checked={accessibilityRequirements[key as AccessibilityRequirement]}
          onChange={
            setAccessibilityRequirements[key as AccessibilityRequirement]
          }
        />
      ))}
    </Fieldset>
  </div>
)

export default SpecialRequirements
