import clsx from "clsx";

import Typography from "@components/ui/Typography";
import Button from "@components/ui/Button";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

function NotFound() {
  return (
    <Main className="dark:bg-background-dark">
      <Section
        className={clsx(
          "h-[calc(100vh-80px)]",
        )}
      >
        <Container>
          <Box
            className={clsx(
              "absolute",
              "top-1/2",
              "left-1/2",
              "-translate-y-1/2",
              "-translate-x-1/2",
              "text-center",
            )}
          >
            <Typography
              type="h1"
              className={clsx(
                "text-[10rem]",
                "opacity-25",
              )}
            >
              ERROR
            </Typography>

            <Typography
              type="h1"
              className={clsx(
                "-mt-32",
                "!text-[7rem]",
                "tracking-widest",
              )}
            >
              404
            </Typography>

            <Typography
              type="h4"
              className={clsx(
                "mb-6",
                "font-sans font-normal",
              )}
            >
              Page Not Found
            </Typography>

            <Button size="sm">
              Go to Home
            </Button>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}

export default NotFound;
