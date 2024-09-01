import { getUsers } from "@api/users";

import Button from "@components/ui/Button";
import Icon from "@components/ui/Icon";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@components/ui/Table";

async function UserTable() {
  const users = await getUsers();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Confirmation</TableHead>
          <TableHead className="text-right">Blocked</TableHead>
          <TableHead className="text-right">Role Type</TableHead>
          <TableHead className="text-right">Edit</TableHead>
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
            <TableCell className="text-right">{user?.role?.type}</TableCell>
            <TableCell className="text-right">
              <Button
                type="submit"
                variant="text" iconOnly
              >
                <Icon name="Pencil" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default UserTable;
