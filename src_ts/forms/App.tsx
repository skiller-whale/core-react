import { type FormEvent, useState } from "react";
import Header from "./components/Header";
import Controls from "./form/Controls";
import { preprocessFormData } from "./form/data";
import Confirmation from "./form/pages/Confirmation";
import DestinationAndDates from "./form/pages/DestinationAndDates";
import PersonalDetails from "./form/pages/PersonalDetails";
import PreferredActivities from "./form/pages/PreferredActivities";
import Submitted from "./form/pages/Submitted";
import {
  type FormStatus,
  type PageStatus,
  initialFormData,
  pages,
} from "./form/state";
import useFormState from "./hooks/useFormState";
import usePages from "./hooks/usePages";
import Form from "./inputs/Form";
import getInputElements from "./utils/getInputElements";
import isVisibleElement from "./utils/isVisibleElement";
import saveToBackend from "./utils/saveToBackend";

const App = () => {
  // form state
  const [page, setPage, nextPage, previousPage] = usePages(pages);
  const [pageStatus, setPageStatus] = useState<PageStatus>("valid");
  const [formStatus, setFormStatus] = useState<FormStatus>("inProgress");
  const [formData, setFormData] = useState(initialFormData);

  // form inputs state
  const [personalDetails, setPersonalDetails] = useFormState({
    fullName: initialFormData.get("fullName") as string,
    email: initialFormData.get("email") as string,
    phoneNumber: "",
    address: initialFormData.get("address") as string,
    numberOfAdults: initialFormData.get("numberOfAdults") as string,
    numberOfChildren: initialFormData.get("numberOfChildren") as string,
  });

  const [destinationAndDates, setDestinationAndDates] = useFormState({
    location: "",
    accommodation: "",
    checkIn: initialFormData.get("checkIn") as string,
    checkOut: initialFormData.get("checkOut") as string,
    flexibleOnDates: false,
  });

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
  });

  // event handlers
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    const result = await saveToBackend(formData);
    setPage("submitted");
    setFormStatus(result.ok ? "success" : "error");
  };

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
  );
};

export default App;
