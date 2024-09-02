import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

async function Home() {
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
            {console.log("Turbo Console")}
          </Box>
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
