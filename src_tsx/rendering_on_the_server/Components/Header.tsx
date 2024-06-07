import type { PropsWithChildren } from "react";

type Props = {
  href: string;
  callToAction: string;
};

const Header = ({ href, callToAction, children }: PropsWithChildren<Props>) => {
  return (
    <div className="flex flex-col gap-6">
      <a
        className="block bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
        href={href}
      >
        {callToAction}
      </a>
      <h1 className="text-2xl font-semibold">{children}</h1>
    </div>
  );
};

export default Header;
