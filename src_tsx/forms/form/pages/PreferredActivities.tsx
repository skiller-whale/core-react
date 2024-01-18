import type { ChangeEventHandler } from "react"
import Fieldset from "../../components/Fieldset"
import Checkbox from "../../inputs/Checkbox"
import camelCaseToString from "../../utils/camelCaseToString"
import {
  type PreferredActivitiesData,
  type PreferredActivity,
  preferredActivities,
} from "../data"

type Props = {
  visible: boolean
  preferredActivities: PreferredActivitiesData
  setPreferredActivities: Record<
    PreferredActivity,
    ChangeEventHandler<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  >
}

const PreferredActivities = ({
  visible,
  preferredActivities,
  setPreferredActivities,
}: Props) => (
  <div className={visible ? "" : "hidden"}>
    <Fieldset legend="Preferred Activities">
      {Object.keys(preferredActivities).map((preferredActivity) => (
        <Checkbox
          key={preferredActivity}
          label={camelCaseToString(preferredActivity)}
          id={preferredActivity}
          checked={preferredActivities[preferredActivity as PreferredActivity]}
          onChange={
            setPreferredActivities[preferredActivity as PreferredActivity]
          }
        />
      ))}
    </Fieldset>
  </div>
)

export default PreferredActivities
