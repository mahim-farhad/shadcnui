// "use client";

// import { useEffect } from "react";

// import { useSearchParams } from "next/navigation";

// import { toast } from "sonner";

import { logoutUserAction } from
  "@utils/data/actions/auth-actions";

import { getUserMeLoader } from "@utils/data/services/get-user-me-loader";

import Typography from "@components/ui/Typography";
import Link from "@components/ui/Link";
import Button from "@components/ui/Button";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

async function Home() {
  // const searchParams = useSearchParams();
  // const message = searchParams.get("message");

  // useEffect(() => {
  //   toast.error(message, {
  //     position: 'top-center',
  //   });

  //   // window.history.replaceState(null, "", window.location.pathname);
  // }, [message]);

  const user = await getUserMeLoader();

  console.log(user);

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
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
