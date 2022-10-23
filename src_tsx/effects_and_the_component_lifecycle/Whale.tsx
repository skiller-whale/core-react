import { type FC } from "react"
import { type WhaleProps } from "./whales"

const Whale: FC<WhaleProps> = ({ name, about }) => (
  <div className="py-2">
    <h4 className="text-lg font-bold mb-2">{name}</h4>
    <p>{about}</p>
  </div>
)

export default Whale
