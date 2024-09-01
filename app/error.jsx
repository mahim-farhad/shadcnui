"use client";

import Typography from "@components/ui/Typography";
import Button from "@components/ui/Button";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

function Error({ error, reset }) {
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
          <Box>
            <Typography type="h4" className="dark:text-black">
              {error.message}
            </Typography>

            <Button onClick={() => reset()}>
              Try again
            </Button>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}

export default Error;
