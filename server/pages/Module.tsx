type Props = {
  language: "js" | "ts";
  moduleKey: string;
};

const Module = ({ language, moduleKey }: Props) => (
  <>
    <header className="bg-blue-200 p-6">
      <div className="mx-auto max-w-6xl flex items-center px-3 gap-6">
        <img
          src="/server/images/ada.png"
          alt="Skiller Whale logo"
          className="w-12"
        />
        <div className="flex-1 flex items-baseline justify-between text-blue-900">
          <h1 className="text-3xl">Skiller Whale: Core React Exercises</h1>
          <h2 className="text-lg">
            {language === "js" ? `src/${moduleKey}` : `src_tsx/${moduleKey}`}
          </h2>
        </div>
      </div>
    </header>
    <main id="root" className="mx-auto max-w-6xl px-3 py-6"></main>
  </>
);

export default Module;
