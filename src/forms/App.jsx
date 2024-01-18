import { useState } from "react"
import Header from "./components/Header"
import Controls from "./form/Controls"
import { preprocessFormData } from "./form/data"
import Confirmation from "./form/pages/Confirmation"
import DestinationAndDates from "./form/pages/DestinationAndDates"
import PersonalDetails from "./form/pages/PersonalDetails"
import PreferredActivities from "./form/pages/PreferredActivities"
import SpecialRequirements from "./form/pages/SpecialRequirements"
import Submitted from "./form/pages/Submitted"
import { initialFormData, pages } from "./form/state"
import useFormState from "./hooks/useFormState"
import usePages from "./hooks/usePages"
import Form from "./inputs/Form"
import debounce from "./utils/debounce"
import getInputElements from "./utils/getInputElements"
import isVisibleElement from "./utils/isVisibleElement"
import saveToBackend from "./utils/saveToBackend"

const App = () => {
  const [page, setPage, nextPage, previousPage] = usePages(pages)
  const [pageStatus, setPageStatus] = useState("valid")
  const [formStatus, setFormStatus] = useState("inProgress")
  const [formData, setFormData] = useState(initialFormData)
  const [personalDetails, setPersonalDetails] = useFormState({
    fullName: "Ada the Skiller Whale",
    email: "ada@skillerwhale.com",
    phoneNumber: "",
    address: "The Sea",
    numberOfAdults: "1",
    numberOfChildren: "0",
  })

  const [destinationAndDates, setDestinationAndDates] = useFormState({
    location: "",
    accommodation: "",
    checkIn: "2022-02-05",
    checkOut: "2022-02-12",
    flexibleOnDates: false,
  })

  const [preferredActivities, setPreferredActivities] = useFormState({
    whaleWatching: false,
    snorkelling: false,
    beachVolleyball: false,
    kayaking: false,
    sandcastleBuilding: false,
    coastalHikes: false,
    dolphinCruises: false,
    underwaterPhotography: false,
    seasideYoga: false,
    surfingLessons: false,
  })

  const [dietaryRequirements, setDietaryRequirements] = useFormState({
    vegetarian: false,
    vegan: false,
    halal: false,
    kosher: false,
  })

  const [accessibilityRequirements, setAccessibilityRequirements] =
    useFormState({
      wheelchairAccess: false,
      visualImpairment: false,
      hearingImpairment: false,
      serviceAnimal: false,
    })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormStatus("submitting")

    const result = await saveToBackend(formData, true)
    setFormStatus(result.ok ? "success" : "error")
  }

  return (
    <div className="flex flex-col gap-4">
      <Header />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Controls
          visible={page !== "submitted"}
          page={page}
          pageStatus={pageStatus}
          formStatus={formStatus}
          nextPage={nextPage}
          previousPage={previousPage}
        />
        <PersonalDetails
          visible={page === "personalDetails"}
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <DestinationAndDates
          visible={page === "destinationAndDates"}
          destinationAndDates={destinationAndDates}
          setDestinationAndDates={setDestinationAndDates}
        />
        <PreferredActivities
          visible={page === "preferredActivities"}
          preferredActivities={preferredActivities}
          setPreferredActivities={setPreferredActivities}
        />
        <SpecialRequirements
          visible={page === "specialRequirements"}
          dietaryRequirements={dietaryRequirements}
          setDietaryRequirements={setDietaryRequirements}
          accessibilityRequirements={accessibilityRequirements}
          setAccessibilityRequirements={setAccessibilityRequirements}
        />
        <Confirmation
          visible={page === "confirmation"}
          personalDetails={personalDetails}
          destinationAndDates={destinationAndDates}
          preferredActivities={preferredActivities}
          dietaryRequirements={dietaryRequirements}
          accessibilityRequirements={accessibilityRequirements}
        />
        <Submitted visible={page === "submitted"} formStatus={formStatus} />
      </form>
    </div>
  )
}

export default App
