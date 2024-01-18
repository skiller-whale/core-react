import { useState } from "react"
import Header from "./components/Header"
import Controls from "./form/Controls"
import { preprocessFormData } from "./form/data"
import Confirmation from "./form/pages/Confirmation"
import DestinationAndDates from "./form/pages/DestinationAndDates"
import PersonalDetails from "./form/pages/PersonalDetails"
import PreferredActivities from "./form/pages/PreferredActivities"
import Submitted from "./form/pages/Submitted"
import { initialFormData, pages } from "./form/state"
import useFormState from "./hooks/useFormState"
import usePages from "./hooks/usePages"
import Form from "./inputs/Form"
import getInputElements from "./utils/getInputElements"
import isVisibleElement from "./utils/isVisibleElement"
import saveToBackend from "./utils/saveToBackend"

const App = () => {
  // form state
  const [page, setPage, nextPage, previousPage] = usePages(pages)
  const [pageStatus, setPageStatus] = useState("valid")
  const [formStatus, setFormStatus] = useState("inProgress")
  const [formData, setFormData] = useState(initialFormData)
  // form inputs state
  const [personalDetails, setPersonalDetails] = useFormState({
    fullName: initialFormData.get("fullName"),
    email: initialFormData.get("email"),
    phoneNumber: "",
    address: initialFormData.get("address"),
    numberOfAdults: initialFormData.get("numberOfAdults"),
    numberOfChildren: initialFormData.get("numberOfChildren"),
  })

  const [destinationAndDates, setDestinationAndDates] = useFormState({
    location: "",
    accommodation: "",
    checkIn: initialFormData.get("checkIn"),
    checkOut: initialFormData.get("checkOut"),
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

  // event handlers
  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormStatus("submitting")

    const result = await saveToBackend(formData)
    setPage("submitted")
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
        <Confirmation
          visible={page === "confirmation"}
          personalDetails={personalDetails}
          destinationAndDates={destinationAndDates}
          preferredActivities={preferredActivities}
        />
        <Submitted visible={page === "submitted"} formStatus={formStatus} />
      </form>
    </div>
  )
}

export default App
