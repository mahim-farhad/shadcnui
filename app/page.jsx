import { getUsers } from "@api/users-services";

import { logoutUserAction } from "@utils/actions/auth-actions";

// import { getUserMeLoader } from "@utils/data/services/get-user-me-loader";

import Typography from "@components/ui/Typography";
import Link from "@components/ui/Link";
import Button from "@components/ui/Button";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function Home() {
  // const user = await getUserMeLoader();

  const users = await getUsers();

  console.log(users);

  return (
    <Main>
      <Section
        className={[
          "flex",
          "flex-col",
          "justify-center",
          "min-h-screen",
          "p-4 sm:p-16",
        ]}
      >
        <Container>
          <Box
            className={[
              "flex",
              "flex-col",
              "justify-center",
              "sm:max-w-[500px] lg:max-w-[500px]",
              "gap-y-4",
              "p-6 sm:p-12 lg:p-16",
              "mx-auto",
              "bg-white",
              "border",
              "rounded-xl",
              "shadow-xl"
            ]}
          >
            <Typography type="h4" className="font-sans text-black dark:text-black">
              Welcome to the Home Page
            </Typography>

            <form action={logoutUserAction}>
              <Button type="submit">
                Logout
              </Button>
            </form>

            <Link
              href="/dashboard"
              transition
              className="font-medium dark:text-gray-600"
            >
              Go to <span className="dark:text-primary">dashboard</span>
            </Link>
          </Box>

          <Box className="bg-gray-800">
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}

              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Confirmation</TableHead>
                  <TableHead className="text-right">Provider</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-right">{user.confirmed ? 'Yes' : 'No'}</TableCell>
                    <TableCell className="text-right">{user.provider}</TableCell>
                  </TableRow>
                ))}

                {/* 
                <p><strong>Blocked:</strong> {user.blocked ? 'Yes' : 'No'}</p>
            <p><strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(user.updatedAt).toLocaleString()}</p>
            <h4>Role Details:</h4>
            <p><strong>Role ID:</strong> {user.role.id}</p>
            <p><strong>Role Name:</strong> {user.role.name}</p>
            <p><strong>Description:</strong> {user.role.description}</p>
            <p><strong>Role Type:</strong> {user.role.type}</p>
            <p><strong>Role Created At:</strong> {new Date(user.role.createdAt).toLocaleString()}</p>
            <p><strong>Role Updated At:</strong> {new Date(user.role.updatedAt).toLocaleString()}</p>
             */}
              </TableBody>
            </Table>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
