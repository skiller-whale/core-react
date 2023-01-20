export type Planet = {
  id: string
  name: string
  img: string
  distanceFromSun: string
  additionalInfo: string
}

export const planets: Planet[] = [
  {
    id: "planet-mars",
    name: "Mars",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    distanceFromSun: "227.9 million km",
    additionalInfo:
      "The fourth planet from the Sun and the second-smallest planet in the Solar System, being only larger than Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet.",
  },
  {
    id: "planet-jupiter",
    name: "Jupiter",
    img: "https://cdn.mos.cms.futurecdn.net/iEv6pmS4gfbefs5JbwHWiJ.png",
    distanceFromSun: "778.5 million km",
    additionalInfo:
      "The fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
  },
  {
    id: "planet-saturn",
    name: "Saturn",
    img: "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg ",
    distanceFromSun: "1.434 billion km",
    additionalInfo:
      "The sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth",
  },
  {
    id: "planet-venus",
    name: "Venus",
    img: "https://cdn.mos.cms.futurecdn.net/kaPwBjHiUKax8syodHNPmF-320-80.jpg",
    distanceFromSun: "108.2 million km",
    additionalInfo:
      "The second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.",
  },
]
