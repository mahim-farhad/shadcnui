import { Suspense } from "react";

// import { getUserMeLoader } from "@utils/data/services/get-user-me-loader";

import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Container from "@components/layouts/Container";
import Box from "@components/layouts/Box";

import UserTable from "./_components/UserTable";

async function Home() {
  // const user = await getUserMeLoader();

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
          <Box className="bg-gray-800 p-8">
            <Suspense
              fallback={
                <div className="animate-pulse rounded-md bg-primary/10">
                  <p>Loading feed...</p>
                </div>
              }
            >
              <UserTable />
            </Suspense>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}

export default Home;
