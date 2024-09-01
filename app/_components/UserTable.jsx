import { getUsers } from "@api/users-services";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function UserTable() {
  const users = await getUsers();

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}

      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Confirmation</TableHead>
          <TableHead className="text-right">Provider</TableHead>
          <TableHead className="text-right">Blocked</TableHead>
          <TableHead className="text-right">Created At</TableHead>
          <TableHead className="text-right">Updated At</TableHead>
          <TableHead className="text-right">Role Type</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-right">{user.confirmed ? 'Yes' : 'No'}</TableCell>
            <TableCell className="text-right">{user.blocked ? 'Yes' : 'No'}</TableCell>
            <TableCell className="text-right">{user.provider}</TableCell>
            <TableCell className="text-right">{new Date(user.createdAt).toLocaleString()}</TableCell>
            <TableCell className="text-right">{new Date(user.updatedAt).toLocaleString()}</TableCell>
            <TableCell className="text-right">{user.role.type}</TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  );
}

export default UserTable;
