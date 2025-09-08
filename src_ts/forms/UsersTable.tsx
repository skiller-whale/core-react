import type { Optimistic, User } from "lib/apiTypes.ts";

type Props = {
  users: User[];
};

const UsersTable = ({ users }: Props) => (
  <div className="flex flex-col shadow-md p-6 gap-3">
    <h2 className="text-lg font-semibold">Existing Users</h2>
    <table>
      <tbody>
        {users.map((user) => (
          <tr key={user.username} className="odd:bg-gray-100">
            <td className="p-2">{user.username}@skillerwhale.com</td>
            <td className="p-2">{user.species}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UsersTable;
