import Fieldset from "../../components/Fieldset"
import Checkbox from "../../inputs/Checkbox"
import camelCaseToString from "../../utils/camelCaseToString"
import { preferredActivities } from "../data"

const PreferredActivities = ({
  visible,
  preferredActivities,
  setPreferredActivities,
}) => (
  <div className={visible ? "" : "hidden"}>
    <Fieldset legend="Preferred Activities">
      {Object.keys(preferredActivities).map((preferredActivity) => (
        <Checkbox
          key={preferredActivity}
          label={camelCaseToString(preferredActivity)}
          id={preferredActivity}
          checked={preferredActivities[preferredActivity]}
          onChange={setPreferredActivities[preferredActivity]}
        />
      ))}
    </Fieldset>
  </div>
)

export default PreferredActivities
