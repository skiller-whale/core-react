export type Whale = {
  id: string
  name: string
  species: string
  weight: number
  hasBaleen: boolean
  location: Location
}

export type Fish = {
  id: string
  name: string
  species: string
  isSaltwater: boolean
}

export type Location = {
  x: number
  y: number
  depth: number
}
