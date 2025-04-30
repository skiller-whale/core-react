import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  legend: string;
}>;

const Fieldset = ({ legend, children }: Props) => (
  <fieldset className="flex flex-col gap-4">
    <legend className="text-2xl font-semibold mb-6">{legend}</legend>
    {children}
  </fieldset>
);

export default Fieldset;
