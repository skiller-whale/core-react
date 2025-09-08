import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";

const NewUserForm = ({ error, isSubmitting, action }) => (
  <form className="flex flex-col shadow-md p-6 gap-3" onSubmit={action}>
    <h2 className="text-lg font-semibold">Add New User</h2>
    <div className="flex gap-3 items-end">
      <Input label="Username" type="text" name="username" required />
      <Select
        label="Species"
        name="species"
        required
        options={[
          "Skiller Whale",
          "Blue Whale",
          "Humpback Whale",
          "Orca",
          "Sperm Whale",
        ]}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "..." : "Add User"}
      </Button>
    </div>
    {error && !isSubmitting ? (
      <p className="text-red-500">Error: {error}</p>
    ) : null}
  </form>
);

export default NewUserForm;
