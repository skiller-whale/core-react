import { type FC } from "react"
import { type WhaleProps } from "./whales"

const Whale: FC<WhaleProps> = ({ name, about, weight }) => (
  <div className="prose">
    <h3>
      {name}, weight {weight}kg
    </h3>
    <p>{about}</p>
  </div>
)

export default Whale
