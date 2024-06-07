import { useRef, useState } from "react";

const ReportSighting = ({ cetaceans }) => {
  const alertRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const [error, setError] = useState("");
  const validate = (event) => {
    const name = event.currentTarget.value;
    setError(name === "" ? "Name is required" : "");
  };

  return (
    <>
      <div
        ref={alertRef}
        className={`bg-green-100 text-green-700 border-green-600 border p-4 flex justify-between ${!submitted && "absolute -top-48"}`}
      >
        {submitted ? (
          <>
            <p>{submitted ? "Sighting reported! " : ""}</p>
            <button onClick={() => setSubmitted(false)}>&times;</button>
          </>
        ) : null}
      </div>
      <main className="shadow bg-slate-100 p-6">
        <form className="flex flex-col gap-6" onSubmit={submitHandler}>
          <h2 className="text-lg font-semibold">Report a Whale Sighting</h2>
          <div className="grid grid-cols-6 gap-3 items-baseline">
            <label htmlFor="species" className="font-semibold">
              Species
            </label>
            <select className="col-span-5" id="species" name="species" required>
              {cetaceans.map((species) => (
                <option key={species} value={species}>
                  {species}
                </option>
              ))}
            </select>
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              className="col-span-5"
              id="name"
              name="name"
              required
              onChange={validate}
              onBlur={validate}
            />
            <p
              className={
                error ? "col-start-2 col-span-5 text-red-500" : "hidden"
              }
            >
              {error ? `Error: ${error}` : ""}
            </p>
            <legend id="coordinatesLabel" className="font-semibold">
              Coordinates (x, y)
            </legend>
            <fieldset
              className="col-span-5 grid grid-cols-2 gap-3"
              aria-labelledby="coordinatesLabel"
            >
              <input
                aria-label="x coordinate"
                id="x"
                name="x"
                type="number"
                defaultValue="0"
                required
              />
              <input
                aria-label="y coordinate"
                id="y"
                name="y"
                type="number"
                defaultValue="0"
                required
              />
            </fieldset>
            <button className="p-3 bg-blue-600 hover:bg-blue-800 text-white col-start-6">
              Report Sighting
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default ReportSighting;
