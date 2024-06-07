import type { WhaleProps } from "./whales";

const Whale = ({ name, about, weight }: WhaleProps) => (
  <div className="prose">
    <h3>
      {name}, weight {weight}kg
    </h3>
    <p>{about}</p>
  </div>
);

export default Whale;
