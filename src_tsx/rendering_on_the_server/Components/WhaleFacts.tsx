import type { WhaleFactsProps } from "../data/facts";
import Header from "./Header";
import WhaleFact from "./WhaleFact";

export type Props = {
  facts: WhaleFactsProps[];
};

const WhaleFacts = ({ facts }: Props) => (
  <div className="flex flex-col gap-6">
    <Header href="../rendering_on_the_server" callToAction="Go back home">
      Fun (?) facts (?) about whales (?)
    </Header>
    <div className="flex flex-col space-y-4">
      {facts.map((fact) => (
        <WhaleFact key={fact.id} {...fact} />
      ))}
    </div>
  </div>
);

export default WhaleFacts;
