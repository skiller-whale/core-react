import { memo } from "react";

type Props = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  amountSpent: string;
};

const CustomerRow = ({ name, email, amountSpent }: Props) => (
  <tr className="border-b odd:bg-gray-100">
    <td className="py-2 px-3">
      {name.first} {name.last}
    </td>
    <td className="py-2 px-3">{email}</td>
    <td className="py-2 px-3">${amountSpent}</td>
  </tr>
);

export default CustomerRow;
