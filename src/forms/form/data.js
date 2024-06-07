export const locations = [
  "capeCod",
  "carpenhagen",
  "charborough",
  "clamsterdam",
  "coralifornia",
  "costaDelSole",
  "fishStockHolm",
  "theMaldeels",
  "salmonaco",
  "squidney",
  "whales",
];

export const accommodationTypes = [
  "beachHouse",
  "bedAndBreakfast",
  "campSite",
  "hotel",
];

export const preferredActivities = [
  "whaleWatching",
  "snorkelling",
  "beachVolleyball",
  "kayaking",
  "sandcastleBuilding",
  "coastalHikes",
  "dolphinCruises",
  "underwaterPhotography",
  "seasideYoga",
  "surfingLessons",
];

export const preprocessFormData = (formData) => {
  formData.set(
    "preferredActivities",
    preferredActivities.filter((key) => formData.get(key) !== null).join(","),
  );
  preferredActivities.forEach((key) => formData.delete(key));
};

export const getDataFromProps = (
  personalDetails,
  destinationAndDates,
  preferredActivities,
) => ({
  personalDetails,
  destinationAndDates,
  selectedPreferredActivities: Object.entries(preferredActivities)
    .filter(([, value]) => value)
    .map(([key]) => key),
});

export const getDataFromFormData = (formData) => {
  const fullName = formData.get("fullName") ?? "";
  const email = formData.get("email") ?? "";
  const phoneNumber = formData.get("phoneNumber") ?? "";
  const address = formData.get("address") ?? "";
  const numberOfAdults = formData.get("numberOfAdults") ?? "";
  const numberOfChildren = formData.get("numberOfChildren") ?? "";
  const location = formData.get("location") ?? "";
  const accommodation = formData.get("accommodation") ?? "";
  const checkIn = formData.get("checkIn") ?? "";
  const checkOut = formData.get("checkOut") ?? "";
  const flexibleOnDates = formData.get("flexibleOnDates") ?? "";
  const selectedPreferredActivities = formData.get("preferredActivities")
    ? formData.get("preferredActivities").toString().split(",")
    : [];

  return {
    personalDetails: {
      fullName,
      email,
      phoneNumber,
      address,
      numberOfAdults,
      numberOfChildren,
    },
    destinationAndDates: {
      location,
      accommodation,
      checkIn,
      checkOut,
      flexibleOnDates,
    },
    selectedPreferredActivities,
  };
};
