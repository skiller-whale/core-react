import type { User } from "lib/apiTypes";
import useNewUserFormState from "./hooks/useNewUserFormState";
import NewUserForm from "./NewUserForm";
import UsersTable from "./UsersTable";

type Props = {
  initialUsers: User[];
};

const App = ({ initialUsers }: Props) => {
  const [state, action, isSubmitting] = useNewUserFormState(initialUsers);

  return (
    <div className="flex flex-col gap-4">
      <NewUserForm
        error={state.error}
        isSubmitting={isSubmitting}
        action={action}
      />
      <UsersTable users={state.users} />
    </div>
  );
};

export default App;
