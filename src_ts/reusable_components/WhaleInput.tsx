import type { ComponentProps, PropsWithChildren } from "react";

type Props = ComponentProps<"input">;

const WhaleInput = (props: Props) => (
  <div className="relative pl-20 pb-12">
    <div className="absolute left-8 top-0 h-24 w-12 bg-sky-900 rounded-tl-full"></div>
    <div className="absolute left-8 top-14 h-12 w-12 bg-white rounded-tl-2xl"></div>
    <div className="absolute left-8 top-16 h-8 w-8 bg-sky-900 rounded-tr-full rounded-bl-full"></div>
    <div className="absolute left-0 top-16 h-8 w-8 bg-sky-900 rounded-tl-full rounded-br-full"></div>
    <div className="relative border-8 border-sky-900 rounded-r-lg">
      <div className="absolute right-12 top-2 h-4 w-4 rounded-full border border-black">
        <div className="absolute top-1 left-1 h-2 w-2 rounded-full bg-black"></div>
      </div>
      <div className="h-10">
        <input {...props} />
      </div>
    </div>
  </div>
);

export default WhaleInput;
