import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

import Sales from "@components/forms/Sales";

function Home() {
  return (
    <Main
      className={[
        "flex",
        "flex-col",
        "min-h-screen",
        "p-4 sm:p-16",
      ]}
    >
      <Section>
        <Container>
          <Box
            className={[
              "flex",
              "flex-col",
              "justify-center",
              "sm:max-w-[500px] lg:max-w-[850px]",
              "gap-y-4",
              "p-6 sm:p-12 lg:p-16",
              "mx-auto",
              "bg-white",
              "border",
              "rounded-xl",
              "shadow-xl"
            ]}
          >
            <Sales />
          </Box>
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
