import { type FormEvent, useState } from "react";
import type { Whale } from "lib/apiTypes";
import WhaleForm from "./WhaleForm/WhaleForm";
import WhaleTable from "./WhaleTable/WhaleTable";
import cetaceans from "./cetaceans";
import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";

type Props = {
  whales: Whale[];
};

const App = ({ whales: initialWhales }: Props) => {
  const [formColour] = useState("blue");

  const [whales, setWhales] = useState(initialWhales);
  const addWhale = (whale: Whale) => setWhales([...whales, whale]);
  const removeLastWhale = () => setWhales(whales.slice(0, -1));
  const whalesHaveBeenAdded = whales.length > initialWhales.length;

  const createWhale = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const species = formData.get("species") as string;
    const x = parseFloat(formData.get("x") as string);
    const y = parseFloat(formData.get("y") as string);
    if (name !== "" && species !== "" && !isNaN(x) && !isNaN(y)) {
      const id = crypto.randomUUID();
      const weight = 0;
      const hasBaleen =
        species.includes("Dolphin") || species.includes("Sperm");

      const location = { x, y, depth: 0 };
      addWhale({ id, name, species, weight, hasBaleen, location });
    }
  };

  // replace these two lines with the commented out code when instructed
  let isValid = true;
  const validate = () => {};
  // const [isValid, setIsValid] = useState(false)
  // const validate = (event: FormEvent<HTMLFormElement>) => {
  //   const formData = new FormData(event.currentTarget)
  //   const name = formData.get("name") as string
  //   const species = formData.get("species") as string
  //   const x = parseFloat(formData.get("x") as string)
  //   const y = parseFloat(formData.get("y") as string)
  //   setIsValid(name !== "" && species !== "" && !isNaN(x) && !isNaN(y))
  // }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Whale Location Service</h1>
      <div className={`flex flex-col gap-3 p-3 shadow-md bg-${formColour}-100`}>
        <form
          className="flex flex-col gap-2"
          onSubmit={createWhale}
          onChange={validate}
        >
          <div className="flex gap-3 justify-between items-baseline">
            <h2 className="text-lg font-semibold">Report a Whale Sighting</h2>
            <Select name="species" options={cetaceans} />
          </div>
          <div className="flex gap-3">
            <Input name="name" placeholder="name" />
            <Input
              type="number"
              name="x"
              placeholder="x-coordinate"
              defaultValue="0"
            />
            <Input
              type="number"
              name="y"
              placeholder="y-coordinate"
              defaultValue="0"
            />
          </div>
          <div className="flex gap-3 justify-end">
            {whalesHaveBeenAdded ? (
              <>
                <Button type="button" onClick={removeLastWhale}>
                  Remove Last Sighting
                </Button>
                <Button disabled={!isValid}>Report Another Sighting</Button>
              </>
            ) : (
              <Button disabled={!isValid}>Report Sighting</Button>
            )}
          </div>
        </form>
      </div>
      <WhaleTable whales={whales} />
    </div>
  );
};

export default App;
