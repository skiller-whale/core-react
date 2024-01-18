export type PersonalDetailsData = {
  fullName: string
  email: string
  phoneNumber: string
  address: string
  numberOfAdults: string
  numberOfChildren: string
}

export type DestinationAndDatesData = {
  location: string
  accommodation: string
  checkIn: string
  checkOut: string
  flexibleOnDates: boolean
}

export type PreferredActivitiesData = Record<PreferredActivity, boolean>

export type DietaryRequirementsData = Record<DietaryRequirement, boolean>

export type AccessibilityRequirementsData = Record<
  AccessibilityRequirement,
  boolean
>

export type Location = (typeof locations)[number]

export type AccommodationType = (typeof accommodationTypes)[number]

export type PreferredActivity = (typeof preferredActivities)[number]

export type DietaryRequirement = (typeof dietaryRequirements)[number]

export type AccessibilityRequirement =
  (typeof accessibilityRequirements)[number]

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
] as const

export const accommodationTypes = [
  "beachHouse",
  "bedAndBreakfast",
  "campSite",
  "hotel",
] as const

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
] as const

export const dietaryRequirements = [
  "vegetarian",
  "vegan",
  "halal",
  "kosher",
] as const

export const accessibilityRequirements = [
  "wheelchairAccess",
  "visualImpairment",
  "hearingImpairment",
  "serviceAnimal",
] as const

export const preprocessFormData = (formData: FormData) => {
  formData.set(
    "preferredActivities",
    preferredActivities.filter((key) => formData.get(key) !== null).join(","),
  )
  preferredActivities.forEach((key) => formData.delete(key))

  formData.set(
    "dietaryRequirements",
    dietaryRequirements.filter((key) => formData.get(key) !== null).join(","),
  )
  dietaryRequirements.forEach((key) => formData.delete(key))

  formData.set(
    "accessibilityRequirements",
    accessibilityRequirements
      .filter((key) => formData.get(key) !== null)
      .join(","),
  )
  accessibilityRequirements.forEach((key) => formData.delete(key))
}

export const getDataFromProps = (
  personalDetails: PersonalDetailsData,
  destinationAndDates: DestinationAndDatesData,
  preferredActivities: PreferredActivitiesData,
  dietaryRequirements: DietaryRequirementsData,
  accessibilityRequirements: AccessibilityRequirementsData,
) => ({
  personalDetails,
  destinationAndDates,
  selectedPreferredActivities: Object.entries(preferredActivities)
    .filter(([, value]) => value)
    .map(([key]) => key),
  selectedDietaryRequirements: Object.entries(dietaryRequirements)
    .filter(([, value]) => value)
    .map(([key]) => key),
  selectedAccessibilityRequirements: Object.entries(accessibilityRequirements)
    .filter(([, value]) => value)
    .map(([key]) => key),
})

export const getDataFromFormData = (formData: FormData) => {
  const fullName = (formData.get("fullName") as string) ?? ""
  const email = (formData.get("email") as string) ?? ""
  const phoneNumber = (formData.get("phoneNumber") as string) ?? ""
  const address = (formData.get("address") as string) ?? ""
  const numberOfAdults = (formData.get("numberOfAdults") as string) ?? ""
  const numberOfChildren = (formData.get("numberOfChildren") as string) ?? ""
  const location = (formData.get("location") as string) ?? ""
  const accommodation = (formData.get("accommodation") as string) ?? ""
  const checkIn = (formData.get("checkIn") as string) ?? ""
  const checkOut = (formData.get("checkOut") as string) ?? ""
  const flexibleOnDates = (formData.get("flexibleOnDates") as string) ?? ""
  const selectedPreferredActivities = formData.get("preferredActivities")
    ? formData.get("preferredActivities")!.toString().split(",")
    : []

  const selectedDietaryRequirements = formData.get("dietaryRequirements")
    ? formData.get("dietaryRequirements")!.toString().split(",")
    : []

  const selectedAccessibilityRequirements = formData.get(
    "accessibilityRequirements",
  )
    ? formData.get("accessibilityRequirements")!.toString().split(",")
    : []

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
    selectedDietaryRequirements,
    selectedAccessibilityRequirements,
  }
}
